window.carData = window.carData || [];

window.carData.push(
    {
        id: 114,
        brand: "Ford",
        model: "Capri (Mk1)",
        years: "1969-1974",
        description: "\"El cotxe que sempre has promès a tu mateix\": coupé esportiu europeu de Ford, la resposta al Mustang. Gran ventall de motors i el RS2600 de competició.",
        image: "images/cars/ford/capri-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1969-1974<br>
        <strong>Desplaçament:</strong> 1.3L - 3.0L<br>
        <strong>Potència:</strong> 50 - 150 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 portes<br>
        <strong>Unitats fabricades:</strong> Prop d'1,2 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.3L - 1.6L R4",
                power: "50 - 88 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Kent / Taunus V4"
            },
            {
                engine: "2.0L V4 / 2.3L V6",
                power: "85 - 108 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Motors de Colònia"
            },
            {
                engine: "3.0L V6 \"Essex\"",
                power: "128 - 140 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "3000 GT / GXL"
            },
            {
                engine: "2.6L V6 injecció",
                power: "150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "RS2600"
            }
        ],

        accessories: [],

        videos: []
    }
);
