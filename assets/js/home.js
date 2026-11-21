// Home page: upcoming events (from assets/data/events.js) and scroll reveal
(function () {
    const box = document.getElementById('homeEvents');
    if (box) {
        const today = new Date().toISOString().slice(0, 10);
        const labels = { rally: 'Ral·li', trobada: 'Trobada', fira: 'Fira', altres: 'Altres', exposicio: 'Exposició' };
        const next = (window.ACC_EVENTS || [])
            .filter(e => e.date >= today)
            .sort((a, b) => a.date.localeCompare(b.date))
            .slice(0, 3);
        const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
        box.innerHTML = next.length ? next.map(e => {
            const d = new Date(e.date + 'T00:00:00');
            const day = d.getDate();
            const month = d.toLocaleDateString('ca', { month: 'short' }).replace('.', '');
            return `
            <article class="home-event">
                <div class="home-event-date"><span>${day}</span>${esc(month)}</div>
                <div class="home-event-body">
                    <span class="badge ${esc(e.type)}">${esc(labels[e.type] || e.type)}</span>
                    <h3>${esc(e.title)}</h3>
                    <p class="home-event-meta">${esc(e.location)} · ${esc(e.dateText)} ${d.getFullYear()}</p>
                    <a href="${esc(e.url)}" target="_blank" rel="noopener" class="event-link">Més informació →</a>
                </div>
            </article>`;
        }).join('') : '<p class="home-events-empty">Ara mateix no hi ha cap trobada anunciada. Consulta tots els esdeveniments.</p>';
    }

    // Photo strip: past events the club attended, newest first
    const strip = document.getElementById('clubStrip');
    const track = document.getElementById('clubStripTrack');
    if (strip && track) {
        const today = new Date().toISOString().slice(0, 10);
        const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
        const shots = (window.ACC_EVENTS || [])
            .filter(e => e.club && e.img && e.date < today)
            .sort((a, b) => b.date.localeCompare(a.date));
        if (shots.length) {
            track.innerHTML = shots.map(e => {
                const year = e.date.slice(0, 4);
                const when = e.dateText ? `${e.dateText} ${year}` : year;
                const href = e.url || 'esdeveniments';
                const ext = e.url ? ' target="_blank" rel="noopener"' : '';
                return `
                <li class="club-strip-item">
                    <a href="${esc(href)}"${ext}>
                        <img src="${esc(e.img)}" alt="${esc(e.title)}" loading="lazy" decoding="async" width="328" height="500">
                        <span class="club-strip-cap"><strong>${esc(e.title)}</strong><span>${esc(e.location.replace(/\s*\(.*\)/, ''))} · ${esc(when)}</span></span>
                    </a>
                </li>`;
            }).join('');
            strip.hidden = false;
            const btns = strip.querySelectorAll('.club-strip-btn');
            const update = () => {
                const max = track.scrollWidth - track.clientWidth - 2;
                btns[0].disabled = track.scrollLeft <= 2;
                btns[1].disabled = track.scrollLeft >= max;
            };
            btns.forEach(b => b.addEventListener('click', () => {
                const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                track.scrollBy({ left: Number(b.dataset.dir) * track.clientWidth * 0.8, behavior: reduce ? 'auto' : 'smooth' });
            }));
            track.addEventListener('scroll', update, { passive: true });
            window.addEventListener('resize', update);
            update();
        }
    }

    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('visible')); return; }
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
})();
