window.carData = window.carData || [];

window.carData.push(
    {
        id: 171,
        brand: "Triumph",
        model: "GT6",
        years: "1966-1973",
        description: "Versió coupé fastback del Spitfire amb el sis cilindres de 2 litres. Pel seu perfil, es deia que era el \"Jaguar E-Type dels pobres\".",
        image: "images/cars/triumph/gt6-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1966-1973<br>
        <strong>Desplaçament:</strong> 2.0L<br>
        <strong>Potència:</strong> 95 - 104 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé fastback 2 places<br>
        <strong>Unitats fabricades:</strong> 40.926
    `,

        variants: [
            {
                engine: "2.0L (1998 cc) R6",
                power: "95 - 104 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk1, Mk2 i Mk3"
            }
        ],

        accessories: [],

        videos: []
    }
);
