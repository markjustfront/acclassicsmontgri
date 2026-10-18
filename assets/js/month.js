// Cotxe de la setmana: one car per week (Monday to Sunday, Europe/Madrid), the same for every visitor.
// Uses the car list from car-files.js (carFiles). History starts the week of 12 October 2026 (Fiat X1/9).
(function () {
    const START = Date.UTC(2026, 9, 12); // Monday 12 October 2026
    const WEEK = 7 * 864e5;
    // Weeks already published (past, current and next ones) are pinned, so adding cars to car-files.js
    // never changes them: week 0 = 12 Oct 2026 (Fiat X1/9, pairs with the first Disc de la setmana).
    // Taken from the schedule of the 139-car list. Only append to this list, never edit or reorder it.
    const PINNED = [
        'assets/data/cars/fiat/x19.js',        // 12 d'octubre 2026
        'assets/data/cars/lancia/fulvia.js',   // 19 d'octubre 2026
        'assets/data/cars/ford/fiesta-mk1.js', // 26 d'octubre 2026
        'assets/data/cars/bmw/2002.js',        // 2 de novembre 2026
    ];
    const SEED = 20261012;
    const MONTHS = ['gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre', 'novembre', 'desembre'];
    // Cars that still use images/placeholder.svg: they go last within their brand.
    const NO_PHOTO = ['assets/data/cars/authi/mg-1300.js', 'assets/data/cars/pegaso/z103.js'];

    // Today's date in Europe/Madrid, whatever the visitor's timezone
    function madridNow() {
        const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Madrid', year: 'numeric', month: 'numeric', day: 'numeric' }).formatToParts(new Date());
        const get = t => Number(parts.find(p => p.type === t).value);
        return { year: get('year'), month: get('month') - 1, day: get('day') };
    }
    const weekIndex = d => Math.floor((Date.UTC(d.year, d.month, d.day) - START) / WEEK);
    const weekFromIndex = i => { const t = new Date(START + i * WEEK); return { year: t.getUTCFullYear(), month: t.getUTCMonth(), day: t.getUTCDate() }; };
    const weekLabel = w => { const m = MONTHS[w.month]; return `Setmana del ${w.day} ${/^[aeiou]/.test(m) ? "d'" : 'de '}${m}`; };

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
    // photo-less cars last). The first cycle starts with the PINNED weeks and shuffles the rest.
    // Every brand's cars are spread evenly over the cycle (car k of a
    // brand with n cars sits near position (k + jitter) / n), so big brands don't cluster;
    // then any two consecutive weeks of the same brand are separated by pulling a later car forward.
    const schedule = [];
    function extend(upTo) {
        let cycle = Math.floor(schedule.length / Math.max(files.length, 1));
        while (schedule.length <= upTo && files.length) {
            const rand = rng(SEED + cycle * 7919);
            const pinned = cycle === 0 ? PINNED.filter(f => files.includes(f)) : [];
            if (cycle === 0) schedule.push(...pinned);
            const queues = {};
            files.filter(f => !pinned.includes(f)).forEach(f => (queues[brandOf(f)] = queues[brandOf(f)] || []).push(f));
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
    const fileForWeek = i => { extend(i); return schedule[i]; };

    // Run one car file in isolation and return its car object
    function loadCar(file) {
        return fetch(file).then(r => (r.ok ? r.text() : '')).then(text => {
            const scope = { carData: [] };
            if (text) new Function('window', text)(scope);
            return scope.carData[0] || null;
        }).catch(() => null);
    }

    const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    // Pick 2-3 key specs ("<strong>Label:</strong> value") from generalCharacteristics
    const SPEC_ORDER = [['Potència', 'Potència'], ['Motor', 'Motor'], ['Desplaçament', 'Motor'], ['Velocitat', 'Velocitat màx.'], ['Tracció', 'Tracció'], ['Unitats', 'Unitats']];
    function keySpecs(html) {
        const found = {};
        String(html || '').replace(/<strong>([^<:]+):?<\/strong>:?\s*([^<]+)/g, (_, k, v) => { found[k.trim()] = v.trim(); });
        const out = [], used = new Set();
        SPEC_ORDER.forEach(([key, label]) => {
            if (out.length >= 3 || used.has(label)) return;
            const k = Object.keys(found).find(x => x.startsWith(key));
            if (k && found[k]) { out.push({ label, value: found[k] }); used.add(label); }
        });
        return out;
    }
    const credit = p => (window.creditHTML ? window.creditHTML(p) : '');

    // Week list (newest first): the current week plus every week back to 12 October 2026
    window.weekSchedule = { fileForWeek, weekFromIndex, weekLabel, madridNow, weekIndex };
    window.getCarsOfWeek = function (count) {
        if (!files.length) return Promise.resolve([]);
        const cur = Math.max(0, weekIndex(madridNow()));
        const n = Math.min(count == null ? Infinity : count, cur + 1);
        return Promise.all(Array.from({ length: n }, (_, k) => {
            const i = cur - k, wk = weekFromIndex(i);
            return loadCar(fileForWeek(i)).then(car => car && { car, wk, label: weekLabel(wk) });
        })).then(list => list.filter(Boolean));
    };

    // Home page teaser
    const teaser = document.getElementById('monthTeaser');
    if (teaser) {
        window.getCarsOfWeek(1).then(([m]) => {
            if (!m) { teaser.closest('section').hidden = true; return; }
            const c = m.car;
            const specs = keySpecs(c.generalCharacteristics);
            teaser.innerHTML = `
                <div class="weekly-teaser">
                    <figure><img loading="lazy" src="${esc(c.image)}" alt="${esc(c.brand + ' ' + c.model)}">${credit(c.image)}</figure>
                    <div class="teaser-body">
                        <span class="weekly-tag">${esc(m.label)}</span>
                        <h3>${esc(c.brand)} ${esc(c.model)}</h3>
                        ${c.years ? `<p class="teaser-years">${esc(c.years)}</p>` : ''}
                        ${specs.length ? `<ul class="teaser-specs">${specs.map(x => `<li><span>${esc(x.label)}</span> ${esc(x.value)}</li>`).join('')}</ul>` : ''}
                        ${c.description ? `<p class="teaser-desc">${esc(c.description)}</p>` : ''}
                        <div class="teaser-actions">
                            <a class="cta cta-primary cta-md" href="cotxes.html"><span>Descobreix-lo</span><svg class="cta-arrow" aria-hidden="true" focusable="false" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
                            <a class="teaser-link" href="cotxes.html#historial">Setmanes anteriors <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>`;
        });
    }

    // Cotxe de la setmana page
    const main = document.getElementById('monthCar');
    if (main) {
        window.getCarsOfWeek().then(list => {
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
            const title = document.getElementById('historial');
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
            if (location.hash === '#historial' && title) requestAnimationFrame(() => title.scrollIntoView());
        });
    }
})();
