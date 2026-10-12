window.carData = window.carData || [];

window.carData.push(
    {
        id: 122,
        brand: "Volkswagen",
        model: "Scirocco (Mk1)",
        years: "1974-1981",
        description: "Coupé esportiu derivat de la plataforma del Golf, dissenyat per Giugiaro i fabricat per Karmann. De fet, es va presentar uns mesos abans que el Golf.",
        image: "images/cars/volkswagen/scirocco-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1974-1981<br>
        <strong>Desplaçament:</strong> 1.1L - 1.6L<br>
        <strong>Potència:</strong> 50 - 110 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Coupé 3 portes<br>
        <strong>Unitats fabricades:</strong> Uns 504.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.1L - 1.5L R4",
                power: "50 - 85 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions de sèrie"
            },
            {
                engine: "1.6L R4 injecció",
                power: "110 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTI / GLI"
            }
        ],

        accessories: [],

        videos: []
    }
);
