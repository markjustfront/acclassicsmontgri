window.carData = window.carData || [];

window.carData.push(
    {
        id: 111,
        brand: "Ford",
        model: "Taunus TC",
        years: "1970-1982",
        description: "Berlina mitjana de Ford Europa. A Espanya va ser un dels cotxes més venuts de la seva categoria; el Taunus TC2 i TC3 es venien amb motors de 1.6 a 2.3 V6.",
        image: "images/cars/ford/taunus-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1970-1982<br>
        <strong>Desplaçament:</strong> 1.3L - 2.3L<br>
        <strong>Potència:</strong> 55 - 114 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Coupé / Familiar (Turnier)<br>
        <strong>Unitats fabricades:</strong> Uns 2,7 milions (aprox., totes les sèries)
    `,

        variants: [
            {
                engine: "1.3L - 1.6L OHC R4 \"Pinto\"",
                power: "59 - 88 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions més habituals"
            },
            {
                engine: "2.0L OHC R4",
                power: "98 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "GL / Ghia"
            },
            {
                engine: "2.3L V6 Colònia",
                power: "108 - 114 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Ghia / S"
            }
        ],

        accessories: [],

        videos: []
    }
);
