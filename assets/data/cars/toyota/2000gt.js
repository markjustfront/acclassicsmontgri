window.carData = window.carData || [];

window.carData.push(
    {
        id: 178,
        brand: "Toyota",
        model: "2000GT",
        years: "1967-1970",
        description: "Gran turisme fet amb Yamaha, amb sis cilindres de doble arbre de lleves. Se'n van fer molt poques unitats i va aparèixer, descapotat, a la pel·lícula de James Bond Només es viu dues vegades.",
        image: "images/cars/toyota/2000gt-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1967-1970<br>
        <strong>Desplaçament:</strong> 2.0L - 2.3L<br>
        <strong>Potència:</strong> 140 - 150 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 places<br>
        <strong>Unitats fabricades:</strong> 351
    `,

        variants: [
            {
                engine: "2.0L (1988 cc) R6 DOHC (3M)",
                power: "150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió principal"
            },
            {
                engine: "2.3L R6 SOHC (2M)",
                power: "aprox. 140 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Sèrie molt curta per als EUA"
            }
        ],

        accessories: [],

        videos: []
    }
);
