window.carData = window.carData || [];

window.carData.push(
    {
        id: 127,
        brand: "Fiat",
        model: "600",
        years: "1955-1969",
        description: "Utilitari de motor posterior i quatre places de Dante Giacosa. A Espanya el va fabricar SEAT (vegeu el SEAT 600). La versió Multipla va ser un precursor del monovolum.",
        image: "images/cars/fiat/600-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1955-1969 (Itàlia)<br>
        <strong>Desplaçament:</strong> 0.6L - 0.77L<br>
        <strong>Potència:</strong> 19 - 32 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2 portes / Multipla<br>
        <strong>Unitats fabricades:</strong> Uns 2,7 milions a Itàlia (aprox.)
    `,

        variants: [
            {
                engine: "0.6L (633 cc) R4",
                power: "19 - 22 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "600 original"
            },
            {
                engine: "0.77L (767 cc) R4",
                power: "25 - 32 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "600 D (1960)"
            }
        ],

        accessories: [
            {
                name: "Multipla",
                description: "Monovolum de sis places sobre la base del 600.",
                extra: ""
            }
        ],

        videos: []
    }
);
