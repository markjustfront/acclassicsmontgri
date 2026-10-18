window.carData = window.carData || [];

window.carData.push(
    {
        id: 183,
        brand: "SEAT",
        model: "133",
        years: "1974-1981",
        description: "Utilitari de motor posterior que aprofitava la mecànica del SEAT 850 amb una carrosseria nova. Va substituir el 600 i a Europa es va vendre com a Fiat 133.",
        image: "images/cars/seat/133-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1974-1981<br>
        <strong>Desplaçament:</strong> 0.85L<br>
        <strong>Potència:</strong> 34 - 44 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2 portes<br>
        <strong>Unitats fabricades:</strong> 190.984
    `,

        variants: [
            {
                engine: "0.85L (843 cc) R4",
                power: "34 - 44 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Normal, Lujo i Especial (motor posterior)"
            }
        ],

        accessories: [],

        videos: []
    }
);
