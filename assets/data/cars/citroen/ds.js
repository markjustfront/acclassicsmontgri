window.carData = window.carData || [];
window.carData.push(
    {
        id: 57,
        brand: "Citroën",
        model: "DS",
        years: "1955-1975",
        description: "La 'Deessa': revolucionària suspensió hidroneumàtica, disseny futurista i confort únic. Un dels cotxes més innovadors de la història.",
        image: "images/cars/citroen/ds-main.jpg",
        destacat: true,
        generalCharacteristics: `Període de producció: 1955-1975
Desplaçament: 1.911 - 2.347 cc
Potència: 75 - 115 CV
Tracció: Davantera
Carrosseries: Berlina / Familiar (Break) / Descapotable`,
        variants: [
            {
                engine: "1.9L (1911 cc)",
                power: "75 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "DS19 inicial"
            },
            {
                engine: "2.2L (2175 cc)",
                power: "109 - 115 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "DS21"
            }
        ],
        accessories: [
            {
                name: "Suspensión hidroneumàtica",
                description: "Sistema icònic de Citroën per màxim confort.",
                images: ["images/accessories/citroen/ds/hidroneumatica.jpg"],
                extra: "Revolució tècnica."
            }
        ],
        videos: []
    }
);