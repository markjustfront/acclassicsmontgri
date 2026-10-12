window.carData = window.carData || [];

window.carData.push(
    {
        id: 119,
        brand: "Volkswagen",
        model: "Transporter T2",
        years: "1967-1979",
        description: "Segona generació del Transporter, amb el parabrisa d'una sola peça. Molt popular com a autocaravana Westfalia. Al Brasil es va fabricar fins 2013.",
        image: "images/cars/volkswagen/t2-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1967-1979 (Alemanya)<br>
        <strong>Desplaçament:</strong> 1.6L - 2.0L<br>
        <strong>Potència:</strong> 47 - 70 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Furgoneta / Microbús / Pick-up / Westfalia<br>
        <strong>Unitats fabricades:</strong> Uns 2,5 milions a Alemanya (aprox.)
    `,

        variants: [
            {
                engine: "1.6L boxer R4 aire",
                power: "47 - 50 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió més habitual"
            },
            {
                engine: "1.7L - 2.0L boxer R4 aire (Tipus 4)",
                power: "66 - 70 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Des de 1972"
            }
        ],

        accessories: [
            {
                name: "Westfalia",
                description: "Equipament de càmping amb sostre elevable.",
                extra: ""
            }
        ],

        videos: []
    }
);
