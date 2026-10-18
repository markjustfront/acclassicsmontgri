window.carData = window.carData || [];

window.carData.push(
    {
        id: 168,
        brand: "Innocenti",
        model: "Mini 90 / 120 (Bertone)",
        years: "1974-1982",
        description: "Hatchback de tres portes amb la plataforma i els motors del Mini i una carrosseria moderna de Marcello Gandini per a Bertone. Després del 1982 es va continuar fent amb motors Daihatsu fins al 1993.",
        image: "images/cars/innocenti/mini-bertone-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1974-1982 (amb motors British Leyland)<br>
        <strong>Desplaçament:</strong> 1.0L - 1.3L<br>
        <strong>Potència:</strong> aprox. 43 - 77 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 3 portes<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada
    `,

        variants: [
            {
                engine: "1.0L (998 cc) R4 Serie A",
                power: "aprox. 43 - 49 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Mini 90"
            },
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "aprox. 65 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Mini 120"
            },
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "aprox. 71 - 77 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Mini De Tomaso"
            }
        ],

        accessories: [],

        videos: []
    }
);
