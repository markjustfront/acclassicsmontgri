window.carData = window.carData || [];

window.carData.push(
    {
        id: 161,
        brand: "Opel",
        model: "Kadett C",
        years: "1973-1979",
        description: "L'últim Kadett de tracció posterior, de la plataforma mundial T-car de General Motors. El Kadett GT/E de 2 litres va ser un cotxe de ral·lis molt competitiu.",
        image: "images/cars/opel/kadett-c-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1973-1979<br>
        <strong>Desplaçament:</strong> 1.0L - 2.0L<br>
        <strong>Potència:</strong> 40 - 115 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Coupé / City (3 portes) / Familiar (Caravan) / Aero<br>
        <strong>Unitats fabricades:</strong> Uns 1,7 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.0L - 1.2L R4 OHV",
                power: "40 - 60 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions principals"
            },
            {
                engine: "1.6L - 2.0L R4 CIH",
                power: "75 - 115 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Rallye i GT/E"
            }
        ],

        accessories: [],

        videos: []
    }
);
