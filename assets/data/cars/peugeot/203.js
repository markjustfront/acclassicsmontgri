window.carData = window.carData || [];
window.carData.push(
    {
        id: 47,
        brand: "Peugeot",
        model: "203",
        years: "1948-1960",
        description: "El Peugeot 203 va ser el primer cotxe de Peugeot després de la Segona Guerra Mundial i un gran èxit comercial. Disseny modern de carroceria monobloc, suspensió independent davantera i gran durabilitat. Disponible en berlina, familiar, descapotable i pickup.",
        image: "images/cars/peugeot/203-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1948-1960
Desplaçament: 1.290 - 1.468 cc
Potència: 42 - 58 CV
Tracció: Posterior
Carrosseries: Berlina 4 portes / Familiar (Break) / Descapotable / Pickup / Furgoneta`,
        variants: [
            {
                engine: "1.3L (1290 cc)",
                power: "42 - 45 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions inicials (1948-1952)"
            },
            {
                engine: "1.3L (1290 cc)",
                power: "45 - 48 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Millores de 1952-1955"
            },
            {
                engine: "1.5L (1468 cc)",
                power: "55 - 58 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions finals (1955-1960)"
            }
        ],
        accessories: [
            {
                name: "Portaequipatges de sostre",
                description: "Estructura metàl·lica per transportar càrrega o equipatge extra.",
                images: ["images/accessories/peugeot/203/roofrack.jpg"],
                extra: "Molt pràctic en versions familiar i rural."
            },
            {
                name: "Seients posteriors abatibles",
                description: "Permeten augmentar l'espai de càrrega en la berlina i familiar.",
                images: ["images/accessories/peugeot/203/seients.jpg"],
                extra: "Versatilitat clàssica del 203."
            },
            {
                name: "Paraxocs cromats amplis",
                description: "Elements cromats originals per protecció i estètica.",
                images: ["images/accessories/peugeot/203/paraxocs.jpg"],
                extra: "Característica distintiva de l'època."
            },
            {
                name: "Tapisseria de tela clàssica",
                description: "Materials d'època per restauracions interiors.",
                images: ["images/accessories/peugeot/203/tapisseria.jpg"],
                extra: "Diferencia les versions bàsiques de les superiors."
            }
        ],
        videos: []
    }
);