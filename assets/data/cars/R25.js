// assets/data/cars/renault25.js
window.carData = window.carData || [];

window.carData.push({
    id: 15,
    brand: "Renault",
    model: "25 (R25)",
    years: "1983-1992",
    description: "Berlina de luxe de Renault, enfocada a confort, tecnologia i representació.",
    image: "images/R25-main.jpg",
    destacat: false,

    generalCharacteristics: `
    <strong>Període de producció:</strong> 1983-1992<br>
    <strong>Desplaçament:</strong> 2.0L - 2.9L<br>
    <strong>Potència:</strong> 88 - 160 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Berlina 5 portes
    `,

    variants: [
        {
            engine: "2.0L",
            power: "88 CV",
            fuel: "Gasolina",
            traction: "Davantera",
            notes: "Base R25"
        },
        {
            engine: "2.2L Injection",
            power: "120 CV",
            fuel: "Gasolina",
            traction: "Davantera",
            notes: "TX / GTX"
        },
        {
            engine: "2.5L V6",
            power: "150 - 160 CV",
            fuel: "Gasolina",
            traction: "Davantera",
            notes: "V6 Turbo (top gamma)"
        }
    ],

    accessories: [
        {
            name: "Interior Baccara",
            description: "Seients de cuir, fusta i equipament de luxe.",
            images: ["images/accessories/R25/baccara.jpg"],
            extra: "Versió més exclusiva del R25."
        }
    ],
    videos: []
});