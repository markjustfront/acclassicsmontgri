// ==================== UPDATED DATA STRUCTURE WITH IMPROVED TECHNICAL SPECS ====================
const modelsData = [
    {
        id: 1,
        brand: "Renault",
        model: "4 (R4)",
        years: "1961-1992",
        description: "El Renault 4 és un dels cotxes més versàtils i icònics de Renault. Simple, robust i extremadament pràctic.",
        image: "images/R4-main.jpg",

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
                name: "Tapisseria específica GTL",
                description: "Materials més cuidats en versions superiors.",
                images: ["images/accessories/R4/tapisseria.jpg"],
                extra: "Diferenciador interior respecte versions bàsiques."
            },
            {
                name: "Proteccions laterals (GTL Clan/Savane)",
                description: "Motllures laterals de plàstic.",
                images: ["images/accessories/R4/motllures.jpg"],
                extra: "Característiques de les últimes versions."
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
        image: "images/R5-main.jpg",

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
                name: "Para-xocs amb spoiler (TS / Alpine)",
                description: "Para-xocs davanter amb disseny més agressiu i millor aerodinàmica.",
                images: ["images/accessories/R5/spoilers-ts.jpg"],
                extra: "Diferenciador visual important respecte versions base."
            },
            {
                name: "Quadre d'instruments complet (TS / Alpine)",
                description: "Inclou compta-revolucions i més informació mecànica.",
                images: ["images/accessories/R5/quadre-ts.jpg"],
                extra: "Millora funcional respecte quadres bàsics inclou sensor de temperatura d'oli."
            },
            {
                name: "Tapisseria específica (GTL / TS / Alpine)",
                description: "Diferents patrons i materials segons versió.",
                images: ["images/accessories/R5/tapisseria-r5.jpg"],
                extra: "Clau per identificar versions originals."
            },
            {
                name: "Miralls retrovisors babyTornado",
                description: "Miralls metàl·lics típics de versions Alpine.",
                images: ["images/accessories/R5/miralls-tornado.jpg"],
                extra: "Mes comuns a França."
            },
            {
                name: "Miralls retrovisors California",
                description: "Miralls de plastic típics de la epoca.",
                images: ["images/accessories/R5/miralls-california.jpg"],
                extra: "Mes comuns a Espanya."
            },
            {
                name: "Pom de canvi de pell Alpine",
                description: "Pom de canvi de pell per a versions esportives.",
                images: ["images/accessories/R5/pom-canvi-r5.jpg", "images/accessories/R5/pom-canvi-r5-2.jpg"],
                extra: "Accesoris típics de versions esportives."
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
        image: "images/R5P2-main.jpg",

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
                name: "Tancament centralitzat",
                description: "Sistema de bloqueig central de portes.",
                images: ["images/accessories/R5P2/centralitzat.jpg"],
                extra: "Equipament més modern respecte Phase 1."
            }
        ],

        videos: []
    },
    {
        id: 4,
        brand: "Renault",
        model: "6 (R6)",
        years: "1968-1986",
        description: "El Renault 6 és la versió més còmoda i evolucionada del R4, amb millor suspensió i enfoc familiar més refinat.",

        image: "images/R6-main.jpg",

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1968-1986<br>
    <strong>Desplaçament:</strong> 0.8L - 1.1L<br>
    <strong>Potència:</strong> 26 - 45 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Berlina 5 portes
    `,

        variants: [
            {
                engine: "0.8L (845 cc)",
                power: "26 - 30 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R6 L (versió base inicial)"
            },
            {
                engine: "1.0L (1108 cc)",
                power: "34 - 38 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R6 TL (la més comuna)"
            },
            {
                engine: "1.1L (1108 cc)",
                power: "45 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R6 TL millorada / última evolució"
            },
            {
                engine: "1.1L (Export)",
                power: "38 - 45 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R6 Export (acabats millorats per mercats exteriors)"
            }
        ],

        accessories: [
            {
                name: "Portaequipatges sostre",
                description: "Barres per càrrega addicional.",
                images: ["images/accessories/R6/roofrack.jpg"],
                extra: "Molt utilitzat en viatges familiars."
            },
            {
                name: "Seients abatibles",
                description: "Interior modular per augmentar espai.",
                images: ["images/accessories/R6/seats.jpg"],
                extra: "Millora clara respecte el R4."
            }
        ],

        videos: []
    },
    {
        id: 5,
        brand: "Renault",
        model: "7 (R7 / Siete)",
        years: "1974-1984",
        description: "El Renault 7 és una versió sedan del R5, creada especialment per al mercat espanyol amb un enfoc més elegant.",

        image: "images/R7-main.jpg",

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1974-1984<br>
    <strong>Desplaçament:</strong> 1.0L<br>
    <strong>Potència:</strong> 50 - 60 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Berlina 4 portes
    `,

        variants: [
            {
                engine: "1.0L (1037 cc)",
                power: "50 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R7 base (Siete)"
            },
            {
                engine: "1.0L (1037 cc)",
                power: "55 - 60 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R7 TL (acabats millorats)"
            }
        ],

        accessories: [
            {
                name: "Interior millorat",
                description: "Acabats més còmodes i elegants.",
                images: ["images/accessories/R7/interior.jpg"],
                extra: "Orientat a confort familiar."
            },
            {
                name: "Llandes estilitzades",
                description: "Disseny més refinat que el R5.",
                images: ["images/accessories/R7/wheels.jpg"],
                extra: "Diferenciació estètica del model."
            }
        ],

        videos: []
    },
    {
        id: 6,
        brand: "Renault",
        model: "8 (R8 + Gordini)",
        years: "1962-1973",
        description: "El Renault 8 és una berlina amb motor posterior que va donar lloc al mític R8 Gordini, icona esportiva de Renault.",

        image: "images/R8-main.jpg",

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1962-1973<br>
    <strong>Desplaçament:</strong> 0.9L - 1.3L<br>
    <strong>Potència:</strong> 34 - 93 CV<br>
    <strong>Tracció:</strong> Posterior<br>
    <strong>Carrosseries:</strong> Berlina 4 portes
    `,

        variants: [
            {
                engine: "0.9L (956 cc)",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 base (primera sèrie)"
            },
            {
                engine: "1.1L (1108 cc)",
                power: "44 - 50 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 Major (més confort i potència)"
            },
            {
                engine: "1.1L (1108 cc)",
                power: "50 - 60 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 S (versió esportiva intermèdia)"
            },
            {
                engine: "1.1L Gordini (1100)",
                power: "90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 Gordini 1100 (primera esportiva real)"
            },
            {
                engine: "1.3L Gordini (1300)",
                power: "93 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 Gordini 1300 (la més icònica)"
            }
        ],

        accessories: [
            {
                name: "Franges Gordini",
                description: "Línies blanques sobre fons blau.",
                images: ["images/accessories/R8/gordini-stripes.jpg"],
                extra: "Identitat visual del model esportiu."
            },
            {
                name: "Seients bucket",
                description: "Seients esportius amb subjecció lateral.",
                images: ["images/accessories/R8/seats.jpg"],
                extra: "Pensats per conducció agressiva."
            },
            {
                name: "Volant esportiu",
                description: "Diàmetre reduït per millor control.",
                images: ["images/accessories/R8/steering.jpg"],
                extra: "Millora en resposta de conducció."
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