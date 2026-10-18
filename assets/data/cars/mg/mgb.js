window.carData = window.carData || [];

window.carData.push(
    {
        id: 174,
        brand: "MG",
        model: "MGB",
        years: "1962-1980",
        description: "Un dels esportius britànics més venuts, amb carrosseria monocasc i el motor 1.8 de la Serie B. Es va fer descapotable i GT coupé, i també amb el V8 Rover de 3,5 litres.",
        image: "images/cars/mg/mgb-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1962-1980<br>
        <strong>Desplaçament:</strong> 1.8L - 3.5L<br>
        <strong>Potència:</strong> 95 - 137 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster / Coupé GT<br>
        <strong>Unitats fabricades:</strong> 523.836 (MGB, MGC i MGB GT V8)
    `,

        variants: [
            {
                engine: "1.8L (1798 cc) R4 Serie B",
                power: "95 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "MGB i MGB GT"
            },
            {
                engine: "3.5L V8 Rover",
                power: "137 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "MGB GT V8 (1973-1976)"
            }
        ],

        accessories: [],

        videos: []
    }
);
