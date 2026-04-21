window.carData = window.carData || [];
window.carData.push(
    {
        id: 58,
        brand: "Citroën",
        model: "GS / GSA",
        years: "1970-1986",
        description: "Compacta avançada amb suspensió hidroneumàtica i motor pla. Pràctica, còmoda i innovadora. Èxit comercial de Citroën als 70-80.",
        image: "images/cars/citroen/gs-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1970-1986
Desplaçament: 1.015 - 1.299 cc (pla 4 cilindres)
Potència: 55 - 65 CV
Tracció: Davantera
Carrosseries: Berlina / Familiar / Break`,
        variants: [
            {
                engine: "1.0L - 1.3L",
                power: "55 - 65 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GS i GSA (hatchback)"
            }
        ],
        accessories: [
            {
                name: "Suspensión hidroneumàtica",
                description: "Confort característic de Citroën.",
                images: ["images/accessories/citroen/gs/hidroneumatica.jpg"],
                extra: "Màxim confort en una compacta."
            }
        ],
        videos: []
    }
);