window.carData = window.carData || [];

window.carData.push(
    {
        id: 130,
        brand: "Fiat",
        model: "124 Sport Spider",
        years: "1966-1985",
        description: "Descapotable de Pininfarina amb motor de doble arbre de lleves dissenyat per Aurelio Lampredi. Molt exportat als EUA; l'Abarth Rally va competir al Mundial de Ral·lis.",
        image: "images/cars/fiat/124-spider-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1966-1985<br>
        <strong>Desplaçament:</strong> 1.4L - 2.0L<br>
        <strong>Potència:</strong> 90 - 135 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Spider 2+2<br>
        <strong>Unitats fabricades:</strong> Uns 200.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.4L (1438 cc) R4 DOHC",
                power: "90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Primeres sèries"
            },
            {
                engine: "1.6L - 1.8L R4 DOHC",
                power: "110 - 118 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Anys 70"
            },
            {
                engine: "2.0L R4 DOHC",
                power: "87 - 135 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Spidereuropa / Volumex (compressor)"
            }
        ],

        accessories: [],

        videos: []
    }
);
