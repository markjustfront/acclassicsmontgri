window.carData = window.carData || [];

window.carData.push(
    {
        id: 137,
        brand: "Lancia",
        model: "Stratos HF",
        years: "1973-1978",
        description: "El primer cotxe dissenyat expressament per guanyar ral·lis, amb carrosseria de Gandini (Bertone) i el V6 Dino de Ferrari en posició central. Va guanyar el Mundial de Ral·lis el 1974, 1975 i 1976.",
        image: "images/cars/lancia/stratos-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1973-1978<br>
        <strong>Desplaçament:</strong> 2.4L<br>
        <strong>Potència:</strong> 190 CV (sèrie)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 places<br>
        <strong>Unitats fabricades:</strong> Unes 492 (aprox.)
    `,

        variants: [
            {
                engine: "2.4L (2418 cc) V6 Dino DOHC",
                power: "190 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Stradale; en competició fins a 280 CV o més"
            }
        ],

        accessories: [],

        videos: []
    }
);
