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
        <strong>Potència:</strong> 34 - 160 CV<br>
        <strong>Tracció:</strong> Davantera (excepte Turbo: RWD)<br>
        <strong>Carrosseries:</strong> Hatchback 3 portes (5 portes a partir de 1979)
    `,

        variants: [
            {
                engine: "0.8L (782 cc)",
                power: "34 - 36 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions bàsiques inicials (L)"
            },
            {
                engine: "0.85L (845 cc)",
                power: "36 - 37 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Base més comuna (L / TL)"
            },
            {
                engine: "1.0L (956 cc)",
                power: "44 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Gamma mitjana inicial"
            },
            {
                engine: "1.1L (1108 cc)",
                power: "44 - 45 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TL / GTL (molt popular)"
            },
            {
                engine: "1.3L (1289 cc)",
                power: "54 - 58 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "LS / TS, també amb canvi automàtic"
            },
            {
                engine: "1.4L (1397 cc)",
                power: "63 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TS / TX"
            },
            {
                engine: "1.4L Alpine",
                power: "90 - 93 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió esportiva (Alpine / Gordini)"
            },
            {
                engine: "1.4L Turbo",
                power: "110 - 160 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Motor central, homologació rally (R5 Turbo)"
            }
        ],

        accessories: [
            {
                name: "Volant Iso Delta (Copa i Copa Turbo)",
                description: "Volant esportiu de tres radis muntat en versions Copa i Copa Turbo.",
                images: ["images/accessories/R5/iso-delta-r5.jpg", "images/accessories/R5/iso-delta-r5-2.jpg"],
                extra: "Molt buscat a Espanya i difícil de trobar original."
            },
            {
                name: "Rellotges Copa/Alpine",
                description: "Quadre addicional amb temperatura d'oli i voltatge de bateria.",
                images: ["images/accessories/R5/rellotges-copa-r5.jpg"],
                extra: "Accessoris típics de versions esportives."
            },
            {
                name: "Rellotges Copa Turbo/Alpine Turbo",
                description: "Inclou pressió d'oli i pressió de turbo.",
                images: ["images/accessories/R5/rellotges-copa-turbo-r5.jpg"],
                extra: "Clau en models turboalimentats."
            },
            {
                name: "Llandes Alpine (Gordini)",
                description: "Llandes específiques d'aliatge de disseny esportiu.",
                images: ["images/accessories/R5/llandes-alpine.jpg"],
                extra: "Un dels elements visuals més icònics del R5 Alpine."
            },
            {
                name: "Bandes decoratives Alpine/Copa",
                description: "Vinils laterals amb inscripcions Alpine o Copa.",
                images: ["images/accessories/R5/bandes-alpine.jpg"],
                extra: "Molt utilitzades per diferenciar versions esportives."
            },
            {
                name: "Seients esportius Alpine",
                description: "Seients amb més subjecció lateral i disseny específic.",
                images: ["images/accessories/R5/seients-alpine.jpg"],
                extra: "Interior clarament diferenciat respecte versions bàsiques."
            },
            {
                name: "Volant esportiu Alpine",
                description: "Volant de menor diàmetre amb disseny esportiu.",
                images: ["images/accessories/R5/volant-alpine.jpg"],
                extra: "Alternativa al Iso Delta en versions franceses."
            },
            {
                name: "Para-xocs amb spoiler (TS / Alpine)",
                description: "Para-xocs davanter amb disseny més agressiu i millor aerodinàmica.",
                images: ["images/accessories/R5/spoiler-ts.jpg"],
                extra: "Diferenciador visual important respecte versions base."
            },
            {
                name: "Quadre d'instruments complet (TS / Alpine)",
                description: "Inclou compta-revolucions i més informació mecànica.",
                images: ["images/accessories/R5/quadre-ts.jpg"],
                extra: "Millora funcional respecte quadres bàsics."
            },
            {
                name: "Tapisseria específica (GTL / TS / Alpine)",
                description: "Diferents patrons i materials segons versió.",
                images: ["images/accessories/R5/tapisseria-r5.jpg"],
                extra: "Clau per identificar versions originals."
            },
            {
                name: "Miralls retrovisors cromats",
                description: "Miralls metàl·lics típics de versions primerenques.",
                images: ["images/accessories/R5/miralls-cromats.jpg"],
                extra: "Detall clàssic dels primers R5."
            },
            {
                name: "Deflectors d'aire finestres",
                description: "Accessoris per millorar ventilació sense obrir totalment la finestra.",
                images: ["images/accessories/R5/deflectors.jpg"],
                extra: "Accessoris molt comuns de concessionari."
            },
            {
                name: "Portaequipatges sostre",
                description: "Estructura metàl·lica per transportar equipatge.",
                images: ["images/accessories/R5/portaequipatges.jpg"],
                extra: "Molt popular en ús quotidià als anys 70-80."
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
    modal.onclick = function (e) {
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