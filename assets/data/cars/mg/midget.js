window.carData = window.carData || [];

window.carData.push(
    {
        id: 175,
        brand: "MG",
        model: "Midget",
        years: "1961-1979",
        description: "Petit roadster bessó de l'Austin-Healey Sprite. L'última sèrie va adoptar para-xocs negres de goma i el motor 1500 del Triumph Spitfire.",
        image: "images/cars/mg/midget-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1961-1979<br>
        <strong>Desplaçament:</strong> 0.95L - 1.5L<br>
        <strong>Potència:</strong> 46 - 66 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster 2 places<br>
        <strong>Unitats fabricades:</strong> Unes 225.000 (aprox.)
    `,

        variants: [
            {
                engine: "0.95L - 1.1L R4 Serie A",
                power: "46 - 59 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk I i Mk II"
            },
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "65 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk III"
            },
            {
                engine: "1.5L (1493 cc) R4 Triumph",
                power: "66 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Midget 1500 (1974-1979)"
            }
        ],

        accessories: [],

        videos: []
    }
);
