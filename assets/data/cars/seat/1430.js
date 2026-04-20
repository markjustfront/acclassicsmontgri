window.carData = window.carData || [];

window.carData.push(
    {
        id: 42,
        brand: "SEAT",
        model: "1430",
        years: "1969-1975",
        description: "El SEAT 1430 és la versió més esportiva i potent del 124. Amb motors més grans i equipament superior, va ser un dels cotxes preferits de la joventut espanyola dels 70.",
        image: "images/cars/1430-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1969-1975<br>
        <strong>Desplaçament:</strong> 1.4L - 1.8L<br>
        <strong>Potència:</strong> 70 - 95 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes / Familiar
    `,

        variants: [
            {
                engine: "1.4L (1438 cc)",
                power: "70 - 75 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió base i Especial"
            },
            {
                engine: "1.6L (1592 cc)",
                power: "95 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió 1600 més potent"
            }
        ],

        accessories: [
            {
                name: "Faros dobles",
                description: "Faros quadrats dobles davanters.",
                images: ["images/accessories/1430/faros.jpg"],
                extra: "Diferenciador estètic respecte el 124."
            },
            {
                name: "Interior de luxe",
                description: "Equipament superior i seients millorats.",
                images: ["images/accessories/1430/interior.jpg"],
                extra: "Més còmode i esportiu."
            }
        ],

        videos: []
    }
);