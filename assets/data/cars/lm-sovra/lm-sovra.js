window.carData = window.carData || [];

window.carData.push(
    {
        id: 62,
        brand: "LM Sovra",
        model: "LM4 (Renault 5 Cabrio)",
        years: "1980-1985",
        description: "LM Sovra és un petit fabricant francès conegut per les seves transformacions i buggies. El LM4 és una conversió cabriolet de la Renault 5 de tres portes, amb sostre de tela plegable. Una opció divertida i rara per donar un toc obert al clàssic R5.",
        image: "images/cars/lm-sovra/lm-sovra-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1980-1985 (conversions)<br>
        <strong>Base:</strong> Renault 5 tres portes<br>
        <strong>Desplaçament:</strong> Depèn del model base (0.9L - 1.4L habitualment)<br>
        <strong>Potència:</strong> Depèn del motor original<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Cabriolet 2 portes (conversió)
    `,

        variants: [
            {
                engine: "Motors originals Renault 5",
                power: "45 - 95 CV (segons versió base)",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "LM4 estàndard sobre R5 TL / GTL / TS"
            },
            {
                engine: "1.4L (R5 Alpine / Gordini base)",
                power: "93 - 110 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió més esportiva LM4 Alpine"
            },
            {
                engine: "1.4L Turbo (possible conversió)",
                power: "~120+ CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Rares conversions sobre R5 GT Turbo"
            }
        ],

        accessories: [
            {
                name: "Capota de tela plegable",
                description: "Sostre convertible manual de tela.",
                images: ["images/accessories/lm-sovra/capota.jpg"],
                extra: "Element principal de la transformació LM4."
            },
            {
                name: "Arc de seguretat / Roll-bar",
                description: "Barra de seguretat darrere els seients.",
                images: ["images/accessories/lm-sovra/rollbar.jpg"],
                extra: "Comú en les conversions cabrio per rigidesa i seguretat."
            },
            {
                name: "Interior reforçat",
                description: "Reforços estructurals a la carrosseria original.",
                images: ["images/accessories/lm-sovra/reforços.jpg"],
                extra: "Necessaris per mantenir la rigidesa després de tallar el sostre."
            },
            {
                name: "Llandes i suspensió esportiva",
                description: "Millores opcionals per millor comportament.",
                images: ["images/accessories/lm-sovra/llandes.jpg"],
                extra: "Molt habitual en les versions més esportives."
            }
        ],

        videos: []
    }
);