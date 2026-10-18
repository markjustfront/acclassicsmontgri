window.carData = window.carData || [];

window.carData.push(
    {
        id: 149,
        brand: "Austin-Healey",
        model: "3000",
        years: "1959-1967",
        description: "Gran esportiu britànic amb el sis cilindres de 2,9 litres de BMC. Va guanyar el Lieja-Roma-Lieja del 1960 (Pat Moss) i la Copa dels Alps del 1961 i és un dels \"Big Healey\" més buscats pels col·leccionistes.",
        image: "images/cars/austin-healey/3000-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1959-1967<br>
        <strong>Desplaçament:</strong> 2.9L<br>
        <strong>Potència:</strong> 124 - 150 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster 2 places / 2+2 / Descapotable<br>
        <strong>Unitats fabricades:</strong> Unes 42.900 (aprox.)
    `,

        variants: [
            {
                engine: "2.9L (2912 cc) R6 Serie C",
                power: "124 - 132 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk I i Mk II"
            },
            {
                engine: "2.9L (2912 cc) R6 Serie C",
                power: "150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk III BJ8 (1964-1967)"
            }
        ],

        accessories: [],

        videos: []
    }
);
