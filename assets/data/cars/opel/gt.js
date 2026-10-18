window.carData = window.carData || [];

window.carData.push(
    {
        id: 163,
        brand: "Opel",
        model: "GT",
        years: "1968-1973",
        description: "Petit esportiu amb aires de Corvette i la mecànica del Kadett. La carrosseria la feia Brissonneau et Lotz a França i els fars escamotejables giraven amb una palanca manual.",
        image: "images/cars/opel/gt-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1968-1973<br>
        <strong>Desplaçament:</strong> 1.1L - 1.9L<br>
        <strong>Potència:</strong> 60 - 90 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 places<br>
        <strong>Unitats fabricades:</strong> 103.463
    `,

        variants: [
            {
                engine: "1.1L R4 OHV",
                power: "60 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "GT 1100 (3.573 unitats)"
            },
            {
                engine: "1.9L R4 CIH",
                power: "90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "GT 1900, la versió principal"
            }
        ],

        accessories: [],

        videos: []
    }
);
