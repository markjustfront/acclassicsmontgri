window.carData = window.carData || [];

window.carData.push(
    {
        id: 182,
        brand: "SEAT",
        model: "124 Sport Coupé",
        years: "1971-1975",
        description: "Coupé de dues portes fabricat a la Zona Franca, equivalent al Fiat 124 Sport Coupé, amb motors de doble arbre de lleves. No té res a veure amb la carrosseria de la berlina 124 i es va fer servir molt en ral·lis.",
        image: "images/cars/seat/124-sport-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1971-1975<br>
        <strong>Desplaçament:</strong> 1.6L - 1.8L<br>
        <strong>Potència:</strong> 110 - 118 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2+2<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada
    `,

        variants: [
            {
                engine: "1.6L R4 doble arbre",
                power: "110 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "124 Sport 1600 (FC)"
            },
            {
                engine: "1.8L R4 doble arbre",
                power: "118 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "124 Sport 1800 (FC-02)"
            }
        ],

        accessories: [],

        videos: []
    }
);
