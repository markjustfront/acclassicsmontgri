window.carData = window.carData || [];

window.carData.push(
    {
        id: 153,
        brand: "Porsche",
        model: "914",
        years: "1969-1976",
        description: "Esportiu de motor central nascut d'un projecte comú entre Volkswagen i Porsche, amb carrosseria targa. Va ser el Porsche més venut de la seva època, per davant del 911.",
        image: "images/cars/porsche/914-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1969-1976<br>
        <strong>Desplaçament:</strong> 1.7L - 2.0L<br>
        <strong>Potència:</strong> 80 - 110 CV<br>
        <strong>Tracció:</strong> Posterior (motor central)<br>
        <strong>Carrosseries:</strong> Targa 2 places<br>
        <strong>Unitats fabricades:</strong> 118.978
    `,

        variants: [
            {
                engine: "1.7L - 2.0L bòxer 4 cil. VW (aire)",
                power: "80 - 100 CV",
                fuel: "Gasolina",
                traction: "Posterior (motor central)",
                notes: "914/4"
            },
            {
                engine: "2.0L bòxer 6 cil. (aire)",
                power: "110 CV",
                fuel: "Gasolina",
                traction: "Posterior (motor central)",
                notes: "914/6 (3.332 unitats)"
            }
        ],

        accessories: [],

        videos: []
    }
);
