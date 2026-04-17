window.carData = window.carData || [];

window.carData.push(
    {
        id: 8,
        brand: "Renault",
        model: "11 (R11)",
        years: "1983-1989",
        description: "El Renault 11 és la versió hatchback del R9, amb disseny més modern i orientació urbana.",
        image: "images/R11-main.jpg",
        destacat: false,

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1983-1989<br>
    <strong>Desplaçament:</strong> 1.1L - 1.7L<br>
    <strong>Potència:</strong> 48 - 115 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Hatchback 3 i 5 portes
    `,

        variants: [
            {
                engine: "1.1L (C1E)",
                power: "48 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Base TL"
            },
            {
                engine: "1.4L (C2J)",
                power: "60 - 72 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GT / TXE"
            },
            {
                engine: "1.7L",
                power: "90 - 95 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions GTX / Baccara"
            },
            {
                engine: "1.4L Turbo",
                power: "105 - 115 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R11 Turbo (esportiu)"
            }
        ],

        accessories: [],
        videos: []
    }
);