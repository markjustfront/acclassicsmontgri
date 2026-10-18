window.carData = window.carData || [];

window.carData.push(
    {
        id: 159,
        brand: "Alfa Romeo",
        model: "Alfetta",
        years: "1972-1984",
        description: "Berlina amb el canvi i l'embragatge a l'eix posterior (transaxle) i suspensió De Dion, per repartir millor el pes. El coupé Alfetta GT/GTV, de Giugiaro, es va fer fins al 1987.",
        image: "images/cars/alfa-romeo/alfetta-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1972-1984 (GT/GTV fins al 1987)<br>
        <strong>Desplaçament:</strong> 1.6L - 2.5L<br>
        <strong>Potència:</strong> 82 - 160 CV<br>
        <strong>Tracció:</strong> Posterior (transaxle)<br>
        <strong>Carrosseries:</strong> Berlina 4 portes / Coupé (GT/GTV)<br>
        <strong>Unitats fabricades:</strong> Gairebé 450.000 berlines (aprox.)
    `,

        variants: [
            {
                engine: "1.6L - 2.0L R4 Twin Cam",
                power: "109 - 130 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Berlina, GT i GTV"
            },
            {
                engine: "2.5L V6",
                power: "160 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "GTV6 (1980-1987)"
            },
            {
                engine: "2.0L - 2.4L R4 turbodièsel",
                power: "82 - 95 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Alfetta Turbo D"
            }
        ],

        accessories: [],

        videos: []
    }
);
