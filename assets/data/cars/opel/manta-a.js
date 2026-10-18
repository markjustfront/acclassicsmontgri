window.carData = window.carData || [];

window.carData.push(
    {
        id: 164,
        brand: "Opel",
        model: "Manta A",
        years: "1970-1975",
        description: "Coupé esportiu basat en l'Ascona, rival del Ford Capri. Les versions GT/E d'injecció i el Manta Turbo britànic en van ser les més potents.",
        image: "images/cars/opel/manta-a-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1970-1975<br>
        <strong>Desplaçament:</strong> 1.2L - 1.9L<br>
        <strong>Potència:</strong> 60 - 105 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé<br>
        <strong>Unitats fabricades:</strong> 498.553
    `,

        variants: [
            {
                engine: "1.2L - 1.6L R4",
                power: "60 - 80 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Manta 1200, 1600 i SR"
            },
            {
                engine: "1.9L R4 CIH",
                power: "90 - 105 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Manta 1900 i GT/E (injecció)"
            }
        ],

        accessories: [],

        videos: []
    }
);
