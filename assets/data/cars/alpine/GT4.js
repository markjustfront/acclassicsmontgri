window.carData = window.carData || [];

window.carData.push(
    {
        id: 38,
        brand: "Alpine",
        model: "GT4",
        years: "1962-1969",
        description: "L'Alpine GT4 (o A110 GT4) és la versió 2+2 places de l'A110. Un cotxe esportiu familiar però amb esperit de competició, produït en edició limitada. Combina esportivitat i practicitat.",
        image: "images/cars/alpine/GT4-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1962-1969<br>
        <strong>Desplaçament:</strong> 0.9L - 1.1L<br>
        <strong>Potència:</strong> 51 - 66 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2+2
    `,

        variants: [
            {
                engine: "0.9L (956 cc)",
                power: "51 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió base Renault 8"
            },
            {
                engine: "1.1L (1108 cc)",
                power: "66 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió Major més potent"
            }
        ],

        accessories: [
            {
                name: "Seients 2+2",
                description: "Configuració de quatre places amb espai posterior.",
                images: ["images/accessories/GT4/seients.jpg"],
                extra: "El que la fa única dins la gamma Alpine."
            },
            {
                name: "Carrosseria fibra de vidre",
                description: "Cos lleuger i rígid en fibra de vidre.",
                images: ["images/accessories/GT4/fibra.jpg"],
                extra: "Manteniment de l'esperit lleuger d'Alpine."
            },
            {
                name: "Volant esportiu",
                description: "Volant de tres radis per millor sensació de conducció.",
                images: ["images/accessories/GT4/volant.jpg"],
                extra: "Detall clàssic de les versions esportives."
            }
        ],

        videos: []
    }
);