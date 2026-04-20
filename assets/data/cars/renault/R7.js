window.carData = window.carData || [];

window.carData.push(
    {
        id: 5,
        brand: "Renault",
        model: "7 (R7 / Siete)",
        years: "1974-1984",
        description: "El Renault 7 és una versió sedan del R5, creada especialment per al mercat espanyol amb un enfoc més elegant.",
        image: "images/cars/R7-main.jpg",
        destacat: true,

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1974-1984<br>
    <strong>Desplaçament:</strong> 1.0L<br>
    <strong>Potència:</strong> 50 - 60 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Berlina 4 portes
    `,

        variants: [
            {
                engine: "1.0L (1037 cc)",
                power: "50 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R7 base (Siete)"
            },
            {
                engine: "1.0L (1037 cc)",
                power: "55 - 60 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R7 TL (acabats millorats)"
            }
        ],

        accessories: [
            {
                name: "Interior millorat",
                description: "Acabats més còmodes i elegants.",
                images: ["images/accessories/R7/interior.jpg"],
                extra: "Orientat a confort familiar."
            },
            {
                name: "Llandes estilitzades",
                description: "Disseny més refinat que el R5.",
                images: ["images/accessories/R7/wheels.jpg"],
                extra: "Diferenciació estètica del model."
            }
        ],

        videos: []
    }
);