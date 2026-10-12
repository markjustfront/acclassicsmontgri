window.carData = window.carData || [];

window.carData.push(
    {
        id: 86,
        brand: "Mercedes-Benz",
        model: "W123 (Classe mitjana)",
        years: "1976-1986",
        description: "La berlina mitjana que va consolidar la fama de robustesa de Mercedes-Benz, molt popular com a taxi. Es va oferir com a berlina, coupé, familiar T (des de 1978) i llarga, amb motors de gasolina i dièsel.",
        image: "images/cars/mercedes/w123-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1976-1986<br>
        <strong>Desplaçament:</strong> 2.0L - 3.0L<br>
        <strong>Potència:</strong> 55 - 185 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina / Coupé / Familiar T / Llarga
    `,

        variants: [
            {
                engine: "2.0L / 2.2L R4 diesel",
                power: "55 - 60 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "200 D (55 CV; 60 CV des de 1979) i 220 D (60 CV)"
            },
            {
                engine: "2.4L R4 diesel",
                power: "65 - 72 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "240 D (72 CV des de 1978)"
            },
            {
                engine: "3.0L R5 diesel",
                power: "80 - 88 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "300 D"
            },
            {
                engine: "3.0L R5 turbodièsel",
                power: "121 - 125 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "300 D Turbodiesel (EUA) i 300 TD Turbodiesel"
            },
            {
                engine: "2.0L / 2.3L R4",
                power: "94 - 136 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "200, 230, 200 T i 230 E/TE"
            },
            {
                engine: "2.5L (2525 cc) R6",
                power: "129 - 140 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "250"
            },
            {
                engine: "2.8L (2746 cc) M110 R6",
                power: "156 - 185 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "280 (carburador) i 280 E/CE/TE (injecció)"
            }
        ],

        accessories: [
            {
                name: "Versió T (familiar)",
                description: "Primer familiar de fàbrica de Mercedes-Benz, des de 1978.",
                extra: "Molt apreciat per la seva capacitat de càrrega."
            }
        ],

        videos: []
    }
);
