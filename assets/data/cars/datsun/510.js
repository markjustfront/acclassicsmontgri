window.carData = window.carData || [];

window.carData.push(
    {
        id: 176,
        brand: "Datsun",
        model: "510 (Bluebird)",
        years: "1967-1973",
        description: "Berlina japonesa amb motor d'arbre de lleves en culata i suspensió posterior independent, que als Estats Units es deia que era el \"BMW 2002 dels pobres\". Va guanyar el Ral·li Safari del 1970.",
        image: "images/cars/datsun/510-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1967-1973<br>
        <strong>Desplaçament:</strong> 1.3L - 1.6L<br>
        <strong>Potència:</strong> 72 - 109 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Coupé / Familiar<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada
    `,

        variants: [
            {
                engine: "1.3L R4 SOHC (L13)",
                power: "72 - 77 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Bluebird 1300"
            },
            {
                engine: "1.6L R4 SOHC (L16)",
                power: "96 - 109 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1600 i SSS (xifres SAE/JIS)"
            }
        ],

        accessories: [],

        videos: []
    }
);
