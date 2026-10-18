window.carData = window.carData || [];

window.carData.push(
    {
        id: 170,
        brand: "Triumph",
        model: "Spitfire",
        years: "1962-1980",
        description: "Petit descapotable de Michelotti fet sobre la base del Herald, rival del MG Midget. Es va fer en cinc sèries durant divuit anys a la fàbrica de Canley (Coventry).",
        image: "images/cars/triumph/spitfire-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1962-1980<br>
        <strong>Desplaçament:</strong> 1.15L - 1.5L<br>
        <strong>Potència:</strong> 63 - 75 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster 2 places<br>
        <strong>Unitats fabricades:</strong> 314.332
    `,

        variants: [
            {
                engine: "1.15L (1147 cc) R4",
                power: "63 - 67 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Spitfire 4 (Mk1) i Mk2"
            },
            {
                engine: "1.3L (1296 cc) R4",
                power: "63 - 75 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk3 i Mk IV"
            },
            {
                engine: "1.5L (1493 cc) R4",
                power: "71 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Spitfire 1500 (1974-1980)"
            }
        ],

        accessories: [],

        videos: []
    }
);
