// ==================== CATALOG SCRIPT - WITH LOAD MORE & DEEP SEARCH ====================

let modelsData = [];
let filteredData = [];
let displayedCount = 0;
const BATCH_SIZE = 9;

// List of all your car files: see assets/data/car-files.js

// Load all car files
async function loadAllCars() {
    modelsData = [];

    // Download all car files in parallel, then run them in the original order
    const texts = await Promise.all(carFiles.map(file =>
        fetch(file)
            .then(res => (res.ok ? res.text() : ''))
            .catch(() => { console.warn(`Failed to load ${file}`); return ''; })
    ));

    for (const text of texts) {
        if (!text) continue;
        const script = document.createElement('script');
        script.textContent = text;
        document.head.appendChild(script);
        script.remove();
    }

    if (window.carData && Array.isArray(window.carData)) {
        modelsData = [...window.carData];
        console.log(`✅ Loaded ${modelsData.length} cars total.`);
    }
}

/* Deep search including accessories */
function deepSearch(term) {
    if (!term) return modelsData;

    term = term.toLowerCase().trim();

    return modelsData.filter(model => {
        if (
            model.brand.toLowerCase().includes(term) ||
            model.model.toLowerCase().includes(term) ||
            model.years.toLowerCase().includes(term) ||
            model.description.toLowerCase().includes(term)
        ) return true;

        if (model.variants?.length) {
            if (model.variants.some(v =>
                Object.values(v).some(val => val?.toString().toLowerCase().includes(term))
            )) return true;
        }

        if (model.accessories?.length) {
            if (model.accessories.some(acc => {
                const text = `${acc.name} ${acc.description} ${acc.extra || ''}`.toLowerCase();
                return text.includes(term);
            })) return true;
        }

        return false;
    });
}

/* Render with Load More support */
function renderModels(filteredModels, append = false) {
    const grid = document.getElementById('modelsGrid');
    if (!grid) return;

    if (!append) grid.innerHTML = '';

    if (filteredModels.length === 0 && !append) {
        grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding:40px; font-size:1.2rem; color:#777;">
            Cap model trobat.
        </p>`;
        return;
    }

    const start = append ? displayedCount : 0;
    const end = Math.min(start + BATCH_SIZE, filteredModels.length);

    for (let i = start; i < end; i++) {
        const model = filteredModels[i];
        const cardHTML = `
            <div class="card" onclick="showModel(${model.id})">
                <img loading="lazy" decoding="async" src="${model.image}" alt="${model.brand} ${model.model}">
                ${window.creditHTML ? creditHTML(model.image) : ''}
                <div class="card-content">
                    <h3>${model.brand} ${model.model}</h3>
                    <p><strong>${model.years}</strong></p>
                    <p>${model.description}</p>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    }

    displayedCount = end;
}

/* Filter function */
function filterModels() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let term = searchInput.value.toLowerCase().trim();

    if (!term) {
        filteredData = modelsData;
        displayedCount = 0;
        renderModels(filteredData);
        return;
    }

    filteredData = deepSearch(term);
    displayedCount = 0;
    renderModels(filteredData);
}

// ==================== GET DESTACATS ====================
window.getCotxesDestacats = function () {
    return modelsData.filter(m => m.destacat === true);
};

// ==================== MODAL ====================
window.showModel = function (id) {
    const model = modelsData.find(m => m.id === id);
    if (!model) return;

    document.getElementById('modalTitle').innerHTML =
        `${model.brand} ${model.model} <small style="font-size:1rem; opacity:0.8;">(${model.years})</small>`;

    let variantsHTML = '';
    if (model.variants && model.variants.length > 0) {
        variantsHTML = `
            <table style="width:100%; border-collapse:collapse; margin:15px 0 25px 0;">
                <thead>
                    <tr style="background:#f0e8d8;">
                        <th style="padding:12px; text-align:left; border:1px solid #ddd;">Motor</th>
                        <th style="padding:12px; text-align:left; border:1px solid #ddd;">Potència</th>
                        <th style="padding:12px; text-align:left; border:1px solid #ddd;">Combustible</th>
                        <th style="padding:12px; text-align:left; border:1px solid #ddd;">Tracció</th>
                        <th style="padding:12px; text-align:left; border:1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.variants.map(v => `
                        <tr class="variant-row" onclick="toggleVariant(this)" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();toggleVariant(this);}" tabindex="0" aria-expanded="false" style="cursor:pointer;">
                            <td data-label="Motor">${v.engine}</td>
                            <td data-label="Potència">${v.power}</td>
                            <td data-label="Combustible">${v.fuel}</td>
                            <td data-label="Tracció">${v.traction}</td>
                            <td data-label="Notes">${v.notes}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    let accessoriesHTML = model.accessories?.map(acc => `
        <details>
            <summary>${acc.name}</summary>
            <div class="details-content">
                <p>${acc.description}</p>
                ${acc.images?.length ? `<div class="accessory-images">${acc.images.map(img => `<figure class="accessory-figure"><img loading="lazy" decoding="async" src="${img}" alt="${acc.name}">${window.creditHTML ? creditHTML(img) : ''}</figure>`).join('')}</div>` : ''}
                ${acc.extra ? `<p><strong>Extra:</strong> ${acc.extra}</p>` : ''}
            </div>
        </details>
    `).join('') || '<p style="opacity:0.6;">No hi ha accessoris definits encara.</p>';

    let videosHTML = model.videos?.map(video => `
        <div>
            <h4>${video.title}</h4>
            <p style="margin-bottom:12px;">${video.description}</p>
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/${video.youtubeId}" 
                        title="${video.title}" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
            </div>
        </div>
    `).join('') || '<p style="opacity:0.6;">Encara no hi ha vídeos relacionats.</p>';

    const bodyHTML = `
        <img loading="lazy" decoding="async" src="${model.image}" alt="${model.brand} ${model.model}" style="width:100%; border-radius:12px; margin-bottom:${window.imageCredits && window.imageCredits[model.image] ? '4px' : '25px'};">
        ${window.creditHTML ? creditHTML(model.image, 'modal-credit') : ''}
        <p style="font-size:1.15rem; margin-bottom:25px;">${model.description}</p>
        
        <h3>Característiques Generals</h3>
        <p style="background:#f8f6f0; padding:15px; border-radius:8px; margin-bottom:25px;">${model.generalCharacteristics}</p>
        
        <h3>Variants de Motor</h3>
        ${variantsHTML}
        
        <h3>Punts Destacats i Accessoris</h3>
        ${accessoriesHTML}
        
        <h3>Vídeos Relacionats</h3>
        ${videosHTML}
    `;

    document.getElementById('modalBody').innerHTML = bodyHTML;

    openModal();
};

