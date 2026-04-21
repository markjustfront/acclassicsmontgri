window.carData = window.carData || [];
window.carData.push(
    {
        id: 54,
        brand: "Peugeot",
        model: "405 (Mi16)",
        years: "1987-1997",
        description: "Cotxe europeu de l'any. Estil elegant Pininfarina i la versió Mi16 amb motor 16 vàlvules molt àgil. Pràctic i divertit alhora.",
        image: "images/cars/peugeot/405-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1987-1997
Desplaçament: 1.6L - 1.9L
Potència: 90 - 160 CV
Tracció: Davantera
Carrosseries: Berlina 4 portes / Familiar (Break)`,
        variants: [
            {
                engine: "1.9L (1905 cc) Mi16",
                power: "155 - 160 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió esportiva més potent"
            },
            {
                engine: "1.6L (1580 cc)",
                power: "90 - 110 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions estàndard"
            }
        ],
        accessories: [
            {
                name: "Llandes d'aliatge Mi16",
                description: "Rodes específiques de la versió esportiva.",
                images: ["images/accessories/peugeot/405/llandes.jpg"],
                extra: "Estil dinàmic."
            },
            {
                name: "Suspensión esportiva",
                description: "Configuració més ferma per millor maneig.",
                images: ["images/accessories/peugeot/405/suspensio.jpg"],
                extra: "Característica Mi16."
            }
        ],
        videos: []
    }
);