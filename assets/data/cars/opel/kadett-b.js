window.carData = window.carData || [];

window.carData.push(
    {
        id: 160,
        brand: "Opel",
        model: "Kadett B",
        years: "1965-1973",
        description: "El compacte d'Opel dels anys 60, més gran que el Kadett A i amb moltes carrosseries. El Rallye Kadett, amb el capó negre, en va ser la versió esportiva.",
        image: "images/cars/opel/kadett-b-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1965-1973<br>
        <strong>Desplaçament:</strong> 1.1L - 1.9L<br>
        <strong>Potència:</strong> 45 - 90 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Coupé / Familiar (Caravan)<br>
        <strong>Unitats fabricades:</strong> 2.691.300
    `,

        variants: [
            {
                engine: "1.1L - 1.2L R4 OHV",
                power: "45 - 60 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions principals"
            },
            {
                engine: "1.5L - 1.9L R4 CIH",
                power: "60 - 90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Olympia, Rallye Kadett"
            }
        ],

        accessories: [],

        videos: []
    }
);