window.toggleVariant = function (row) {
    const open = row.classList.toggle('expanded');
    row.setAttribute('aria-expanded', open ? 'true' : 'false');
};

// Modal open/close: scroll lock, history (back button closes), Escape, backdrop
let modalOpen = false;
let savedScrollY = 0;

function openModal() {
    const modal = document.getElementById('modal');
    if (!modalOpen) {
        savedScrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${savedScrollY}px`;
        document.body.style.left = '0';
        document.body.style.right = '0';
        document.body.style.overflow = 'hidden';
        history.pushState({ modal: true }, '');
        modalOpen = true;
    }
    modal.style.display = 'flex';
    const content = modal.querySelector('.modal-content');
    if (content) content.scrollTop = 0;
    const btn = modal.querySelector('.close');
    if (btn) btn.focus({ preventScroll: true });
    modal.onclick = (e) => { if (e.target === modal) closeModal(); };
}

function hideModal() {
    if (!modalOpen) return;
    modalOpen = false;
    document.getElementById('modal').style.display = 'none';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    window.scrollTo(0, savedScrollY);
}

window.closeModal = function () {
    if (!modalOpen) return;
    // Pop our history entry; popstate handler hides the modal
    if (history.state && history.state.modal) history.back();
    else hideModal();
};

window.addEventListener('popstate', () => { if (modalOpen) hideModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOpen) closeModal(); });

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', async () => {
    await loadAllCars();

    // === CATALEG PAGE ===
    if (document.getElementById('modelsGrid')) {
        const searchInput = document.getElementById('searchInput');
        const loadMoreBtn = document.getElementById('loadMoreBtn');

        if (searchInput) {
            searchInput.addEventListener('input', filterModels);
            // Prefill from ?q= (e.g. brand links on the home page)
            const q = new URLSearchParams(location.search).get('q');
            if (q) searchInput.value = q;
        }

        // Show only first 9 cars
        filteredData = modelsData;
        displayedCount = 0;
        renderModels(filteredData);
        if (searchInput && searchInput.value) filterModels();

        // Load More button
        if (loadMoreBtn) {
            loadMoreBtn.style.display = 'inline-block';
            loadMoreBtn.addEventListener('click', () => {
                renderModels(filteredData, true);
            });
        }
    }

    // === COTXES PAGE ===
    if (document.getElementById('cotxes-grid')) {
        const destacats = window.getCotxesDestacats ? window.getCotxesDestacats() : [];
        const container = document.getElementById('cotxes-grid');
        container.innerHTML = '';

        if (destacats.length === 0) {
            container.innerHTML = `<p style="grid-column:1/-1; text-align:center; padding:60px; color:#777;">
                Encara no hi ha cotxes destacats.
            </p>`;
            return;
        }

        destacats.forEach(model => {
            const cardHTML = `
                <div class="card" onclick="showModel(${model.id})">
                    <img loading="lazy" decoding="async" src="${model.image}" alt="${model.brand} ${model.model}">
                    ${window.creditHTML ? creditHTML(model.image) : ''}
                    <div class="card-content">
                        <h3>${model.brand} ${model.model}</h3>
                        <p><strong>${model.years}</strong></p>
                        <p>${model.description}</p>
                    </div>
                </div>
            `;
            container.innerHTML += cardHTML;
        });
    }
});
