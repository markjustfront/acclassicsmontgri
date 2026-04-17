window.carData = window.carData || [];

window.carData.push(
    {
        id: 11,
        brand: "Renault",
        model: "17 (R17)",
        years: "1971-1980",
        description: "Versió esportiva del R15 amb motor més potent i opcions més refinades.",

        image: "images/R17-main.jpg",

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1971-1980<br>
    <strong>Desplaçament:</strong> 1.6L<br>
    <strong>Potència:</strong> 108 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Coupé 2 portes
    `,

        variants: [
            {
                engine: "1.6L",
                power: "108 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R17 TS / Gordini-style esportiu"
            }
        ],

        accessories: [],
        videos: []
    }
);