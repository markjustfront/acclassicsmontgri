window.carData = window.carData || [];

window.carData.push(
    {
        id: 117,
        brand: "Volkswagen",
        model: "Escarabat (Tipus 1)",
        years: "1938-2003",
        description: "El cotxe de motor posterior refrigerat per aire dissenyat per Ferdinand Porsche. Amb més de 21,5 milions d'unitats, és un dels automòbils més fabricats de la història. A Espanya va ser un clàssic de culte, tot i que no s'hi va fabricar.",
        image: "images/cars/volkswagen/beetle-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1938-2003 (producció en sèrie des de 1945)<br>
        <strong>Desplaçament:</strong> 1.1L - 1.6L<br>
        <strong>Potència:</strong> 25 - 50 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2 portes / Cabriolet<br>
        <strong>Unitats fabricades:</strong> Més de 21,5 milions
    `,

        variants: [
            {
                engine: "1.1L (1131 cc) boxer R4 aire",
                power: "25 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Primers anys"
            },
            {
                engine: "1.2L (1192 cc) boxer R4 aire",
                power: "30 - 34 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1954-anys 70"
            },
            {
                engine: "1.3L - 1.6L boxer R4 aire",
                power: "40 - 50 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1300 / 1302 / 1303"
            }
        ],

        accessories: [
            {
                name: "Cabriolet Karmann",
                description: "Versió descapotable fabricada per Karmann fins 1980.",
                extra: ""
            }
        ],

        videos: []
    }
);
