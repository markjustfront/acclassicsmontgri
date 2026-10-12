// Home page: upcoming events (from assets/data/events.js) and scroll reveal
(function () {
    const box = document.getElementById('homeEvents');
    if (box) {
        const today = new Date().toISOString().slice(0, 10);
        const labels = { trobada: 'Trobada', exposicio: 'Exposició', rally: 'Ral·li' };
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

    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(el => el.classList.add('visible')); return; }
    const io = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
})();
