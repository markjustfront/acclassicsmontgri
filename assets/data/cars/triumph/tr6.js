window.carData = window.carData || [];

window.carData.push(
    {
        id: 172,
        brand: "Triumph",
        model: "TR6",
        years: "1968-1976",
        description: "L'últim TR clàssic de xassís separat, redissenyat per Karmann sobre la base del TR5, amb el sis cilindres de 2,5 litres i injecció Lucas a Europa. La gran majoria es van exportar als Estats Units.",
        image: "images/cars/triumph/tr6-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1968-1976<br>
        <strong>Desplaçament:</strong> 2.5L<br>
        <strong>Potència:</strong> 104 - 150 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster 2 places<br>
        <strong>Unitats fabricades:</strong> 91.850
    `,

        variants: [
            {
                engine: "2.5L (2498 cc) R6 injecció",
                power: "125 - 150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "TR6 PI (Europa)"
            },
            {
                engine: "2.5L (2498 cc) R6 carburadors",
                power: "104 - 106 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "TR250/TR6 per als EUA"
            }
        ],

        accessories: [],

        videos: []
    }
);
