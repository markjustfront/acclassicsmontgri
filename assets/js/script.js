// ==================== CATALOG SCRIPT - WITH LOAD MORE & DEEP SEARCH ====================

let modelsData = [];
let filteredData = [];
let displayedCount = 0;
const BATCH_SIZE = 9;

// List of all your car files
const carFiles = [
    //Renault:
    "assets/data/cars/renault/R3.js", // ID 35
    "assets/data/cars/renault/R4.js", // ID 1
    "assets/data/cars/renault/R5.js", // ID 2
    "assets/data/cars/renault/R5P2.js", // ID 3
    "assets/data/cars/renault/R6.js", // ID 4
    "assets/data/cars/renault/R7.js", // ID 5
    "assets/data/cars/renault/R8.js", // ID 6
    "assets/data/cars/renault/R9.js", // ID 7
    "assets/data/cars/renault/R10.js", // ID 8
    "assets/data/cars/renault/R11.js", // ID 9
    "assets/data/cars/renault/R12.js", // ID 10
    "assets/data/cars/renault/R14.js", // ID 11
    "assets/data/cars/renault/R15.js", // ID 12
    "assets/data/cars/renault/R16.js", // ID 13
    "assets/data/cars/renault/R17.js", // ID 14
    "assets/data/cars/renault/R18.js", // ID 15
    "assets/data/cars/renault/R19.js", // ID 16
    "assets/data/cars/renault/R20.js", // ID 17
    "assets/data/cars/renault/R21.js", // ID 18
    "assets/data/cars/renault/R25.js", // ID 19
    "assets/data/cars/renault/R30.js", // ID 20
    "assets/data/cars/renault/Fuego.js", // ID 21
    "assets/data/cars/renault/R4CV.js", // ID 32
    "assets/data/cars/renault/Dauphine.js", // ID 33
    "assets/data/cars/renault/Floride.js", // ID 34
    // Alpine:
    "assets/data/cars/alpine/A610.js", // ID 22
    "assets/data/cars/alpine/A110.js", // ID 23
    "assets/data/cars/alpine/A310.js", // ID 24
    "assets/data/cars/alpine/GTA.js", // ID 25
    "assets/data/cars/alpine/A106.js", // ID 36
    "assets/data/cars/alpine/A108.js", // ID 37
    "assets/data/cars/alpine/GT4.js", // ID 38
    // Seat
    "assets/data/cars/seat/600.js", // ID 39
    "assets/data/cars/seat/850.js", // ID 40
    "assets/data/cars/seat/124.js", // ID 41
    "assets/data/cars/seat/1430.js", // ID 42
    "assets/data/cars/seat/1500.js", // ID 43
    "assets/data/cars/seat/1400.js", // ID 44
    "assets/data/cars/seat/127.js", // ID 45
    "assets/data/cars/seat/131.js", // ID 46
    // Peugeot:
    "assets/data/cars/peugeot/203.js", // ID 47
    "assets/data/cars/peugeot/403.js", // ID 48
    "assets/data/cars/peugeot/404.js", // ID 49
    "assets/data/cars/peugeot/504.js", // ID 50
    "assets/data/cars/peugeot/504-coupe.js", // ID 51
    "assets/data/cars/peugeot/205.js", // ID 52
    "assets/data/cars/peugeot/405.js", // ID 54
    // Citroën:
    "assets/data/cars/citroen/2cv.js",           // ID 55
    "assets/data/cars/citroen/traction-avant.js", // ID 56
    "assets/data/cars/citroen/ds.js",            // ID 57
    "assets/data/cars/citroen/gs.js",            // ID 58
    "assets/data/cars/citroen/cx.js",            // ID 59
    "assets/data/cars/citroen/bx.js",            // ID 60
    "assets/data/cars/citroen/sm.js"             // ID 61
];

// Load all car files
async function loadAllCars() {
    modelsData = [];

    for (const file of carFiles) {
        try {
            const res = await fetch(file);
            if (!res.ok) continue;

            const text = await res.text();
            const script = document.createElement('script');
            script.textContent = text;
            document.head.appendChild(script);
            await new Promise(r => setTimeout(r, 40));
            script.remove();
        } catch (e) {
            console.warn(`Failed to load ${file}`);
        }
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
                <img src="${model.image}" alt="${model.brand} ${model.model}">
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
                        <tr onclick="this.classList.toggle('expanded')" style="cursor:pointer;">
                            <td data-label="Motor">${v.engine}</td>
                            <td data-label="Potència">${v.power}</td>
                            <td data-label="Combustible">${v.fuel}</td>
                            <td data-label="Tracció">${v.traction}</td>
                            <td data-label="Notes">${v.notes}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <p style="font-size:0.85rem; color:#777; text-align:center; margin-top:8px;">
                <em>Toca una fila per veure més detalls (només en mòbil)</em>
            </p>
        `;
    }

    let accessoriesHTML = model.accessories?.map(acc => `
        <details>
            <summary>${acc.name}</summary>
            <div class="details-content">
                <p>${acc.description}</p>
                ${acc.images?.length ? `<div class="accessory-images">${acc.images.map(img => `<img src="${img}" alt="${acc.name}">`).join('')}</div>` : ''}
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
        <img src="${model.image}" alt="${model.brand} ${model.model}" style="width:100%; border-radius:12px; margin-bottom:25px;">
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

    const modal = document.getElementById('modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
};

window.closeModal = function () {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'visible';
};

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', async () => {
    await loadAllCars();

    // === CATALEG PAGE ===
    if (document.getElementById('modelsGrid')) {
        const searchInput = document.getElementById('searchInput');
        const loadMoreBtn = document.getElementById('loadMoreBtn');

        if (searchInput) {
            searchInput.addEventListener('input', filterModels);
        }

        // Show only first 9 cars
        filteredData = modelsData;
        displayedCount = 0;
        renderModels(filteredData);

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
                    <img src="${model.image}" alt="${model.brand} ${model.model}">
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
