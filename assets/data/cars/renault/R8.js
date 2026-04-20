window.carData = window.carData || [];

window.carData.push(
    {
        id: 6,
        brand: "Renault",
        model: "8 (R8 + Gordini)",
        years: "1962-1973",
        description: "El Renault 8 és una berlina amb motor posterior que va donar lloc al mític R8 Gordini, icona esportiva de Renault.",
        image: "images/cars/renault/R8-main.jpg",
        destacat: false,

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1962-1973<br>
    <strong>Desplaçament:</strong> 0.9L - 1.3L<br>
    <strong>Potència:</strong> 34 - 93 CV<br>
    <strong>Tracció:</strong> Posterior<br>
    <strong>Carrosseries:</strong> Berlina 4 portes
    `,

        variants: [
            {
                engine: "0.9L (956 cc)",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 base (primera sèrie)"
            },
            {
                engine: "1.1L (1108 cc)",
                power: "44 - 50 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 Major (més confort i potència)"
            },
            {
                engine: "1.1L (1108 cc)",
                power: "50 - 60 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 S (versió esportiva intermèdia)"
            },
            {
                engine: "1.1L Gordini (1100)",
                power: "90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 Gordini 1100 (primera esportiva real)"
            },
            {
                engine: "1.3L Gordini (1300)",
                power: "93 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "R8 Gordini 1300 (la més icònica)"
            }
        ],

        accessories: [
            {
                name: "Franges Gordini",
                description: "Línies blanques sobre fons blau.",
                images: ["images/accessories/R8/gordini-stripes.jpg"],
                extra: "Identitat visual del model esportiu."
            },
            {
                name: "Seients bucket",
                description: "Seients esportius amb subjecció lateral.",
                images: ["images/accessories/R8/seats.jpg"],
                extra: "Pensats per conducció agressiva."
            },
            {
                name: "Volant esportiu",
                description: "Diàmetre reduït per millor control.",
                images: ["images/accessories/R8/steering.jpg"],
                extra: "Millora en resposta de conducció."
            }
        ],

        videos: []
    }
);