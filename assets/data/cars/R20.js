window.carData = window.carData || [];

window.carData.push(
    {
        id: 12,
        brand: "Renault",
        model: "20 (R20)",
        years: "1975-1984",
        description: "Berlina gran i confortable, pensada per substituir el R16 en gamma alta.",
        image: "images/R20-main.jpg",
        destacat: false,

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1975-1984<br>
    <strong>Desplaçament:</strong> 1.6L - 2.2L<br>
    <strong>Potència:</strong> 64 - 130 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Berlina 5 portes
    `,

        variants: [
            {
                engine: "1.6L",
                power: "64 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Base R20"
            },
            {
                engine: "2.0L",
                power: "90 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R20 TS"
            },
            {
                engine: "2.2L Injection",
                power: "130 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R20 TX (top gamma)"
            }
        ],

        accessories: [],
        videos: []
    }
);