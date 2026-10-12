window.carData = window.carData || [];

window.carData.push(
    {
        id: 135,
        brand: "Lancia",
        model: "Aurelia",
        years: "1950-1958",
        description: "Gran turisme molt innovador: va ser el primer cotxe de sèrie amb motor V6. El coupé B20 GT (Pininfarina) és considerat un dels primers \"gran turismo\" moderns, i el B24 Spider és mític.",
        image: "images/cars/lancia/aurelia-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1950-1958<br>
        <strong>Desplaçament:</strong> 1.8L - 2.5L<br>
        <strong>Potència:</strong> 56 - 118 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina / Coupé GT / Spider / Convertible<br>
        <strong>Unitats fabricades:</strong> Unes 18.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.8L (1754 cc) V6",
                power: "56 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "B10 (1950)"
            },
            {
                engine: "2.0L V6",
                power: "70 - 80 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "B21 / B20 primera sèrie"
            },
            {
                engine: "2.5L (2451 cc) V6",
                power: "110 - 118 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "B20 GT i B24"
            }
        ],

        accessories: [
            {
                name: "Transeix posterior",
                description: "Caixa de canvis i diferencial al darrere per repartir el pes.",
                extra: ""
            }
        ],

        videos: []
    }
);
