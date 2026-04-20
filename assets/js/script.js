// ==================== CATALOG SCRIPT - MODULAR CAR LOADING (Fixed) ====================

let modelsData = [];

// List of all your car files
const carFiles = [
    //Renault:
    "assets/data/cars/R3.js",       // ID 35
    "assets/data/cars/R4.js",       // ID 1
    "assets/data/cars/R5.js",       // ID 2
    "assets/data/cars/R5P2.js",     // ID 3
    "assets/data/cars/R6.js",       // ID 4
    "assets/data/cars/R7.js",       // ID 5
    "assets/data/cars/R8.js",       // ID 6
    "assets/data/cars/R9.js",       // ID 7
    "assets/data/cars/R10.js",      // ID 8
    "assets/data/cars/R11.js",      // ID 9
    "assets/data/cars/R12.js",      // ID 10
    "assets/data/cars/R14.js",      // ID 11
    "assets/data/cars/R15.js",      // ID 12
    "assets/data/cars/R16.js",      // ID 13
    "assets/data/cars/R17.js",      // ID 14
    "assets/data/cars/R18.js",      // ID 15
    "assets/data/cars/R19.js",      // ID 16
    "assets/data/cars/R20.js",      // ID 17
    "assets/data/cars/R21.js",      // ID 18
    "assets/data/cars/R25.js",      // ID 19
    "assets/data/cars/R30.js",      // ID 20

    "assets/data/cars/Fuego.js",    // ID 21
    "assets/data/cars/R4CV.js",     // ID 32
    "assets/data/cars/Dauphine.js", // ID 33
    "assets/data/cars/Floride.js",  // ID 34

    // Alpine:
    "assets/data/cars/A610.js",     // ID 22
    "assets/data/cars/A110.js",     // ID 23
    "assets/data/cars/A310.js",     // ID 24
    "assets/data/cars/GTA.js",      // ID 25  

    // Land Rover Santana:
    "assets/data/cars/S88.js",      // ID 26
    "assets/data/cars/S109.js",     // ID 27
    "assets/data/cars/SLi.js",      // ID 28  
    "assets/data/cars/S2000.js",    // ID 29
    "assets/data/cars/S2500.js",    // ID 30
    "assets/data/cars/SCazorla.js", // ID 31

];
/**
 * Dynamically load all car data files
 */
async function loadAllCars() {
    modelsData = [];

    for (const file of carFiles) {
        try {
            const response = await fetch(file);
            if (!response.ok) {
                console.warn(`⚠️ Failed to fetch: ${file} (status ${response.status})`);
                continue;
            }

            const scriptText = await response.text();
            const script = document.createElement('script');
            script.textContent = scriptText;
            document.head.appendChild(script);

            // Small delay to allow the script to execute
            await new Promise(resolve => setTimeout(resolve, 30));

            script.remove();
        } catch (error) {
            console.warn(`❌ Error loading ${file}:`, error);
        }
    }

    // Merge data from the global window.carData populated by the loaded scripts
    if (window.carData && Array.isArray(window.carData)) {
        modelsData = [...window.carData];
        console.log(`✅ Successfully loaded ${modelsData.length} car models.`);
    } else {
        console.warn("⚠️ No carData found on window object after loading files.");
    }
}

/**
 * Render car cards using DocumentFragment for better performance
 */
function renderModels(filteredModels) {
    const grid = document.getElementById('modelsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (filteredModels.length === 0) {
        grid.innerHTML = `
            <p style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; font-size: 1.2rem; color: #777;">
                Cap model trobat.
            </p>`;
        return;
    }

    const fragment = document.createDocumentFragment();

    filteredModels.forEach(model => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.id = model.id;

        card.innerHTML = `
            <img src="${model.image}" alt="${model.brand} ${model.model}" loading="lazy">
            <div class="card-content">
                <h3>${model.brand} ${model.model}</h3>
                <p><strong>${model.years}</strong></p>
                <p>${model.description}</p>
            </div>
        `;

        fragment.appendChild(card);
    });

    grid.appendChild(fragment);
}

/**
 * Filter models based on search term
 */
function filterModels() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    let term = searchInput.value.toLowerCase().trim();

    if (!term) {
        renderModels(modelsData);
        return;
    }

    // Clean common units for better matching
    term = term.replace(/l$|cv$|hp$/i, '').trim();

    const filtered = modelsData.filter(model => {
        const searchableFields = [
            model.brand,
            model.model,
            model.years,
            model.description
        ].join(' ').toLowerCase();

        if (searchableFields.includes(term)) return true;

        // Deep search in variants
        if (model.variants?.length) {
            return model.variants.some(variant =>
                Object.values(variant).some(value =>
                    value?.toString().toLowerCase().includes(term)
                )
            );
        }

        return false;
    });

    renderModels(filtered);
}

