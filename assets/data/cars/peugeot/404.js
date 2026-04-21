window.carData = window.carData || [];
window.carData.push(
    {
        id: 49,
        brand: "Peugeot",
        model: "404",
        years: "1960-1975",
        description: "Elegant disseny Pininfarina, conegut per la seva qualitat i longevitat (especialment a Àfrica). Disponible en berlina, familiar, pickup i belles versions cabriolet/coupé.",
        image: "images/cars/peugeot/404-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1960-1975
Desplaçament: 1.468 - 1.796 cc (incl. dièsel)
Potència: 60 - 85 CV
Tracció: Posterior
Carrosseries: Berlina 4 portes / Familiar (Break) / Descapotable / Coupé / Pickup`,
        variants: [
            {
                engine: "1.5L (1468 cc)",
                power: "60 - 65 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions base"
            },
            {
                engine: "1.6L (1618 cc)",
                power: "72 - 80 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Més comú"
            },
            {
                engine: "1.8L (1796 cc)",
                power: "80 - 85 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions superiors"
            },
            {
                engine: "1.9L Dièsel",
                power: "50 - 60 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Versions dièsel duradores"
            }
        ],
        accessories: [
            {
                name: "Capota descapotable",
                description: "Teulada de tela per versions cabriolet.",
                images: ["images/accessories/peugeot/404/capota.jpg"],
                extra: "Versió més desitjada pels col·leccionistes."
            },
            {
                name: "Portaequipatges sostre",
                description: "Per càrrega extra en familiars.",
                images: ["images/accessories/peugeot/404/roofrack.jpg"],
                extra: "Ideal per viatges llargs."
            },
            {
                name: "Seients de cuir opcionals",
                description: "Acabats de luxe en versions superiors.",
                images: ["images/accessories/peugeot/404/seients.jpg"],
                extra: "Confort clàssic Peugeot."
            }
        ],
        videos: []
    }
);