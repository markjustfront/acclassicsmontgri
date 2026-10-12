window.carData = window.carData || [];

window.carData.push(
    {
        id: 134,
        brand: "Fiat",
        model: "131 Mirafiori",
        years: "1974-1984",
        description: "Berlina mitjana successora del 124. A Espanya SEAT la va fabricar com a SEAT 131. El 131 Abarth Rally va guanyar tres Mundials de Ral·lis de marques (1977, 1978 i 1980).",
        image: "images/cars/fiat/131-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1974-1984<br>
        <strong>Desplaçament:</strong> 1.3L - 2.0L (dièsel 2.0L - 2.5L)<br>
        <strong>Potència:</strong> 60 - 140 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Familiar<br>
        <strong>Unitats fabricades:</strong> Uns 1,5 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.3L - 1.6L R4",
                power: "65 - 96 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions de sèrie i TC"
            },
            {
                engine: "2.0L R4 DOHC",
                power: "113 - 140 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Racing / Volumetrico Abarth"
            },
            {
                engine: "2.0L / 2.5L dièsel",
                power: "60 - 72 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Diesel"
            }
        ],

        accessories: [],

        videos: []
    }
);
