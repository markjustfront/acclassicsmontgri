window.carData = window.carData || [];

window.carData.push(
    {
        id: 63,
        brand: "LM Sovra",
        model: "LM1",
        years: "1970-1985",
        description: "El LM1 és el buggy més conegut de LM Sovra. Basat en mecànica Volkswagen Escarabat, amb carrosseria oberta de fibra de vidre, lleuger i divertit. Un clàssic francès dels anys 70-80 ideal per a la platja o el lleure.",
        image: "images/cars/lm-sovra/lm1-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1970-1985<br>
        <strong>Base:</strong> Volkswagen Escarabat<br>
        <strong>Desplaçament:</strong> 1.2L - 1.6L<br>
        <strong>Potència:</strong> 34 - 50 CV (aprox.)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Buggy obert 4 places
    `,

        variants: [
            {
                engine: "1.2L - 1.3L Volkswagen",
                power: "34 - 40 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions base més habituals"
            },
            {
                engine: "1.5L - 1.6L Volkswagen",
                power: "44 - 50 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions més potents"
            }
        ],

        accessories: [
            {
                name: "Carrosseria de fibra de vidre",
                description: "Cos lleuger i resistent sense portes tradicionals.",
                images: ["images/accessories/lm-sovra/fibra.jpg"],
                extra: "Característica principal dels buggies LM Sovra."
            },
            {
                name: "Parabrisa plegable",
                description: "Parabrisa abatible per conducció oberta.",
                images: ["images/accessories/lm-sovra/parabrisa.jpg"],
                extra: "Molt útil en ús recreatiu."
            },
            {
                name: "Arcs de seguretat",
                description: "Barres de protecció davant i darrere.",
                images: ["images/accessories/lm-sovra/arcs.jpg"],
                extra: "Element de seguretat comú en buggies."
            }
        ],

        videos: []
    }
);