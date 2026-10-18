window.carData = window.carData || [];

window.carData.push(
    {
        id: 169,
        brand: "Triumph",
        model: "Herald",
        years: "1959-1971",
        description: "Utilitari de Giovanni Michelotti amb xassís separat, suspensió independent a les quatre rodes i un radi de gir molt curt. La seva mecànica va servir de base per al Spitfire i el GT6.",
        image: "images/cars/triumph/herald-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1959-1971<br>
        <strong>Desplaçament:</strong> 0.95L - 1.3L<br>
        <strong>Potència:</strong> 35 - 61 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2 portes / Coupé / Descapotable / Familiar / Furgoneta (Courier)<br>
        <strong>Unitats fabricades:</strong> Més de mig milió (aprox.)
    `,

        variants: [
            {
                engine: "0.95L (948 cc) R4",
                power: "35 - 45 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Herald i Herald S / Coupé"
            },
            {
                engine: "1.15L (1147 cc) R4",
                power: "39 - 51 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Herald 1200 i 12/50"
            },
            {
                engine: "1.3L (1296 cc) R4",
                power: "61 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Herald 13/60 (1967-1971)"
            }
        ],

        accessories: [],

        videos: []
    }
);
