// ==================== UPDATED DATA STRUCTURE WITH IMPROVED TECHNICAL SPECS ====================
const modelsData = [
    {
        id: 1,
        brand: "Renault",
        model: "4 (R4)",
        years: "1961-1992",
        description: "El Renault 4 és un dels cotxes més versàtils i icònics de Renault. Simple, robust i extremadament pràctic.",
        image: "images/renault4.jpg",

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1961-1992<br>
        <strong>Desplaçament:</strong> 0.6L - 1.1L<br>
        <strong>Potència:</strong> 23 - 34 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 5 portes / Furgoneta (F4/F6)
    `,

        variants: [
            {
                engine: "0.6L (603 cc)",
                power: "23 - 26 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Primeres versions (R4, R3)"
            },

            {
                engine: "0.7L (747 cc)",
                power: "27 - 32 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R4L inicial"
            },

            {
                engine: "0.8L (782 cc)",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R4L / TL"
            },

            {
                engine: "0.85L (845 cc)",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TL / GTL (molt comú)"
            },

            {
                engine: "1.1L (1108 cc)",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTL, més parell i eficiència"
            }
        ],

        accessories: [
            {
                name: "Portaequipatges sostre",
                description: "Estructura metàl·lica per transportar càrrega o equipatge.",
                images: ["images/accessories/R4/roofrack.jpg"],
                extra: "Molt icònic en el Renault 4, especialment en ús rural."
            },
            {
                name: "Seients reclinables (TL/GTL)",
                description: "Permeten convertir l'interior en una superfície plana.",
                images: ["images/accessories/R4/seients.jpg"],
                extra: "Un dels punts forts del R4: versatilitat màxima."
            },
            {
                name: "Tauler minimalista amb palanca de canvi al quadre",
                description: "Sistema de canvi de marxes al quadre de comandament.",
                images: ["images/accessories/R4/palanca.jpg"],
                extra: "Característica única i molt reconeixible."
            },
            {
                name: "Tapisseria específica GTL",
                description: "Materials més cuidats en versions superiors.",
                images: ["images/accessories/R4/tapisseria.jpg"],
                extra: "Diferenciador interior respecte versions bàsiques."
            },
            {
                name: "Para-xocs metàl·lics cromats",
                description: "Para-xocs simples amb acabat cromat.",
                images: ["images/accessories/R4/paraxocs.jpg"],
                extra: "Típics de les primeres sèries."
            },
            {
                name: "Deflectors de finestres",
                description: "Permeten ventilació sense obrir completament les finestres.",
                images: ["images/accessories/R4/deflectors.jpg"],
                extra: "Accessoris molt comuns de concessionari."
            },
            {
                name: "Furgoneta F4/F6 (kit comercial)",
                description: "Versió adaptada per transport de mercaderies.",
                images: ["images/accessories/R4/furgoneta.jpg"],
                extra: "Molt utilitzada per negocis i serveis."
            },
            {
                name: "Proteccions laterals (GTL Clan/Savane)",
                description: "Motllures laterals de plàstic.",
                images: ["images/accessories/R4/motllures.jpg"],
                extra: "Característiques de les últimes versions."
            },
            {
                name: "Llantes d'acer amb tapacubs Renault",
                description: "Llantes bàsiques amb tapacubs decoratius.",
                images: ["images/accessories/R4/tapacubs.jpg"],
                extra: "Element clàssic del model."
            },
            {
                name: "Vinils decoratius (Clan/Savane)",
                description: "Adhesius laterals amb el nom de la versió.",
                images: ["images/accessories/R4/vinils.jpg"],
                extra: "Molt característics dels anys 80."
            }
        ],

        videos: []
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
                imageDescription: "Això era un accessori molt rar de trobar, venut a concessionaris Renault durant els anys 80. Molt buscat pels col·leccionistes actualment."
            }
        ]
    },

    {
        id: 3,
        brand: "Renault",
        model: "5 Super Cinq (Phase 2)",
        years: "1984-1996",
        description: "La segona generació del Renault 5, coneguda com a Super Cinq. Disseny modernitzat, millor equipament i versions esportives icòniques com el GT Turbo.",
        image: "images/renault5-supercinq.jpg",

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1984-1996<br>
        <strong>Desplaçament:</strong> 1.0L - 1.7L (1.6L Diesel)<br>
        <strong>Potència:</strong> 42 - 120 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 3 i 5 portes
    `,

        variants: [
            {
                engine: "1.0L (C1C)",
                power: "42 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions bàsiques (TC / TL)"
            },

            {
                engine: "1.1L (C1E)",
                power: "47 - 49 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TL / GTL"
            },
            {
                engine: "1.4L (C1J / C2J)",
                power: "60 - 72 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TS / TSE / GTL"
            },
            {
                engine: "1.4L GT Turbo",
                power: "115 - 120 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió esportiva turbo"
            },
            {
                engine: "1.6L Diesel (F8M)",
                power: "54 - 55 CV",
                fuel: "Diesel",
                traction: "Davantera",
                notes: "TD / GTD, molt fiable i econòmic"
            },
            {
                engine: "1.7L (F2N / F3N)",
                power: "90 - 95 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTE / GTX / Baccara"
            }
        ],

        accessories: [
            {
                name: "Volant GT Turbo",
                description: "Volant esportiu de quatre radis amb disseny específic.",
                images: ["images/accessories/R5P2/volant-gt-turbo.jpg"],
                extra: "Un dels elements interiors més reconeixibles."
            },
            {
                name: "Seients esportius GT Turbo",
                description: "Seients amb gran subjecció lateral i disseny agressiu.",
                images: ["images/accessories/R5P2/seients-gt-turbo.jpg"],
                extra: "Clau en la identitat esportiva del model."
            },
            {
                name: "Quadre amb compta-revolucions",
                description: "Instrumentació completa amb informació esportiva.",
                images: ["images/accessories/R5P2/quadre-gt.jpg"],
                extra: "Absent en versions bàsiques."
            },
            {
                name: "Kit aerodinàmic GT Turbo",
                description: "Para-xocs específics, faldons laterals i spoiler.",
                images: ["images/accessories/R5P2/kit-gt-turbo.jpg"],
                extra: "Defineix completament l’aspecte del GT Turbo."
            },
            {
                name: "Llandes d'aliatge GT Turbo",
                description: "Llandes específiques amb disseny esportiu.",
                images: ["images/accessories/R5P2/llandes-gt.jpg"],
                extra: "Un dels elements visuals més icònics."
            },
            {
                name: "Entrades d'aire capó (GT Turbo)",
                description: "Obertures funcionals per refrigeració del turbo.",
                images: ["images/accessories/R5P2/capo-gt.jpg"],
                extra: "Diferenciador clar respecte altres versions."
            },
            {
                name: "Vinils GT Turbo",
                description: "Decoració lateral amb el nom del model.",
                images: ["images/accessories/R5P2/vinils-gt.jpg"],
                extra: "Molt característics dels anys 80."
            },
            {
                name: "Interior Baccara",
                description: "Acabats de luxe amb cuir i millor equipament.",
                images: ["images/accessories/R5P2/baccara-interior.jpg"],
                extra: "La versió més refinada del Super Cinq."
            },
            {
                name: "Volant cuir Baccara",
                description: "Volant revestit en cuir.",
                images: ["images/accessories/R5P2/volant-baccara.jpg"],
                extra: "Orientat al confort i luxe."
            },
            {
                name: "Tapisseria específica (GTL / TSE / GTX)",
                description: "Diferents patrons segons versió.",
                images: ["images/accessories/R5P2/tapisseria.jpg"],
                extra: "Important per identificar acabats."
            },
            {
                name: "Tancament centralitzat",
                description: "Sistema de bloqueig central de portes.",
                images: ["images/accessories/R5P2/centralitzat.jpg"],
                extra: "Equipament més modern respecte Phase 1."
            },
            {
                name: "Alçavidres elèctrics",
                description: "Control elèctric de finestres.",
                images: ["images/accessories/R5P2/elevalunas.jpg"],
                extra: "Present en versions altes."
            },
            {
                name: "Retrovisors regulables des de l'interior",
                description: "Ajust manual des de l'habitacle.",
                images: ["images/accessories/R5P2/retrovisors.jpg"],
                extra: "Millora d’ergonomia."
            },
            {
                name: "Techo solar (opcional)",
                description: "Obertura al sostre manual o elèctrica.",
                images: ["images/accessories/R5P2/techo-solar.jpg"],
                extra: "Molt popular en els anys 80-90."
            }
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

function renderVideos(videos) {
    return videos.map(video => `
        <div class="video-block">
            <h4>${video.title}</h4>

            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/${video.youtubeId}" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>

            <p>${video.description}</p>

            ${video.images ? `
                <div class="video-images">
                    ${video.images.map(img => `<img src="${img}" alt="${video.title}">`).join('')}
                </div>
            ` : ""}

            ${video.imageDescription ? `
                <p class="video-image-description">${video.imageDescription}</p>
            ` : ""}
        </div>
    `).join('');
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

// ==================== RENDER VIDEOS ====================
function renderVideos(videos) {
    return videos.map(video => `
        <div class="video-block">
            <h4>${video.title}</h4>

            <div class="video-container">
                <iframe 
                    src="https://www.youtube.com/embed/${video.youtubeId}" 
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
            </div>

            <p>${video.description}</p>

            ${video.images && video.images.length ? `
                <div class="video-images">
                    ${video.images.map(img => `<img src="${img}" alt="${video.title}">`).join('')}
                </div>
            ` : ""}

            ${video.imageDescription ? `
                <p class="video-image-description">${video.imageDescription}</p>
            ` : ""}
        </div>
    `).join('');
}


// ==================== GRID ====================
const grid = document.getElementById('modelsGrid');
const searchInput = document.getElementById('searchInput');

function renderModels(filteredModels) {
    grid.innerHTML = '';

    if (filteredModels.length === 0) {
        grid.innerHTML = `<p style="text-align:center;">Cap model trobat.</p>`;
        return;
    }

    filteredModels.forEach(model => {
        grid.innerHTML += `
            <div class="card" onclick="showModel(${model.id})">
                <img src="${model.image}" alt="${model.model}">
                <div class="card-content">
                    <h3>${model.brand} ${model.model}</h3>
                    <p>${model.years}</p>
                </div>
            </div>
        `;
    });
}


// ==================== MODAL ====================
window.showModel = function (id) {
    const model = modelsData.find(m => m.id === id);
    if (!model) return;

    document.getElementById('modalTitle').innerText =
        `${model.brand} ${model.model} (${model.years})`;

    let variantsHTML = model.variants?.length ? `
        <table>
            <tbody>
                ${model.variants.map(v => `
                    <tr>
                        <td>${v.engine}</td>
                        <td>${v.power}</td>
                        <td>${v.fuel}</td>
                        <td>${v.traction}</td>
                        <td>${v.notes}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    ` : '';

    let accessoriesHTML = model.accessories?.length ? model.accessories.map(acc => `
        <details>
            <summary>${acc.name}</summary>
            <div class="details-content">
                <p>${acc.description}</p>
                ${acc.images?.length ? `
                    <div class="accessory-images">
                        ${acc.images.map(img => `<img src="${img}">`).join('')}
                    </div>
                ` : ''}
                <p>${acc.extra || ""}</p>
            </div>
        </details>
    `).join('') : '<p>No accessoris</p>';

    // 🔥 FIXED: USING renderVideos()
    let videosHTML = model.videos?.length
        ? renderVideos(model.videos)
        : '<p>Encara no hi ha vídeos.</p>';

    document.getElementById('modalBody').innerHTML = `
        <img src="${model.image}" style="width:100%; border-radius:10px;">
        <p>${model.description}</p>

        <h3>Característiques</h3>
        <div>${model.generalCharacteristics}</div>

        <h3>Variants</h3>
        ${variantsHTML}

        <h3>Accessoris</h3>
        ${accessoriesHTML}

        <h3>Vídeos</h3>
        ${videosHTML}
    `;

    document.getElementById('modal').style.display = 'flex';
};

window.closeModal = function () {
    document.getElementById('modal').style.display = 'none';
};


// ==================== SEARCH ====================
searchInput.addEventListener('keyup', () => {
    const term = searchInput.value.toLowerCase();
    const filtered = modelsData.filter(m =>
        m.brand.toLowerCase().includes(term) ||
        m.model.toLowerCase().includes(term)
    );
    renderModels(filtered);
});

renderModels(modelsData);