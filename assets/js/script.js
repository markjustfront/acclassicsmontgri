// ==================== UPDATED DATA STRUCTURE WITH IMPROVED TECHNICAL SPECS ====================
const modelsData = [
    {
        id: 1,
        brand: "Renault",
        model: "4 (R4)",
        years: "1961-1994",
        description: "El cotxe més venut de la història de Renault. Simbol de practicitat i durabilitat.",
        image: "images/renault4.jpg",

        generalCharacteristics: `
            <strong>Període de producció:</strong> 1961-1994<br>
            <strong>Desplaçament:</strong> 0.8L - 1.1L<br>
            <strong>Potència:</strong> 27 - 45 CV<br>
            <strong>Tracció:</strong> Davantera<br>
            <strong>Nombre de portes:</strong> 5 (incloent porta posterior)<br>
            <strong>Consum mitjà:</strong> 6 - 8 L/100km
        `,

        variants: [
            { engine: "0.8L", power: "27-30 CV", fuel: "Gasolina", traction: "Davantera", notes: "Versió base" },
            { engine: "1.0L", power: "34-40 CV", fuel: "Gasolina", traction: "Davantera", notes: "Versió més comuna" },
            { engine: "1.1L", power: "45 CV", fuel: "Gasolina", traction: "Davantera", notes: "Últimes versions" }
        ],

        accessories: [
            {
                name: "Barres de sostre originals",
                description: "Permeten transportar equipatge o material de lleure. Versió oficial Renault.",
                images: ["images/accessories/r4-barres.jpg"],
                extra: "Compatible amb totes les versions del R4. Molt buscades pels col·leccionistes."
            },
            {
                name: "Rodes de recanvi extern + suport",
                description: "Porta-rodes lateral original dels anys 70-80.",
                images: ["images/accessories/r4-roda-externa.jpg", "images/accessories/r4-roda-externa2.jpg"],
                extra: "Ideal per a rutes llargues i concentracions."
            }
        ],

        videos: [
            {
                title: "Restauració completa del Renault 4L - Part 1",
                youtubeId: "YOUR_VIDEO_ID_HERE",
                description: "Desmuntatge de motor, suspensió i xassís pas a pas."
            },
            {
                title: "Adaptació moderna al R4: frens de disc i direcció assistida",
                youtubeId: "ANOTHER_VIDEO_ID",
                description: "Com millorar la seguretat sense perdre l'essència clàssica."
            }
        ]
    },

    {
        id: 2,
        brand: "Renault",
        model: "5 (R5) - Primera Generació (Phase 1)",
        years: "1972-1984",
        description: "El mític Renault 5 original. Un dels cotxes urbans més icònics dels anys 70 i principis dels 80.",
        image: "images/renault5.jpg",

        generalCharacteristics: `
            <strong>Període de producció:</strong> 1972-1984<br>
            <strong>Desplaçament:</strong> 0.8L - 1.4L<br>
            <strong>Potència:</strong> 37 - 110 CV<br>
            <strong>Tracció:</strong> Davantera<br>
            <strong>Carrosseries:</strong> Hatchback 3 portes (5 portes a partir de 1979)
        `,

        variants: [
            { engine: "0.8L - 0.85L (Ventoux)", power: "37 CV", fuel: "Gasolina", traction: "Davantera", notes: "Versions bàsiques" },
            { engine: "0.96L - 1.1L", power: "42 - 45 CV", fuel: "Gasolina", traction: "Davantera", notes: "TL / GTL" },
            { engine: "1.3L", power: "55 - 64 CV", fuel: "Gasolina", traction: "Davantera", notes: "TS / LS" },
            { engine: "1.4L Alpine", power: "93 CV", fuel: "Gasolina", traction: "Davantera", notes: "Versió esportiva" },
            { engine: "1.4L Turbo", power: "110 CV", fuel: "Gasolina", traction: "Davantera", notes: "Alpine Turbo / Gordini Turbo" }
        ],

        accessories: [
            {
                name: "Volant Iso Delta (Copa i Copa Turbo)",
                description: "Volant disponible en les versions Copa i Copa Turbo del R5 a partir de 1984.",
                images: ["images/accessories/R5/iso-delta-r5.jpg", "images/accessories/R5/iso-delta-r5-2.jpg"],
                extra: "És un volant molt buscat a Espanya i molt difícil de trobar en bon estat."
            },
            {
                name: "Rellotges Copa/Alpine",
                description: "Rellotges de temperatura d'oli i voltatge de bateria.",
                images: ["images/accessories/R5/rellotges-copa-r5.jpg"],
                extra: "També estava disponible en altres models."
            },
            {
                name: "Rellotges Copa Turbo/Alpine Turbo",
                description: "Rellotges de pressió d'oli i pressió turbo.",
                images: ["images/accessories/R5/rellotges-copa-turbo-r5.jpg"],
                extra: "Molt populars entre els aficionats."
            }
        ],

        videos: [
            {
                title: "Bota de canvi de marxes del R5 en pell",
                youtubeId: "CQthDNyU7f0",
                description: "Explicació de la instal·lació d'una bota de canvi de marxes en pell per a un Renault 5.",
                images: ["images/accessories/R5/bota-canvi-r5.jpg"],
                description: "Aixo era un acesori molt raro de trobar, i es va vendre a les botigues oficials Renault durant els anys 80. Molt buscada pels col·leccionistes actualment.",
            }
        ]
    },

    {
        id: 3,
        brand: "Renault",
        model: "5 Super Cinq (Phase 2)",
        years: "1984-1996",
        description: "La segona generació del Renault 5, coneguda com a Super Cinq. Disseny modernitzat i gamma més àmplia.",
        image: "images/renault5-supercinq.jpg",

        generalCharacteristics: `
            <strong>Període de producció:</strong> 1984-1996<br>
            <strong>Desplaçament:</strong> 0.96L - 1.7L<br>
            <strong>Potència:</strong> 42 - 120 CV<br>
            <strong>Tracció:</strong> Davantera<br>
            <strong>Carrosseries:</strong> Hatchback 3 i 5 portes
        `,

        variants: [
            { engine: "0.96L (C1C)", power: "42 CV", fuel: "Gasolina", traction: "Davantera", notes: "Versió base TC/TL" },
            { engine: "1.1L (C1E)", power: "47 CV", fuel: "Gasolina", traction: "Davantera", notes: "TL / GTL" },
            { engine: "1.4L (C1J/C2J)", power: "60 - 72 CV", fuel: "Gasolina", traction: "Davantera", notes: "TS / TSE / GTL" },
            { engine: "1.4L GT Turbo", power: "115 - 120 CV", fuel: "Gasolina", traction: "Davantera", notes: "Versió esportiva" },
            { engine: "1.7L (F2N/F3N)", power: "90 - 95 CV", fuel: "Gasolina", traction: "Davantera", notes: "GTX / GTE / Baccara" }
        ],

        accessories: [
            {}
        ],

        videos: []
    }
    // Pots afegir més models aquí...
];

