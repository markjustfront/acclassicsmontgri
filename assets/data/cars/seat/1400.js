window.carData = window.carData || [];

window.carData.push(
    {
        id: 44,
        brand: "SEAT",
        model: "1400",
        years: "1953-1963",
        description: "El SEAT 1400 és el primer cotxe fabricat per SEAT a Espanya. Un model de gamma mitjana elegant i robust, símbol dels inicis de la marca.",
        image: "images/cars/seat/1400-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1953-1963<br>
        <strong>Desplaçament:</strong> 1.4L<br>
        <strong>Potència:</strong> 44 - 58 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina / Familiar
    `,

        variants: [
            {
                engine: "1.4L (1395 cc)",
                power: "44 - 58 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Evolució A / B / C"
            }
        ],

        accessories: [
            {
                name: "Disseny clàssic",
                description: "Línies elegants dels anys 50.",
                images: ["images/accessories/1400/disseny.jpg"],
                extra: "Primer model 100% SEAT."
            }
        ],

        videos: []
    }
);