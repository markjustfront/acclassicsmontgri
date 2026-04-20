window.carData = window.carData || [];

window.carData.push(
    {
        id: 41,
        brand: "SEAT",
        model: "124",
        years: "1968-1980",
        description: "El SEAT 124 és un clàssic familiar espanyol basat en el Fiat 124. Fiable, espaiós i molt popular com a cotxe familiar durant més d'una dècada.",
        image: "images/cars/seat/124-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1968-1980<br>
        <strong>Desplaçament:</strong> 1.2L<br>
        <strong>Potència:</strong> 60 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes / Familiar / Coupé
    `,

        variants: [
            {
                engine: "1.2L (1197 cc)",
                power: "60 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió estàndard principal"
            }
        ],

        accessories: [
            {
                name: "Versió Familiar",
                description: "Carrosseria station wagon de 5 portes.",
                images: ["images/accessories/124/familiar.jpg"],
                extra: "Molt pràctica per a famílies."
            },
            {
                name: "Coupé Sport",
                description: "Versió més esportiva de dues portes.",
                images: ["images/accessories/124/coupe.jpg"],
                extra: "Lligada al model 1430."
            }
        ],

        videos: []
    }
);