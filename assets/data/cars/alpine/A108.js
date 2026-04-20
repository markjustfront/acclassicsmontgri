window.carData = window.carData || [];

window.carData.push(
    {
        id: 37,
        brand: "Alpine",
        model: "A108",
        years: "1958-1965",
        description: "L'Alpine A108 és l'evolució directa de l'A106. Més refinada i potent, amb carrosseria de fibra de vidre i opcions de 2+2 places. Un clàssic esportiu que va preparar el terreny per a l'A110.",
        image: "images/cars/A108-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1958-1965<br>
        <strong>Desplaçament:</strong> 0.8L - 1.0L<br>
        <strong>Potència:</strong> 40 - 68 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / 2+2 Coupé / Cabriolet
    `,

        variants: [
            {
                engine: "0.8L (845 cc)",
                power: "40 - 50 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió base i intermèdia"
            },
            {
                engine: "0.9L (904 cc)",
                power: "50 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió més equilibrada"
            },
            {
                engine: "1.0L (998 cc)",
                power: "68 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió superior de rendiment"
            }
        ],

        accessories: [
            {
                name: "Carrosseria fibra de vidre",
                description: "Disseny lleuger i aerodinàmic en fibra de vidre.",
                images: ["images/accessories/A108/fibra.jpg"],
                extra: "Característica distintiva de tots els Alpine clàssics."
            },
            {
                name: "Interior 2+2 places",
                description: "Configuració de seients per a quatre ocupants.",
                images: ["images/accessories/A108/interior.jpg"],
                extra: "Versió GT4 / Berlinette 2+2 més pràctica."
            },
            {
                name: "Capota descapotable",
                description: "Versió cabriolet amb sostre de tela.",
                images: ["images/accessories/A108/capota.jpg"],
                extra: "Ideal per a una conducció més emocionant."
            }
        ],

        videos: []
    }
);