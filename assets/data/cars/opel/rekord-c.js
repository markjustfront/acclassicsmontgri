window.carData = window.carData || [];

window.carData.push(
    {
        id: 162,
        brand: "Opel",
        model: "Rekord C",
        years: "1966-1971",
        description: "Berlina mitjana de línies \"coke bottle\", la més venuda de la història del Rekord i la primera que va superar el milió d'unitats. D'ella en va derivar el primer Commodore.",
        image: "images/cars/opel/rekord-c-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1966-1971<br>
        <strong>Desplaçament:</strong> 1.5L - 2.2L<br>
        <strong>Potència:</strong> 58 - 106 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Coupé / Familiar (Caravan)<br>
        <strong>Unitats fabricades:</strong> 1.276.681
    `,

        variants: [
            {
                engine: "1.5L - 1.9L R4 CIH",
                power: "58 - 106 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Rekord 1500, 1700 i 1900"
            },
            {
                engine: "2.2L R6",
                power: "95 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Rekord 2200 de sis cilindres (aprox.)"
            }
        ],

        accessories: [],

        videos: []
    }
);
