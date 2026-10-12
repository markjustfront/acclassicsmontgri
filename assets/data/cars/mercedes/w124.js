window.carData = window.carData || [];

window.carData.push(
    {
        id: 89,
        brand: "Mercedes-Benz",
        model: "W124 (Classe E)",
        years: "1984-1997",
        description: "Berlina mitjana que des del 1993 va passar a anomenar-se Classe E. Es va oferir com a berlina, familiar, coupé, cabriolet i llarga. El 500 E, amb un V8 de 5 litres i muntat en col·laboració amb Porsche, n'és la versió més cobejada.",
        image: "images/cars/mercedes/w124-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1984-1997<br>
        <strong>Desplaçament:</strong> 2.0L - 6.0L<br>
        <strong>Potència:</strong> 72 - 381 CV<br>
        <strong>Tracció:</strong> Posterior / Integral (4MATIC)<br>
        <strong>Carrosseries:</strong> Berlina / Familiar T / Coupé / Cabriolet / Llarga
    `,

        variants: [
            {
                engine: "2.0L - 3.0L diesel",
                power: "72 - 113 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "200 D, 250 D i 300 D (també 4MATIC)"
            },
            {
                engine: "2.5L / 3.0L turbodièsel",
                power: "126 - 147 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "250 D Turbo, 300 D Turbo i E 300 Turbodiesel"
            },
            {
                engine: "2.0L - 2.3L R4",
                power: "105 - 136 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "200, 200 E, 220 E i 230 E"
            },
            {
                engine: "2.6L - 3.6L R6",
                power: "160 - 272 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "260 E, 300 E, 300 E-24, E 280, E 320 i E 36 AMG"
            },
            {
                engine: "4.2L (4196 cc) V8",
                power: "279 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "400 E / E 420"
            },
            {
                engine: "5.0L (4973 cc) M119 V8",
                power: "320 - 326 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "500 E / E 500 (1990-1995)"
            },
            {
                engine: "6.0L (5956 cc) V8",
                power: "381 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "E 60 AMG (1993-1994)"
            }
        ],

        accessories: [
            {
                name: "Muntatge a Porsche (500 E)",
                description: "Bona part del 500 E es va fabricar a la planta de Porsche a Zuffenhausen.",
                extra: "Aletes eixamplades i suspensió rebaixada."
            }
        ],

        videos: []
    }
);
