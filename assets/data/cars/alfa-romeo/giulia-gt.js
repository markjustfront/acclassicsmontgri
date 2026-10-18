window.carData = window.carData || [];

window.carData.push(
    {
        id: 156,
        brand: "Alfa Romeo",
        model: "Giulia GT / GT Junior",
        years: "1963-1977",
        description: "Coupé de Bertone, dibuixat per un jove Giorgetto Giugiaro, amb la mecànica de la Giulia. Del Sprint GT original al 2000 GTV, passant pel popular GT 1300 Junior, i les versions GTA de competició.",
        image: "images/cars/alfa-romeo/giulia-gt-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1963-1977<br>
        <strong>Desplaçament:</strong> 1.3L - 2.0L<br>
        <strong>Potència:</strong> 89 - 131 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2+2 / Cabriolet (GTC) / Junior Zagato<br>
        <strong>Unitats fabricades:</strong> Unes 215.000 - 225.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.3L (1290 cc) R4 Twin Cam",
                power: "89 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "GT 1300 Junior"
            },
            {
                engine: "1.6L (1570 cc) R4 Twin Cam",
                power: "106 - 109 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Sprint GT, GT Veloce i GT 1600 Junior"
            },
            {
                engine: "1.8L - 2.0L R4 Twin Cam",
                power: "118 - 131 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1750 GTV i 2000 GTV"
            }
        ],

        accessories: [],

        videos: []
    }
);
