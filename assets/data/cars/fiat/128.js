window.carData = window.carData || [];

window.carData.push(
    {
        id: 131,
        brand: "Fiat",
        model: "128",
        years: "1969-1985",
        description: "Berlina de tracció davantera i motor transversal, Cotxe de l'Any a Europa 1970. El seu esquema mecànic va inspirar molts compactes posteriors. A Espanya en derivava el SEAT 128.",
        image: "images/cars/fiat/128-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1969-1985<br>
        <strong>Desplaçament:</strong> 1.1L - 1.3L<br>
        <strong>Potència:</strong> 55 - 75 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Familiar / Coupé<br>
        <strong>Unitats fabricades:</strong> Uns 3 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.1L (1116 cc) R4 SOHC",
                power: "55 - 64 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions de sèrie"
            },
            {
                engine: "1.3L (1290 cc) R4 SOHC",
                power: "67 - 75 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Rally / Sport Coupé"
            }
        ],

        accessories: [],

        videos: []
    }
);
