window.carData = window.carData || [];

window.carData.push(
    {
        id: 152,
        brand: "Porsche",
        model: "912",
        years: "1965-1969 / 1975-1976",
        description: "La carrosseria del 911 amb el motor de quatre cilindres de l'últim 356, més barat i ben equilibrat. Durant uns anys es va vendre més que el 911. El 1975-1976 es va recuperar com a 912E per als Estats Units.",
        image: "images/cars/porsche/912-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1965-1969 / 1975-1976 (912E)<br>
        <strong>Desplaçament:</strong> 1.6L - 2.0L<br>
        <strong>Potència:</strong> 86 - 90 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / Targa<br>
        <strong>Unitats fabricades:</strong> Més de 32.000 (i 2.092 912E)
    `,

        variants: [
            {
                engine: "1.6L (1582 cc) bòxer 4 cil. (aire)",
                power: "90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "912 (1965-1969)"
            },
            {
                engine: "2.0L bòxer 4 cil. VW (aire, injecció)",
                power: "aprox. 86 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "912E, només per als EUA (1975-1976)"
            }
        ],

        accessories: [],

        videos: []
    }
);
