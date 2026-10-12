window.carData = window.carData || [];

window.carData.push(
    {
        id: 116,
        brand: "Ford",
        model: "Sierra",
        years: "1982-1993",
        description: "Successor del Taunus/Cortina, amb una aerodinàmica revolucionària per a l'època. El Sierra RS Cosworth (1986) va triomfar en turismes de Grup A.",
        image: "images/cars/ford/sierra-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1982-1993<br>
        <strong>Desplaçament:</strong> 1.3L - 2.9L (dièsel 1.8L - 2.3L)<br>
        <strong>Potència:</strong> 60 - 224 CV<br>
        <strong>Tracció:</strong> Posterior / Integral (XR4x4, Cosworth 4x4)<br>
        <strong>Carrosseries:</strong> Hatchback 5 portes / Berlina / Familiar / 3 portes<br>
        <strong>Unitats fabricades:</strong> Uns 2,7 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.6L - 2.0L R4",
                power: "73 - 125 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions més venudes"
            },
            {
                engine: "2.8L / 2.9L V6",
                power: "145 - 150 CV",
                fuel: "Gasolina",
                traction: "Posterior / Integral",
                notes: "XR4i / XR4x4"
            },
            {
                engine: "2.0L turbo R4 Cosworth YB",
                power: "204 - 224 CV",
                fuel: "Gasolina",
                traction: "Posterior / Integral",
                notes: "RS Cosworth / RS500 / 4x4"
            }
        ],

        accessories: [],

        videos: []
    }
);
