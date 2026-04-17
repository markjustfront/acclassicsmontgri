// ==================== CATALOG SCRIPT - MODULAR CAR LOADING ====================

let modelsData = [];

// List of all your car files (add new ones here)
const carFiles = [
    "assets/data/cars/R4.js",
    "assets/data/cars/R5.js",
    "assets/data/cars/R5P2.js",
    "assets/data/cars/R6.js",
    "assets/data/cars/R7.js",
    "assets/data/cars/R8.js",
    "assets/data/cars/R9.js",
    "assets/data/cars/R11.js",
    "assets/data/cars/R12.js",
    "assets/data/cars/R15.js",
    "assets/data/cars/R17.js",
    "assets/data/cars/R20.js",
    "assets/data/cars/R25.js"
    // Add new car files here when you create them
];

// Load all car files dynamically
async function loadAllCars() {
    modelsData = []; 

    try {
        const promises = carFiles.map(async (file) => {
            const res = await fetch(file);
            if (!res.ok) {
                console.warn(`Failed to load: ${file}`);
                return;
            }
            const text = await res.text();

            // Execute the car file (it should push to window.carData)
            const script = document.createElement('script');
            script.textContent = text;
            document.body.appendChild(script);

            // Clean up temporary script
            setTimeout(() => script.remove(), 50);
        });

        await Promise.all(promises);

        // Copy loaded data
        if (window.carData && window.carData.length > 0) {
            modelsData = [...window.carData];
            window.carData = []; // reset for next load
        }

        renderModels(modelsData);

    } catch (error) {
        console.error("Error loading car data:", error);
        grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding:40px; color:red;">
            Error carregant els cotxes. Si us plau, recarrega la pàgina.
        </p>`;
    }
}

// ==================== RENDER & SEARCH ====================
const grid = document.getElementById('modelsGrid');
const searchInput = document.getElementById('searchInput');

function renderModels(filteredModels) {
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
    const term = searchInput.value.toLowerCase().trim();
    const filtered = modelsData.filter(m =>
        m.brand.toLowerCase().includes(term) ||
        m.model.toLowerCase().includes(term) ||
        m.years.includes(term) ||
        m.description.toLowerCase().includes(term)
    );
    renderModels(filtered);
}

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
                        <tr>
                            <td style="padding:12px; border:1px solid #ddd;">${v.engine}</td>
                            <td style="padding:12px; border:1px solid #ddd;">${v.power}</td>
                            <td style="padding:12px; border:1px solid #ddd;">${v.fuel}</td>
                            <td style="padding:12px; border:1px solid #ddd;">${v.traction}</td>
                            <td style="padding:12px; border:1px solid #ddd;">${v.notes}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    }

    let accessoriesHTML = '';
    if (model.accessories && model.accessories.length > 0) {
        accessoriesHTML = model.accessories.map(acc => `
            <details>
                <summary>${acc.name}</summary>
                <div class="details-content">
                    <p>${acc.description}</p>
                    ${acc.images && acc.images.length ? 
                        `<div class="accessory-images">
                            ${acc.images.map(img => `<img src="${img}" alt="${acc.name}">`).join('')}
                         </div>` : ''}
                    ${acc.extra ? `<p><strong>Extra:</strong> ${acc.extra}</p>` : ''}
                </div>
            </details>
        `).join('');
    } else {
        accessoriesHTML = '<p style="opacity:0.6;">No hi ha accessoris definits encara.</p>';
    }

    let videosHTML = '';
    if (model.videos && model.videos.length > 0) {
        videosHTML = model.videos.map(video => `
            <div>
                <h4>${video.title}</h4>
                <p style="margin-bottom:12px;">${video.description}</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/${video.youtubeId}" 
                            title="${video.title}" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen></iframe>
                </div>
            </div>
        `).join('');
    } else {
        videosHTML = '<p style="opacity:0.6;">Encara no hi ha vídeos relacionats.</p>';
    }

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

    modal.onclick = function (e) {
        if (e.target === modal) closeModal();
    };
};

window.closeModal = function () {
    document.getElementById('modal').style.display = 'none';
};

// ==================== INITIALIZE ====================
if (searchInput && grid) {
    searchInput.addEventListener('keyup', filterModels);
    loadAllCars();        // Load all modular car files
}