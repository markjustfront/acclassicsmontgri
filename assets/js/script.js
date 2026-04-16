// ==================== UPDATED DATA STRUCTURE ====================
const modelsData = [
    {
        id: 1,
        brand: "Renault",
        model: "4 (R4)",
        years: "1961-1994",
        description: "El cotxe més venut de la història de Renault. Simbol de practicitat i durabilitat.",
        image: "images/renault4.jpg",
        characteristics: "Motor: 0.8L - 1.1L (27-45 CV)<br>Tracció: davantera<br>Portes: 5<br>Consum: molt baix",

        // NEW: Expandable accessories with images
        accessories: [
            {
                name: "Barres de sostre originals",
                description: "Permeten transportar equipatge o material de lleure. Versió oficial Renault.",
                images: ["images/accessories/r4-barres.jpg"],   // ← puja les teves fotos aquí
                extra: "Compatible amb totes les versions del R4. Molt buscades pels col·leccionistes."
            },
            {
                name: "Rodes de recanvi extern + suport",
                description: "Porta-rodes lateral original dels anys 70-80.",
                images: ["images/accessories/r4-roda-externa.jpg", "images/accessories/r4-roda-externa2.jpg"],
                extra: "Ideal per a rutes llargues i concentracions."
            }
        ],

        // NEW: Related YouTube videos (maintenance, adaptations, etc.)
        videos: [
            {
                title: "Restauració completa del Renault 4L - Part 1",
                youtubeId: "YOUR_VIDEO_ID_HERE",   // ← canvia per l'ID real del teu vídeo
                description: "Desmuntatge de motor, suspensió i xassís pas a pas."
            },
            {
                title: "Adaptació moderna al R4: frens de disc i direcció assistida",
                youtubeId: "ANOTHER_VIDEO_ID",
                description: "Com millorar la seguretat sense perdre l'essència clàssica."
            }
        ]
    },

    // ──────── Altres models (exemple reduït) ────────
    {
        id: 2,
        brand: "Renault",
        model: "5 (R5)",
        years: "1972-1996",
        description: "El supercotxe urbà dels anys 70-80.",
        image: "images/renault5.jpg",
        characteristics: "Motor: 0.8L - 1.7L (36-93 CV)",

        // Accessoris específics per al R5
        accessories: [
            {
                name: "Volant Iso Delta",
                description: "Volant dispobible en les version Copa i Copa Turbo del R5 a partir de 1984.",
                images: ["images/accessories/R5/iso-delta-r5.jpg"],
                extra: "Es un volant molt buscat a espanya i molt difícil de trobar en bon estat."
            },
            {
                name: "Rodes de recanvi extern + suport",
                description: "Porta-rodes lateral original dels anys 70-80.",
                images: ["images/accessories/r4-roda-externa.jpg", "images/accessories/r4-roda-externa2.jpg"],
                extra: "Ideal per a rutes llargues i concentracions."
            }
        ],

        // Videos relacionats específics per al R5
        videos: [
            {
                title: "Bota de canvi de marxes del R5 en pell",
                youtubeId: "CQthDNyU7f0",
                description: "Explicacio de la instal·lació d'una bota de canvi de marxes en pell per a un Renault 5. Millora l'estètica i la sensació al tacte."
            }
        ]
    },
    // Afegiu més models aquí...
];

// ==================== RENDER & MODAL ====================
const grid = document.getElementById('modelsGrid');
const searchInput = document.getElementById('searchInput');

function renderModels(filteredModels) {
    grid.innerHTML = '';
    if (filteredModels.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding:40px; font-size:1.2rem; color:#777;">Cap model trobat.</p>`;
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

window.showModel = function (id) {
    const model = modelsData.find(m => m.id === id);
    if (!model) return;

    document.getElementById('modalTitle').innerHTML = `${model.brand} ${model.model} <small style="font-size:1rem; opacity:0.8;">(${model.years})</small>`;

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
        videosHTML = '<p style="opacity:0.6;">Encara no hi ha vídeos relacionats. Afegeix-los a script.js!</p>';
    }

    const bodyHTML = `
        <img src="${model.image}" alt="${model.brand} ${model.model}" style="width:100%; border-radius:12px; margin-bottom:25px;">
        <p style="font-size:1.15rem; margin-bottom:25px;">${model.description}</p>
        
        <h3>Característiques tècniques</h3>
        <p style="background:#f8f6f0; padding:15px; border-radius:8px; margin-bottom:25px;">${model.characteristics}</p>
        
        <h3>Accessoris originals</h3>
        ${accessoriesHTML}
        
        <h3>Vídeos Relacionats (Manteniment, Adaptacions...)</h3>
        ${videosHTML}
    `;

    document.getElementById('modalBody').innerHTML = bodyHTML;
    document.getElementById('modal').style.display = 'flex';
};

window.closeModal = function () {
    document.getElementById('modal').style.display = 'none';
};

// Initialize
if (searchInput && grid) {
    searchInput.addEventListener('keyup', filterModels);
    renderModels(modelsData);
}