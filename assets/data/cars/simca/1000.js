window.carData = window.carData || [];

window.carData.push(
    {
        id: 93,
        brand: "Simca",
        model: "1000",
        years: "1961-1978",
        description: "Petita berlina de motor posterior i quatre portes, un èxit de vendes a França i, a Espanya, fabricada per Barreiros a Villaverde (Madrid) des de 1966. Les versions Rallye la van convertir en un cotxe de competició popular.",
        image: "images/cars/simca/1000-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1961-1978 (Espanya: 1966-1977, aprox.)<br>
        <strong>Desplaçament:</strong> 0.8L - 1.3L<br>
        <strong>Potència:</strong> 35 - 82 CV (segons versió)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> Prop d'1,6 milions (aprox.)
    `,

        variants: [
            {
                engine: "0.9L (944 cc) R4 \"Poissy\"",
                power: "35 - 44 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió original (CV segons norma i any)"
            },
            {
                engine: "1.1L (1118 cc) R4",
                power: "50 - 53 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1000 Special / GLS"
            },
            {
                engine: "1.3L (1294 cc) R4",
                power: "60 - 82 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Rallye 1 / Rallye 2 (82 CV DIN amb dos carburadors dobles)"
            }
        ],

        accessories: [
            {
                name: "Pack Rallye",
                description: "Faros auxiliars, volant esportiu i la característica franja negra al capó.",
                extra: "Rallye 2 i Rallye 3 a França."
            }
        ],

        videos: []
    }
);
