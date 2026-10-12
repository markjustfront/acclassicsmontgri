window.carData = window.carData || [];

window.carData.push(
    {
        id: 138,
        brand: "Lancia",
        model: "Beta Montecarlo",
        years: "1975-1981",
        description: "Esportiu de motor central de Pininfarina, també venut com a Scorpion als EUA. En va derivar el Montecarlo Turbo de Grup 5, campió del món de marques el 1980 i 1981.",
        image: "images/cars/lancia/montecarlo-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1975-1981<br>
        <strong>Desplaçament:</strong> 2.0L<br>
        <strong>Potència:</strong> 120 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / Spider (targa)<br>
        <strong>Unitats fabricades:</strong> Uns 7.800 (aprox.)
    `,

        variants: [
            {
                engine: "2.0L (1995 cc) R4 DOHC",
                power: "120 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Beta Montecarlo"
            },
            {
                engine: "1.8L (1756 cc) R4 DOHC",
                power: "81 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Scorpion (EUA)"
            }
        ],

        accessories: [],

        videos: []
    }
);
