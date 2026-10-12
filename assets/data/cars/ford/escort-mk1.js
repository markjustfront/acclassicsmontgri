window.carData = window.carData || [];

window.carData.push(
    {
        id: 112,
        brand: "Ford",
        model: "Escort Mk1",
        years: "1968-1975",
        description: "Compacte de propulsió de Ford Europa, famós per les seves victòries en ral·lis (RS1600, Twin Cam, Mexico). Es va fabricar al Regne Unit i a Alemanya.",
        image: "images/cars/ford/escort-mk1-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1968-1975<br>
        <strong>Desplaçament:</strong> 1.1L - 2.0L<br>
        <strong>Potència:</strong> 48 - 120 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Familiar / Furgoneta<br>
        <strong>Unitats fabricades:</strong> Uns 2 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.1L - 1.3L R4 \"Kent\"",
                power: "48 - 72 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions de sèrie"
            },
            {
                engine: "1.6L R4 Twin Cam / BDA",
                power: "106 - 120 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Twin Cam i RS1600"
            },
            {
                engine: "1.6L R4 Kent",
                power: "86 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mexico"
            }
        ],

        accessories: [
            {
                name: "Llandes RS",
                description: "Llandes d'aliatge de 4 radis de les versions esportives.",
                extra: ""
            }
        ],

        videos: []
    }
);
