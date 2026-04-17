// ==================== CATALOG SCRIPT - MODULAR CAR LOADING (Fixed) ====================

let modelsData = [];

// List of all your car files
const carFiles = [
    "assets/data/cars/R4.js",
    "assets/data/cars/R5.js",
    "assets/data/cars/R5P2.js",
    "assets/data/cars/R6.js",
    "assets/data/cars/R7.js",
    "assets/data/cars/R8.js",
    "assets/data/cars/R9.js",
    "assets/data/cars/R10.js",
    "assets/data/cars/R11.js",
    "assets/data/cars/R12.js",
    "assets/data/cars/R15.js",
    "assets/data/cars/R17.js",
    "assets/data/cars/R20.js",
    "assets/data/cars/R21.js",
    "assets/data/cars/R25.js",
    "assets/data/cars/R30.js"
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

// ==================== RENDER & SEARCH ====================
function renderModels(filteredModels) {
    const grid = document.getElementById('modelsGrid');
    if (!grid) return;

    grid.innerHTML = '';
    if (filteredModels.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding:40px; font-size:1.2rem; color:#777;">
            Cap model trobat.
        </p>`;
        return;
    }

    filteredModels.forEach(model => {
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
    });
}

function filterModels() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    const term = searchInput.value.toLowerCase().trim();
    const filtered = modelsData.filter(m =>
        m.brand.toLowerCase().includes(term) ||
        m.model.toLowerCase().includes(term) ||
        m.years.includes(term) ||
        m.description.toLowerCase().includes(term)
    );
    renderModels(filtered);
}

// ==================== GET DESTACATS (for cotxes.html) ====================
window.getCotxesDestacats = function () {
    return modelsData.filter(m => m.destacat === true);
};

// ==================== MODAL FUNCTIONALITY ====================

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
        
        <h3>Accessoris originals</h3>
        ${accessoriesHTML}
        
        <h3>Vídeos Relacionats</h3>
        ${videosHTML}
    `;

    document.getElementById('modalBody').innerHTML = bodyHTML;

    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
};

window.closeModal = function () {
    document.getElementById('modal').style.display = 'none';
};

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', async () => {
    await loadAllCars();

    // Catalog page (cataleg.html)
    if (document.getElementById('modelsGrid')) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('keyup', filterModels);
        }
        renderModels(modelsData);   // Show all cars initially
    }

    // Cotxes page (cotxes.html)
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