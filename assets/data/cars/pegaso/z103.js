window.carData = window.carData || [];

window.carData.push(
    {
        id: 125,
        brand: "Pegaso",
        model: "Z-103",
        years: "1955-1958",
        description: "Successor del Z-102 amb un V8 més gran i més senzill (vàlvules en culata), en versions de 3,9 a 4,7 litres. Va tenir poc èxit i només se'n coneixen tres originals, més un muntat el 1962 amb recanvis.",
        image: "images/placeholder.svg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1955-1958<br>
        <strong>Desplaçament:</strong> 3.9L - 4.7L<br>
        <strong>Potència:</strong> fins a 350 CV (amb compressor, segons fonts)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / Spider<br>
        <strong>Unitats fabricades:</strong> 3 originals (+1 el 1962)
    `,

        variants: [
            {
                engine: "3.9L / 4.5L / 4.7L V8 OHV",
                power: "fins a 350 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Dades poc documentades"
            }
        ],

        accessories: [],

        videos: []
    }
);
