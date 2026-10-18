window.carData = window.carData || [];

window.carData.push(
    {
        id: 150,
        brand: "Porsche",
        model: "356",
        years: "1948-1965",
        description: "El primer Porsche de sèrie, amb el motor bòxer refrigerat per aire darrere i mecànica derivada del Volkswagen. Va evolucionar de l'A al C i en sortiren el Speedster i el Carrera de quatre arbres de lleves.",
        image: "images/cars/porsche/356-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1948-1965<br>
        <strong>Desplaçament:</strong> 1.1L - 2.0L<br>
        <strong>Potència:</strong> 40 - 130 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / Cabriolet / Speedster / Roadster<br>
        <strong>Unitats fabricades:</strong> Unes 76.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.1L - 1.6L bòxer 4 cil. (aire)",
                power: "40 - 95 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "356, A, B i C (motor posterior)"
            },
            {
                engine: "1.5L - 2.0L bòxer 4 cil. 4 arbres (aire)",
                power: "100 - 130 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Carrera"
            }
        ],

        accessories: [],

        videos: []
    }
);
