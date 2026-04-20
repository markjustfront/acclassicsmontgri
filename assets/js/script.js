// ==================== CATALOG SCRIPT - MODULAR CAR LOADING (Fixed) ====================

let modelsData = [];
let filteredData = [];
let displayedCount = 0;
const BATCH_SIZE = 9;

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
 * Load all car data files
 */
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
            await new Promise(r => setTimeout(r, 30));
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

/**
 * Deep search that includes variants and accessories
 */
function deepSearch(term) {
    if (!term) return modelsData;

    term = term.toLowerCase().trim();

    return modelsData.filter(model => {
        // Basic fields
        const basicText = `${model.brand} ${model.model} ${model.years} ${model.description}`.toLowerCase();
        if (basicText.includes(term)) return true;

        // Variants
        if (model.variants && model.variants.length) {
            const variantMatch = model.variants.some(v =>
                Object.values(v).some(val =>
                    val && val.toString().toLowerCase().includes(term)
                )
            );
            if (variantMatch) return true;
        }

        // Accessories (name, description, extra)
        if (model.accessories && model.accessories.length) {
            const accessoryMatch = model.accessories.some(acc => {
                const accText = `${acc.name} ${acc.description} ${acc.extra || ''}`.toLowerCase();
                return accText.includes(term);
            });
            if (accessoryMatch) return true;
        }

        return false;
    });
}

/**
 * Render a batch of cars (using DocumentFragment for performance)
 */
function renderBatch(modelsToShow) {
    const grid = document.getElementById('modelsGrid');
    if (!grid) return;

    const fragment = document.createDocumentFragment();

    modelsToShow.forEach(model => {
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
 * Main render function with Load More logic
 */
function renderModels(searchTerm = '') {
    const grid = document.getElementById('modelsGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const resultsInfo = document.getElementById('resultsInfo');

    grid.innerHTML = '';
    displayedCount = 0;

    filteredData = searchTerm ? deepSearch(searchTerm) : [...modelsData];

    // Update results count
    resultsInfo.textContent = searchTerm
        ? `${filteredData.length} resultats per "${searchTerm}"`
        : `${modelsData.length} models disponibles`;

    if (filteredData.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding:60px; font-size:1.2rem; color:#777;">
            Cap model trobat.
        </p>`;
        loadMoreBtn.style.display = 'none';
        return;
    }

    // Initial batch
    const initialBatch = filteredData.slice(0, BATCH_SIZE);
    renderBatch(initialBatch);
    displayedCount = initialBatch.length;

    // Show/hide Load More
    loadMoreBtn.style.display = (filteredData.length > displayedCount) ? 'inline-block' : 'none';
}

/**
 * Load next batch
 */
function loadMore() {
    const grid = document.getElementById('modelsGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    const nextBatch = filteredData.slice(displayedCount, displayedCount + BATCH_SIZE);
    if (nextBatch.length === 0) return;

    renderBatch(nextBatch);
    displayedCount += nextBatch.length;

    if (displayedCount >= filteredData.length) {
        loadMoreBtn.style.display = 'none';
    }
}

/**
 * Show modal (kept mostly the same, but using event delegation)
 */
function showModel(id) {
    const model = modelsData.find(m => m.id === id);
    if (!model) return;/**
 * Load all car data files
 */
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
                await new Promise(r => setTimeout(r, 30));
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

    /**
     * Deep search that includes variants and accessories
     */
    function deepSearch(term) {
        if (!term) return modelsData;

        term = term.toLowerCase().trim();

        return modelsData.filter(model => {
            // Basic fields
            const basicText = `${model.brand} ${model.model} ${model.years} ${model.description}`.toLowerCase();
            if (basicText.includes(term)) return true;

            // Variants
            if (model.variants && model.variants.length) {
                const variantMatch = model.variants.some(v =>
                    Object.values(v).some(val =>
                        val && val.toString().toLowerCase().includes(term)
                    )
                );
                if (variantMatch) return true;
            }

            // Accessories (name, description, extra)
            if (model.accessories && model.accessories.length) {
                const accessoryMatch = model.accessories.some(acc => {
                    const accText = `${acc.name} ${acc.description} ${acc.extra || ''}`.toLowerCase();
                    return accText.includes(term);
                });
                if (accessoryMatch) return true;
            }

            return false;
        });
    }

    /**
     * Render a batch of cars (using DocumentFragment for performance)
     */
    function renderBatch(modelsToShow) {
        const grid = document.getElementById('modelsGrid');
        if (!grid) return;

        const fragment = document.createDocumentFragment();

        modelsToShow.forEach(model => {
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
     * Main render function with Load More logic
     */
    function renderModels(searchTerm = '') {
        const grid = document.getElementById('modelsGrid');
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        const resultsInfo = document.getElementById('resultsInfo');

        grid.innerHTML = '';
        displayedCount = 0;

        filteredData = searchTerm ? deepSearch(searchTerm) : [...modelsData];

        // Update results count
        resultsInfo.textContent = searchTerm
            ? `${filteredData.length} resultats per "${searchTerm}"`
            : `${modelsData.length} models disponibles`;

        if (filteredData.length === 0) {
            grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding:60px; font-size:1.2rem; color:#777;">
            Cap model trobat.
        </p>`;
            loadMoreBtn.style.display = 'none';
            return;
        }

        // Initial batch
        const initialBatch = filteredData.slice(0, BATCH_SIZE);
        renderBatch(initialBatch);
        displayedCount = initialBatch.length;

        // Show/hide Load More
        loadMoreBtn.style.display = (filteredData.length > displayedCount) ? 'inline-block' : 'none';
    }

    /**
     * Load next batch
     */
    function loadMore() {
        const grid = document.getElementById('modelsGrid');
        const loadMoreBtn = document.getElementById('loadMoreBtn');

        const nextBatch = filteredData.slice(displayedCount, displayedCount + BATCH_SIZE);
        if (nextBatch.length === 0) return;

        renderBatch(nextBatch);
        displayedCount += nextBatch.length;

        if (displayedCount >= filteredData.length) {
            loadMoreBtn.style.display = 'none';
        }
    }

    /**
     * Show modal (kept mostly the same, but using event delegation)
     */
    function showModel(id) {
        const model = modelsData.find(m => m.id === id);
        if (!model) {
            console.warn(`Model with id ${id} not found`);
            return;
        }
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

// Close modal
window.closeModal = function () {
    document.getElementById('modal').style.display = 'none';
};

/**
 * Initialize
 */
document.addEventListener('DOMContentLoaded', async () => {
    await loadAllCars();

    const searchInput = document.getElementById('searchInput');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    // Search with debounce for smoothness
    let timeout;
    searchInput.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            renderModels(searchInput.value.trim());
        }, 250);
    });

    // Load More button
    loadMoreBtn.addEventListener('click', loadMore);

    // Initial render
    renderModels();

    // Event delegation for cards (better than inline onclick)
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (card && card.dataset.id) {
            showModel(Number(card.dataset.id));
        }
    });
});