/**
 * Get highlighted cars (used on cotxes.html)
 */
function getCotxesDestacats() {
    return modelsData.filter(m => m.destacat === true);
}

/**
 * Show detailed modal for a specific car
 */
function showModel(id) {
    const model = modelsData.find(m => m.id === id);
    if (!model) {
        console.warn(`Model with id ${id} not found`);
        return;
    }

    // Title
    document.getElementById('modalTitle').innerHTML = `
        ${model.brand} ${model.model}
        <small style="font-size:1rem; opacity:0.8;">(${model.years})</small>
    `;

    // Variants table
    let variantsHTML = '';
    if (model.variants?.length) {
        variantsHTML = `
            <table class="variants-table">
                <thead>
                    <tr>
                        <th>Motor</th>
                        <th>Potència</th>
                        <th>Combustible</th>
                        <th>Tracció</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.variants.map(v => `
                        <tr onclick="this.classList.toggle('expanded')" style="cursor:pointer;">
                            <td data-label="Motor">${v.engine || ''}</td>
                            <td data-label="Potència">${v.power || ''}</td>
                            <td data-label="Combustible">${v.fuel || ''}</td>
                            <td data-label="Tracció">${v.traction || ''}</td>
                            <td data-label="Notes">${v.notes || ''}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <p class="table-hint">
                <em>Toca una fila per veure més detalls (mòbil)</em>
            </p>
        `;
    }

    // Accessories
    const accessoriesHTML = model.accessories?.length
        ? model.accessories.map(acc => `
            <details>
                <summary>${acc.name}</summary>
                <div class="details-content">
                    <p>${acc.description}</p>
                    ${acc.images?.length ? `
                        <div class="accessory-images">
                            ${acc.images.map(img => `<img src="${img}" alt="${acc.name}" loading="lazy">`).join('')}
                        </div>
                    ` : ''}
                    ${acc.extra ? `<p><strong>Extra:</strong> ${acc.extra}</p>` : ''}
                </div>
            </details>
        `).join('')
        : '<p style="opacity:0.6;">No hi ha accessoris definits encara.</p>';

    // Videos
    const videosHTML = model.videos?.length
        ? model.videos.map(video => `
            <div class="video-section">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/${video.youtubeId}"
                            title="${video.title}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                </div>
            </div>
        `).join('')
        : '<p style="opacity:0.6;">Encara no hi ha vídeos relacionats.</p>';

    // Main modal content
    const bodyHTML = `
        <img src="${model.image}" alt="${model.brand} ${model.model}" class="modal-main-image" loading="lazy">
        <p class="model-description">${model.description}</p>

        <h3>Característiques Generals</h3>
        <div class="general-characteristics">
            ${model.generalCharacteristics}
        </div>

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

    // Close when clicking outside the content
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.style.display = 'none';
}

/**
 * Initialize everything
 */
document.addEventListener('DOMContentLoaded', async () => {
    await loadAllCars();

    // === Catalog page (cataleg.html) ===
    const modelsGrid = document.getElementById('modelsGrid');
    if (modelsGrid) {
        const searchInput = document.getElementById('searchInput');

        if (searchInput) {
            searchInput.addEventListener('input', filterModels); // 'input' is better than 'keyup'
        }

        renderModels(modelsData);
    }

    // === Highlighted cars page (cotxes.html) ===
    const cotxesGrid = document.getElementById('cotxes-grid');
    if (cotxesGrid) {
        const destacats = getCotxesDestacats();

        if (destacats.length === 0) {
            cotxesGrid.innerHTML = `
                <p style="grid-column:1/-1; text-align:center; padding:60px; color:#777;">
                    Encara no hi ha cotxes destacats.
                </p>`;
            return;
        }

        const fragment = document.createDocumentFragment();

        destacats.forEach(model => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.id = model.id;
            card.innerHTML = `
                <img src="${model.image}" alt="${model.brand} ${model.model}" loading="lazy">
                <div class="card-content">
                    <h3>${model.brand} ${model.model}</h3>
                    <p><strong>${model.years}</strong></p>
                    <p>${model.description}</p>
                </div>
            `;
            fragment.appendChild(card);
        });

        cotxesGrid.appendChild(fragment);
    }

    // Event delegation for all cards (much better than inline onclick)
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card && card.dataset.id) {
            showModel(Number(card.dataset.id));
        }
    });
});