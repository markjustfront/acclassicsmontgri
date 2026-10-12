window.carData = window.carData || [];

window.carData.push(
    {
        id: 129,
        brand: "Fiat",
        model: "124",
        years: "1966-1974",
        description: "Berlina mitjana Cotxe de l'Any a Europa 1967. A Espanya la va fabricar SEAT com a SEAT 124 i a la URSS va ser la base del Lada 2101.",
        image: "images/cars/fiat/124-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1966-1974 (Itàlia)<br>
        <strong>Desplaçament:</strong> 1.2L - 1.6L<br>
        <strong>Potència:</strong> 60 - 90 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes / Familiar<br>
        <strong>Unitats fabricades:</strong> Uns 1,5 milions a Itàlia (aprox.)
    `,

        variants: [
            {
                engine: "1.2L (1197 cc) R4",
                power: "60 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "124 de base"
            },
            {
                engine: "1.4L - 1.6L R4 DOHC",
                power: "70 - 90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "124 Special T"
            }
        ],

        accessories: [
            {
                name: "Cotxe de l'Any 1967",
                description: "Premi europeu.",
                extra: ""
            }
        ],

        videos: []
    }
);
