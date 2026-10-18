window.carData = window.carData || [];

window.carData.push(
    {
        id: 147,
        brand: "Mini",
        model: "Moke",
        years: "1964-1993",
        description: "Vehicle obert i lleuger amb la mecànica del Mini, pensat al principi per a l'exèrcit. Es va fer al Regne Unit (1964-1968), a Austràlia i finalment a Portugal fins al 1993, i es va fer famós com a cotxe de platja i de lloguer.",
        image: "images/cars/mini/moke-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1964-1993<br>
        <strong>Desplaçament:</strong> 0.85L - 1.3L<br>
        <strong>Potència:</strong> 34 - aprox. 50 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Tot terreny obert (tipus buggy)<br>
        <strong>Unitats fabricades:</strong> Unes 50.000 (aprox.; 14.518 al Regne Unit)
    `,

        variants: [
            {
                engine: "0.85L (848 cc) R4 Serie A",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Moke britànic (1964-1968)"
            },
            {
                engine: "1.0L - 1.3L (998 / 1275 cc) R4 Serie A",
                power: "aprox. 39 - 50 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Moke australià i portuguès (xifres aproximades)"
            }
        ],

        accessories: [],

        videos: []
    }
);
