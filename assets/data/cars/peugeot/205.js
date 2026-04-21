window.carData = window.carData || [];
window.carData.push(
    {
        id: 52,
        brand: "Peugeot",
        model: "205 GTI",
        years: "1984-1994",
        description: "Un dels millors hot-hatches de la història. Compacte, lleuger, àgil i divertit de conduir. Icona dels anys 80 amb gran seguiment d'entusiastes.",
        image: "images/cars/peugeot/205-gti-main.jpg",
        destacat: true,
        generalCharacteristics: `Període de producció: 1984-1994
Desplaçament: 1.6L - 1.9L
Potència: 105 - 130 CV
Tracció: Davantera
Carrosseries: Hatchback 3 portes`,
        variants: [
            {
                engine: "1.6L (1580 cc)",
                power: "105 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió inicial"
            },
            {
                engine: "1.9L (1905 cc)",
                power: "120 - 130 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "La més buscada (GTI 1.9)"
            }
        ],
        accessories: [
            {
                name: "Llandes d'aliatge GTI",
                description: "Rodes específiques de 13 o 14 polzades.",
                images: ["images/accessories/peugeot/205-gti/llandes.jpg"],
                extra: "Aspecte esportiu icònic."
            },
            {
                name: "Spoiler posterior",
                description: "Aleró de fàbrica per millor aerodinàmica.",
                images: ["images/accessories/peugeot/205-gti/spoiler.jpg"],
                extra: "Característica GTI."
            },
            {
                name: "Seients esportius",
                description: "Recollits i amb suport lateral.",
                images: ["images/accessories/peugeot/205-gti/seients.jpg"],
                extra: "Conducció més dinàmica."
            }
        ],
        videos: []
    }
);

window.carData.push(
    {
        id: 53,
        brand: "Peugeot",
        model: "205 Turbo 16",
        years: "1984-1986",
        description: "La versió de ral·li llegendària del 205. Motor central turbo de 1.8L, tracció integral 4x4 i més de 200 CV. Homologada per al Grup B. Una de les icones més extremes del ral·li dels 80.",
        image: "images/cars/peugeot/205-t16-main.jpg",
        destacat: true,
        generalCharacteristics: `Període de producció: 1984-1986 (200 unitats carretera)
Desplaçament: 1.775 cc turbo
Potència: 200 CV (carretera) / fins a 350 CV (ral·li)
Tracció: Integral (4x4)
Carrosseries: Hatchback 3 portes (mid-engine)`,
        variants: [
            {
                engine: "1.8L Turbo (1775 cc)",
                power: "200 CV",
                fuel: "Gasolina",
                traction: "Integral",
                notes: "Versió carretera homologada"
            },
            {
                engine: "1.8L Turbo (1775 cc)",
                power: "280 - 350 CV",
                fuel: "Gasolina",
                traction: "Integral",
                notes: "Versió competició Grup B"
            }
        ],
        accessories: [
            {
                name: "Roll-cage",
                description: "Gàbia de seguretat obligatòria per a ral·lis.",
                images: ["images/accessories/peugeot/205-t16/rollcage.jpg"],
                extra: "Característica essencial de la versió de competició."
            },
            {
                name: "Intercooler gran",
                description: "Refredament extra per al turbo.",
                images: ["images/accessories/peugeot/205-t16/intercooler.jpg"],
                extra: "Augmenta la potència i fiabilitat."
            }
        ],
        videos: []
    }
);