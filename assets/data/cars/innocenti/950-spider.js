window.carData = window.carData || [];

window.carData.push(
    {
        id: 166,
        brand: "Innocenti",
        model: "950 Spider / Spider S",
        years: "1961-1968",
        description: "El primer cotxe d'Innocenti, la fàbrica milanesa de la Lambretta: un descapotable amb la mecànica de l'Austin-Healey Sprite i carrosseria dissenyada per Tom Tjaarda a Ghia i feta per OSI.",
        image: "images/cars/innocenti/950-spider-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1961-1968 (dates aproximades)<br>
        <strong>Desplaçament:</strong> 0.95L - 1.1L<br>
        <strong>Potència:</strong> aprox. 43 - 58 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Spider 2 places / Coupé (C)<br>
        <strong>Unitats fabricades:</strong> Unes 6.900 Spider (aprox.)
    `,

        variants: [
            {
                engine: "0.95L (948 cc) R4 Serie A",
                power: "aprox. 43 - 50 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "950 Spider (4.790 unitats)"
            },
            {
                engine: "1.1L (1098 cc) R4 Serie A",
                power: "aprox. 56 - 58 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Spider S i Coupé C (xifra de potència incerta)"
            }
        ],

        accessories: [],

        videos: []
    }
);
