window.carData = window.carData || [];

window.carData.push(
    {
        id: 11,
        brand: "Renault",
        model: "15 (R15)",
        years: "1971-1980",
        description: "Coupé derivat del R12 amb estil esportiu i disseny més baix i elegant.",
        image: "images/R15-main.jpg",
        destacat: false,

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1971-1980<br>
    <strong>Desplaçament:</strong> 1.3L - 1.6L<br>
    <strong>Potència:</strong> 60 - 110 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Coupé 2 portes
    `,

        variants: [
            {
                engine: "1.3L",
                power: "60 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R15 TL"
            },
            {
                engine: "1.6L",
                power: "90 - 110 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R15 TS / GTL"
            }
        ],

        accessories: [],
        videos: []
    }
);