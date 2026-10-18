window.carData = window.carData || [];

window.carData.push(
    {
        id: 148,
        brand: "Austin-Healey",
        model: "Sprite",
        years: "1958-1971",
        description: "Petit esportiu descapotable amb mecànica de l'A35. El primer, el Mk I, és conegut com a \"Frogeye\" o \"Bugeye\" pels fars sobre el capó. Des del 1961 va tenir un bessó amb la marca MG, el Midget.",
        image: "images/cars/austin-healey/sprite-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1958-1971<br>
        <strong>Desplaçament:</strong> 0.95L - 1.3L<br>
        <strong>Potència:</strong> 43 - 65 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster 2 places<br>
        <strong>Unitats fabricades:</strong> Unes 130.000 (aprox.)
    `,

        variants: [
            {
                engine: "0.95L (948 cc) R4 Serie A",
                power: "43 - 46 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk I \"Frogeye\" i primers Mk II"
            },
            {
                engine: "1.1L (1098 cc) R4 Serie A",
                power: "56 - 59 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk II i Mk III"
            },
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "65 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk IV (1966-1971)"
            }
        ],

        accessories: [],

        videos: []
    }
);
