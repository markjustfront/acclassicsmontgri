// Cotxe del mes: one car per calendar month (Europe/Madrid), the same for every visitor.
// Uses the car list from car-files.js (carFiles). History starts in April 2026.
(function () {
    const START = { year: 2026, month: 3 }; // April 2026 (month is 0-based)
    const SEED = 20260401;
    const MONTHS = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'];
    // Cars that still use images/placeholder.svg: they go last within their brand.
    const NO_PHOTO = ['assets/data/cars/authi/mg-1300.js', 'assets/data/cars/pegaso/z103.js'];

    // Current year/month in Europe/Madrid, whatever the visitor's timezone
    function madridNow() {
        const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Madrid', year: 'numeric', month: 'numeric' }).formatToParts(new Date());
        const get = t => Number(parts.find(p => p.type === t).value);
        return { year: get('year'), month: get('month') - 1 };
    }
    const monthIndex = ym => (ym.year - START.year) * 12 + (ym.month - START.month);
    const monthFromIndex = i => { const t = START.month + i; return { year: START.year + Math.floor(t / 12), month: ((t % 12) + 12) % 12 }; };
    const monthLabel = ym => `${MONTHS[ym.month]} ${ym.year}`;

    // Small seeded PRNG (mulberry32) + Fisher-Yates shuffle
    function rng(seed) {
        let a = seed >>> 0;
        return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
    }
    function shuffle(arr, rand) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
        return a;
    }

    const files = (typeof carFiles !== 'undefined' ? carFiles : []).slice();
    const brandOf = f => f.split('/')[3] || f;

    // Build the schedule: each cycle uses every car once (seeded order within each brand,
    // photo-less cars last). Every brand's cars are spread evenly over the cycle (car k of a
    // brand with n cars sits near position (k + jitter) / n), so big brands don't cluster;
    // then any two consecutive months of the same brand are separated by pulling a later car forward.
    const schedule = [];
    function extend(upTo) {
        let cycle = Math.floor(schedule.length / Math.max(files.length, 1));
        while (schedule.length <= upTo && files.length) {
            const rand = rng(SEED + cycle * 7919);
            const queues = {};
            files.forEach(f => (queues[brandOf(f)] = queues[brandOf(f)] || []).push(f));
            const slots = [];
            Object.keys(queues).sort().forEach(b => {
                const q = shuffle(queues[b], rand);
                const ordered = q.filter(f => !NO_PHOTO.includes(f)).concat(q.filter(f => NO_PHOTO.includes(f)));
                const jitter = rand();
                ordered.forEach((f, k) => slots.push({ f, key: (k + jitter) / ordered.length }));
            });
            const seq = slots.sort((a, b) => a.key - b.key).map(s => s.f);
            for (let i = 0; i < seq.length; i++) {
                const prev = i ? seq[i - 1] : schedule[schedule.length - 1];
                if (prev && brandOf(seq[i]) === brandOf(prev)) {
                    const j = seq.findIndex((f, x) => x > i && brandOf(f) !== brandOf(prev));
                    if (j > 0) seq.splice(i, 0, seq.splice(j, 1)[0]);
                }
            }
            schedule.push(...seq);
            cycle++;
        }
    }
    const fileForMonth = i => { extend(i); return schedule[i]; };

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

    // Month list (newest first): the current month plus every month back to April 2026
    window.monthSchedule = { fileForMonth, monthFromIndex, monthLabel, madridNow, monthIndex };
    window.getCarsOfMonth = function (count) {
        if (!files.length) return Promise.resolve([]);
        const cur = Math.max(0, monthIndex(madridNow()));
        const n = Math.min(count == null ? Infinity : count, cur + 1);
        return Promise.all(Array.from({ length: n }, (_, k) => {
            const i = cur - k, ym = monthFromIndex(i);
            return loadCar(fileForMonth(i)).then(car => car && { car, ym, label: monthLabel(ym) });
        })).then(list => list.filter(Boolean));
    };

    // Home page teaser
    const teaser = document.getElementById('monthTeaser');
    if (teaser) {
        window.getCarsOfMonth(1).then(([m]) => {
            if (!m) { teaser.closest('section').hidden = true; return; }
            const c = m.car;
            teaser.innerHTML = `
                <div class="weekly-teaser">
                    <figure><img loading="lazy" src="${esc(c.image)}" alt="${esc(c.brand + ' ' + c.model)}">${credit(c.image)}</figure>
                    <div>
                        <span class="weekly-tag">${esc(m.label)}</span>
                        <h3>${esc(c.brand)} ${esc(c.model)}</h3>
                        <p><strong>${esc(c.years)}</strong></p>
                        <a class="event-link" href="cotxes.html">Descobreix-lo →</a>
                    </div>
                </div>`;
        });
    }

    // Cotxe del mes page
    const main = document.getElementById('monthCar');
    if (main) {
        window.getCarsOfMonth().then(list => {
            if (!list.length) { main.innerHTML = '<p class="home-events-empty">Ara mateix no hi ha cap cotxe disponible.</p>'; return; }
            const [m, ...prev] = list;
            const c = m.car;
            main.innerHTML = `
                <article class="weekly-car">
                    <figure class="weekly-photo"><img src="${esc(c.image)}" alt="${esc(c.brand + ' ' + c.model)}">${credit(c.image)}</figure>
                    <div class="weekly-info">
                        <span class="weekly-tag">${esc(m.label)}</span>
                        <h3>${esc(c.brand)} ${esc(c.model)}</h3>
                        <p class="weekly-years">${esc(c.years)}</p>
                        <p>${esc(c.description)}</p>
                        ${c.generalCharacteristics ? `<div class="weekly-specs">${c.generalCharacteristics}</div>` : ''}
                        <button type="button" class="btn" onclick="showModel(${Number(c.id)})">Fitxa completa</button>
                    </div>
                </article>`;
            const grid = document.getElementById('monthHistory');
            const title = document.getElementById('monthHistoryTitle');
            if (title) title.hidden = !prev.length;
            if (grid) grid.innerHTML = prev.map(p => `
                <li class="month-card">
                    <button type="button" class="month-card-btn" onclick="showModel(${Number(p.car.id)})" aria-label="${esc(p.label)}: ${esc(p.car.brand + ' ' + p.car.model)}, veure fitxa">
                        <img loading="lazy" decoding="async" src="${esc(p.car.image)}" alt="${esc(p.car.brand + ' ' + p.car.model)}">
                        <span class="month-card-body">
                            <span class="weekly-tag">${esc(p.label)}</span>
                            <span class="month-card-name">${esc(p.car.brand)} ${esc(p.car.model)}</span>
                            <span class="month-card-years">${esc(p.car.years)}</span>
                        </span>
                    </button>
                    ${credit(p.car.image)}
                </li>`).join('');
        });
    }
})();
