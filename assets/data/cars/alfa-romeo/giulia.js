window.carData = window.carData || [];

window.carData.push(
    {
        id: 155,
        brand: "Alfa Romeo",
        model: "Giulia (berlina)",
        years: "1962-1978",
        description: "Berlina compacta amb motor de doble arbre de lleves en alumini i una carrosseria molt aerodinàmica per a l'època. Va ser el cotxe de la policia italiana i una referència entre les berlines esportives.",
        image: "images/cars/alfa-romeo/giulia-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1962-1978<br>
        <strong>Desplaçament:</strong> 1.3L - 1.6L (i dièsel 1.8L)<br>
        <strong>Potència:</strong> 55 - 112 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada
    `,

        variants: [
            {
                engine: "1.3L (1290 cc) R4 Twin Cam",
                power: "78 - 89 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Giulia 1300, 1300 TI i Super 1.3"
            },
            {
                engine: "1.6L (1570 cc) R4 Twin Cam",
                power: "92 - 112 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Giulia TI, Super i TI Super"
            },
            {
                engine: "1.8L R4 Perkins",
                power: "aprox. 55 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Giulia Diesel (1976)"
            }
        ],

        accessories: [],

        videos: []
    }
);
