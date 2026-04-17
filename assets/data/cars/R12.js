window.carData = window.carData || [];

window.carData.push(
    {
        id: 9,
        brand: "Renault",
        model: "12 (R12)",
        years: "1969-1980",
        description: "El Renault 12 és una berlina robusta i global, molt utilitzada a Europa i Amèrica del Sud.",

        image: "images/R12-main.jpg",

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1969-1980<br>
    <strong>Desplaçament:</strong> 1.2L - 1.6L<br>
    <strong>Potència:</strong> 54 - 113 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Berlina 4 portes / Familiar (Break)
    `,

        variants: [
            {
                engine: "1.2L (1289 cc)",
                power: "54 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Base R12"
            },
            {
                engine: "1.3L",
                power: "60 - 70 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions TL / TS"
            },
            {
                engine: "1.6L Gordini",
                power: "113 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R12 Gordini (esportiu icònic)"
            }
        ],

        accessories: [],
        videos: []
    }
);