window.carData = window.carData || [];
window.carData.push(
    {
        id: 48,
        brand: "Peugeot",
        model: "403",
        years: "1955-1966",
        description: "El Peugeot 403, dissenyat per Pininfarina, és famós per aparèixer a la sèrie del Inspector Columbo. Robust, còmode i versàtil, amb versions berlina, familiar, descapotable i pickup.",
        image: "images/cars/peugeot/403-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1955-1966
Desplaçament: 1.290 - 1.816 cc (incl. dièsel)
Potència: 45 - 75 CV
Tracció: Posterior
Carrosseries: Berlina 4 portes / Familiar (Break) / Descapotable / Pickup`,
        variants: [
            {
                engine: "1.3L (1290 cc)",
                power: "45 - 48 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions inicials"
            },
            {
                engine: "1.5L (1468 cc)",
                power: "55 - 58 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Més comú"
            },
            {
                engine: "1.8L (1796 cc)",
                power: "70 - 75 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions superiors"
            },
            {
                engine: "1.8L Dièsel",
                power: "50 - 55 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Primers dièsel Peugeot"
            }
        ],
        accessories: [
            {
                name: "Capota de lona (descapotable)",
                description: "Teulada de tela per les versions cabriolet.",
                images: ["images/accessories/peugeot/403/capota.jpg"],
                extra: "Icona del model Columbo."
            },
            {
                name: "Portaequipatges sostre",
                description: "Ideal per viatges llargs i familiars.",
                images: ["images/accessories/peugeot/403/roofrack.jpg"],
                extra: "Molt utilitzat en època."
            },
            {
                name: "Motllures cromades laterals",
                description: "Elements decoratius originals.",
                images: ["images/accessories/peugeot/403/motllures.jpg"],
                extra: "Estil Pininfarina."
            }
        ],
        videos: []
    }
);