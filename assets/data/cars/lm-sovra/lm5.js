window.carData = window.carData || [];

window.carData.push(
    {
        id: 58,
        brand: "LM Sovra",
        model: "LM5",
        years: "1982-1985",
        description: "El LM5 és una conversió cabriolet sobre base Peugeot 104 Z o Citroën LN/LNA. Una transformació rara i divertida que converteix aquests petits utilitaris en cotxes oberts amb sostre de tela.",
        image: "images/cars/lm-sovra/lm5-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1982-1985<br>
        <strong>Base:</strong> Peugeot 104 Z / Citroën LN / LNA<br>
        <strong>Desplaçament:</strong> 0.95L - 1.1L (o 0.6L en versions Citroën)<br>
        <strong>Potència:</strong> 32 - 50 CV (aprox.)<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Cabriolet 2 portes
    `,

        variants: [
            {
                engine: "0.95L - 1.1L Peugeot",
                power: "45 - 50 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Sobre Peugeot 104 Z"
            },
            {
                engine: "0.6L - 0.65L Citroën",
                power: "32 - 36 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Sobre Citroën LN / LNA (motor dos cilindres)"
            }
        ],

        accessories: [
            {
                name: "Capota de tela plegable",
                description: "Sostre convertible manual.",
                images: ["images/accessories/lm-sovra/capota.jpg"],
                extra: "Element central de la transformació LM5."
            },
            {
                name: "Reforços estructurals",
                description: "Reforços a la carrosseria per mantenir rigidesa.",
                images: ["images/accessories/lm-sovra/reforços.jpg"],
                extra: "Necessaris després de tallar el sostre."
            },
            {
                name: "Arc de seguretat",
                description: "Barra de protecció darrere els seients.",
                images: ["images/accessories/lm-sovra/rollbar.jpg"],
                extra: "Comú en cabriolets de l'època."
            }
        ],

        videos: []
    }
);