// ==================== RENDER & MODAL (unchanged) ====================
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

// ==================== FULL MODAL FUNCTIONALITY (Updated) ====================

window.showModel = function (id) {
    const model = modelsData.find(m => m.id === id);
    if (!model) return;

    document.getElementById('modalTitle').innerHTML = 
        `${model.brand} ${model.model} <small style="font-size:1rem; opacity:0.8;">(${model.years})</small>`;

    // Build Variants Table
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

    // Accessories (expandable)
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

    // Videos
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

    // Full modal content
    const bodyHTML = `
        <img src="${model.image}" alt="${model.brand} ${model.model}" style="width:100%; border-radius:12px; margin-bottom:25px;">
        <p style="font-size:1.15rem; margin-bottom:25px;">${model.description}</p>
        
        <h3>Característiques Generals</h3>
        <p style="background:#f8f6f0; padding:15px; border-radius:8px; margin-bottom:25px;">${model.generalCharacteristics}</p>
        
        <h3>Variants de Motor</h3>
        ${variantsHTML}
        
        <h3>Accessoris originals</h3>
        ${accessoriesHTML}
        
        <h3>Vídeos Relacionats (Manteniment, Adaptacions...)</h3>
        ${videosHTML}
    `;

    document.getElementById('modalBody').innerHTML = bodyHTML;

    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    // NEW: Click anywhere on the dark background to close
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeModal();
        }
    };
};

window.closeModal = function () {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
};

// Make sure this stays at the bottom of your script.js
if (searchInput && grid) {
    searchInput.addEventListener('keyup', filterModels);
    renderModels(modelsData);
}