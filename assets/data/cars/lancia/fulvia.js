window.carData = window.carData || [];

window.carData.push(
    {
        id: 136,
        brand: "Lancia",
        model: "Fulvia",
        years: "1963-1976",
        description: "Berlina i coupé de tracció davantera amb un V4 estret. El Fulvia Coupé HF va guanyar el Campionat Internacional de Marques de Ral·lis el 1972.",
        image: "images/cars/lancia/fulvia-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1963-1976<br>
        <strong>Desplaçament:</strong> 1.1L - 1.6L<br>
        <strong>Potència:</strong> 58 - 132 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina / Coupé / Sport Zagato<br>
        <strong>Unitats fabricades:</strong> Uns 340.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.1L - 1.3L V4",
                power: "58 - 101 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Berlina i Coupé"
            },
            {
                engine: "1.6L (1584 cc) V4",
                power: "115 - 132 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Coupé 1.6 HF"
            }
        ],

        accessories: [],

        videos: []
    }
);
