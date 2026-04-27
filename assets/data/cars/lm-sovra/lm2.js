window.carData = window.carData || [];

window.carData.push(
    {
        id: 59,
        brand: "LM Sovra",
        model: "LM2",
        years: "1972-1985",
        description: "El LM2 és una versió spider / roadster oberta de LM Sovra, basada en la mecànica del Volkswagen Escarabat. Més refinada i esportiva que el LM1, amb un disseny més elegant i baix. Un buggy-roadster francès ideal per a conducció oberta i lleure.",
        image: "images/cars/lm-sovra/lm2-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1972-1985<br>
        <strong>Base:</strong> Volkswagen Escarabat<br>
        <strong>Desplaçament:</strong> 1.2L - 1.6L<br>
        <strong>Potència:</strong> 34 - 50 CV (aprox.)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster / Spider obert 2 places
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
                notes: "Versions més potents i esportives"
            }
        ],

        accessories: [
            {
                name: "Carrosseria de fibra de vidre",
                description: "Cos lleuger i aerodinàmic sense portes tradicionals.",
                images: ["images/accessories/lm-sovra/fibra.jpg"],
                extra: "Disseny més baix i esportiu que el LM1."
            },
            {
                name: "Parabrisa fix o plegable",
                description: "Parabrisa baix i esportiu.",
                images: ["images/accessories/lm-sovra/parabrisa.jpg"],
                extra: "Dóna un aspecte més dinàmic al vehicle."
            },
            {
                name: "Arcs de seguretat",
                description: "Barres de protecció integrals.",
                images: ["images/accessories/lm-sovra/arcs.jpg"],
                extra: "Element de seguretat comú en els models oberts de LM Sovra."
            },
            {
                name: "Seients esportius",
                description: "Seients baixos amb millor agafada.",
                images: ["images/accessories/lm-sovra/seients.jpg"],
                extra: "Adaptats per a una conducció més esportiva."
            }
        ],

        videos: []
    }
);