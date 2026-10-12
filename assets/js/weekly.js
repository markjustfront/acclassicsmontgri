// Cotxe de la setmana: one car per ISO week, the same for every visitor.
// Uses the car list from script.js (carFiles) and changes every Monday.
(function () {
    const DAY = 86400000;

    // ISO week number and ISO year for a date (local calendar day)
    function isoWeek(d) {
        const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        const dow = t.getUTCDay() || 7;
        t.setUTCDate(t.getUTCDate() + 4 - dow);
        const year = t.getUTCFullYear();
        return { year, week: Math.ceil(((t - Date.UTC(year, 0, 1)) / DAY + 1) / 7) };
    }

    // Continuous week counter (weeks since Monday 5 Jan 1970)
    function weekIndex(d) {
        const t = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
        return Math.floor((t - Date.UTC(1970, 0, 5)) / (7 * DAY));
    }

    const files = (typeof carFiles !== 'undefined' ? carFiles : []).slice();
    const n = files.length;
    const gcd = (a, b) => (b ? gcd(b, a % b) : a);
    const STEP = gcd(7, n) === 1 ? 7 : 1; // spread brands out from week to week
    const fileForWeek = k => files[(((k * STEP) % n) + n) % n];

    // Run one car file in isolation and return its car object
    function loadCar(file) {
        return fetch(file).then(r => (r.ok ? r.text() : '')).then(text => {
            const scope = { carData: [] };
            if (text) new Function('window', text)(scope);
            return scope.carData[0] || null;
        }).catch(() => null);
    }

    const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    const credit = p => (window.creditHTML ? window.creditHTML(p) : '');

    window.getCarsOfWeek = function (count) {
        if (!n) return Promise.resolve([]);
        const now = new Date();
        const k = weekIndex(now);
        return Promise.all(Array.from({ length: count }, (_, i) => {
            const date = new Date(now.getTime() - i * 7 * DAY);
            return loadCar(fileForWeek(k - i)).then(car => car && { car, iso: isoWeek(date) });
        })).then(list => list.filter(Boolean));
    };

    // Home page teaser
    const teaser = document.getElementById('weeklyTeaser');
    if (teaser) {
        window.getCarsOfWeek(1).then(([w]) => {
            if (!w) { teaser.closest('section').hidden = true; return; }
            const c = w.car;
            teaser.innerHTML = `
                <div class="weekly-teaser">
                    <figure><img loading="lazy" src="${esc(c.image)}" alt="${esc(c.brand + ' ' + c.model)}">${credit(c.image)}</figure>
                    <div>
                        <span class="weekly-tag">Setmana ${w.iso.week}</span>
                        <h3>${esc(c.brand)} ${esc(c.model)}</h3>
                        <p><strong>${esc(c.years)}</strong></p>
                        <a class="event-link" href="cotxes.html">Descobreix-lo →</a>
                    </div>
                </div>`;
        });
    }

    // Cotxe de la setmana page
    const main = document.getElementById('weeklyCar');
    if (main) {
        window.getCarsOfWeek(5).then(list => {
            if (!list.length) { main.innerHTML = '<p class="home-events-empty">Ara mateix no hi ha cap cotxe disponible.</p>'; return; }
            const [w, ...prev] = list;
            const c = w.car;
            main.innerHTML = `
                <article class="weekly-car">
                    <figure class="weekly-photo"><img src="${esc(c.image)}" alt="${esc(c.brand + ' ' + c.model)}">${credit(c.image)}</figure>
                    <div class="weekly-info">
                        <span class="weekly-tag">Setmana ${w.iso.week} · ${w.iso.year}</span>
                        <h3>${esc(c.brand)} ${esc(c.model)}</h3>
                        <p class="weekly-years">${esc(c.years)}</p>
                        <p>${esc(c.description)}</p>
                        ${c.generalCharacteristics ? `<div class="weekly-specs">${c.generalCharacteristics}</div>` : ''}
                        <button type="button" class="btn" onclick="showModel(${Number(c.id)})">Fitxa completa</button>
                    </div>
                </article>`;
            const strip = document.getElementById('weeklyPrevious');
            if (strip) strip.innerHTML = prev.map(p => `
                <div class="card" onclick="showModel(${Number(p.car.id)})">
                    <img loading="lazy" decoding="async" src="${esc(p.car.image)}" alt="${esc(p.car.brand + ' ' + p.car.model)}">
                    ${credit(p.car.image)}
                    <div class="card-content">
                        <span class="weekly-tag">Setmana ${p.iso.week}</span>
                        <h3>${esc(p.car.brand)} ${esc(p.car.model)}</h3>
                        <p><strong>${esc(p.car.years)}</strong></p>
                    </div>
                </div>`).join('');
        });
    }
})();
