window.carData = window.carData || [];

window.carData.push(
    {
        id: 133,
        brand: "Fiat",
        model: "X1/9",
        years: "1972-1989",
        description: "Petit esportiu targa amb motor central del Fiat 128, dissenyat per Marcello Gandini a Bertone. Des de 1982 es va vendre com a Bertone X1/9.",
        image: "images/cars/fiat/x19-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1972-1989<br>
        <strong>Desplaçament:</strong> 1.3L - 1.5L<br>
        <strong>Potència:</strong> 75 - 85 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Targa 2 places<br>
        <strong>Unitats fabricades:</strong> Uns 160.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.3L (1290 cc) R4 SOHC",
                power: "75 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1972-1978"
            },
            {
                engine: "1.5L (1498 cc) R4 SOHC",
                power: "85 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1978-1989, caixa de 5 velocitats"
            }
        ],

        accessories: [
            {
                name: "Sostre targa desmuntable",
                description: "Es guarda al maleter davanter.",
                extra: ""
            }
        ],

        videos: []
    }
);
