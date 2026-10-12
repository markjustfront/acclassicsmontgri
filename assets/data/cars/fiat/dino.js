window.carData = window.carData || [];

window.carData.push(
    {
        id: 128,
        brand: "Fiat",
        model: "Dino Spider / Coupé",
        years: "1966-1973",
        description: "Esportiu amb el V6 Dino de Ferrari, creat perquè Ferrari pogués homologar el motor per a la Fórmula 2. Spider de Pininfarina i coupé de Bertone.",
        image: "images/cars/fiat/dino-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1966-1973<br>
        <strong>Desplaçament:</strong> 2.0L - 2.4L<br>
        <strong>Potència:</strong> 160 - 180 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Spider / Coupé 2+2<br>
        <strong>Unitats fabricades:</strong> Uns 7.800 (aprox.)
    `,

        variants: [
            {
                engine: "2.0L (1987 cc) V6 Dino DOHC",
                power: "160 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1966-1969"
            },
            {
                engine: "2.4L (2418 cc) V6 Dino DOHC",
                power: "180 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1969-1973, suspensió posterior independent"
            }
        ],

        accessories: [],

        videos: []
    }
);
