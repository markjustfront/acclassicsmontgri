window.carData = window.carData || [];

window.carData.push(
    {
        id: 158,
        brand: "Alfa Romeo",
        model: "Alfasud",
        years: "1971-1984",
        description: "Compacte de tracció davantera i motor bòxer fabricat a Pomigliano d'Arco (Nàpols), amb disseny de Giugiaro. Era un dels cotxes de la seva categoria que anava millor; la versió Sprint coupé es va fer fins al 1989.",
        image: "images/cars/alfa-romeo/alfasud-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1971-1984 (Sprint fins al 1989)<br>
        <strong>Desplaçament:</strong> 1.2L - 1.5L<br>
        <strong>Potència:</strong> 63 - 105 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Familiar (Giardinetta) / 3 portes / Coupé (Sprint)<br>
        <strong>Unitats fabricades:</strong> Unes 900.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.2L - 1.3L bòxer 4 cil.",
                power: "63 - 79 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Alfasud, L, ti"
            },
            {
                engine: "1.4L - 1.5L bòxer 4 cil.",
                power: "85 - 105 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "ti 1.5, Quadrifoglio Verde i Sprint"
            }
        ],

        accessories: [],

        videos: []
    }
);
