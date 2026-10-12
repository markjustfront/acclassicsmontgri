window.carData = window.carData || [];

window.carData.push(
    {
        id: 106,
        brand: "Authi",
        model: "Mini",
        years: "1968-1975",
        description: "El Mini de BMC fabricat a Landaben (Pamplona) per Authi. Les versions espanyoles 1275 C i 1275 GT tenien un acabat més luxós que les britàniques, amb seients de pell i tauler de fusta en alguns casos.",
        image: "images/cars/authi/mini-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1968-1975 (Authi)<br>
        <strong>Desplaçament:</strong> 0.85L - 1.3L<br>
        <strong>Potència:</strong> 34 - 60 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 2 portes<br>
        <strong>Unitats fabricades:</strong> Unes 50.000 (aprox.; dada incerta)
    `,

        variants: [
            {
                engine: "0.85L (848 cc) R4 Serie A",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Mini 850"
            },
            {
                engine: "1.0L (998 cc) R4",
                power: "38 - 40 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Mini 1000 Standard / Especial"
            },
            {
                engine: "1.3L (1275 cc) R4",
                power: "58 - 60 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Mini 1275 C / 1275 GT / Cooper 1300"
            }
        ],

        accessories: [
            {
                name: "Mini Cooper 1300",
                description: "Versió esportiva fabricada a Pamplona als anys 70.",
                extra: ""
            }
        ],

        videos: []
    }
);
