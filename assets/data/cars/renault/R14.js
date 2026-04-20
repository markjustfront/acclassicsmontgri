// ==================== R14.js ====================
// Renault 14 (el primer hatchback transversal de Renault)

window.carData = window.carData || [];

window.carData.push(
    {
        id: 11,
        brand: "Renault",
        model: "14",
        years: "1976 - 1983",
        description: "El Renault 14 va ser un hatchback compacte innovador amb motor transversal (primer en un Renault). Disseny atrevit (sovint anomenat \"la pera\"), utilitzava motors conjunts amb Peugeot (tipus X). Còmode, pràctic i amb bona suspensió independent. Va competir directament amb el Volkswagen Golf però amb un caràcter més francès.",
        image: "images/cars/R14-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1976 - 1983<br>
        <strong>Desplaçament:</strong> 1.2L - 1.4L (motors X Peugeot-Renault)<br>
        <strong>Potència:</strong> 58 - 70 CV<br>
        <strong>Tracció:</strong> Davantera (FWD)<br>
        <strong>Carrosseries:</strong> Hatchback 5 portes
    `,

        variants: [
            {
                engine: "1.2L (1218 cc) X5G / XZ5",
                power: "58 - 69 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions L / TL / GTL / TS. Carburador simple o doble."
            },
            {
                engine: "1.4L (1360 cc) XZ5X",
                power: "60 - 70 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió superior TS amb més potència i equipament."
            }
        ],

        accessories: [
            {
                name: "Motor transversal",
                description: "Disposició compacta que millora l'espai interior.",
                images: ["images/accessories/R14/motor.jpg"],
                extra: "Innovació tècnica important per Renault."
            },
            {
                name: "Suspensión independent",
                description: "McPherson davant i braços oscil·lants darrere.",
                images: ["images/accessories/R14/suspensio.jpg"],
                extra: "Bon confort i comportament."
            }
        ],

        videos: []
    }
);