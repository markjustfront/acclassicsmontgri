window.carData = window.carData || [];

window.carData.push(
    {
        id: 82,
        brand: "Mercedes-Benz",
        model: "SL \"Pagoda\" (W113)",
        years: "1963-1971",
        description: "Roadster de dues places conegut com a 'Pagoda' pel seu hardtop de sostre còncau. Combinava confort i seguretat, amb una cel·la d'habitacle rígida i zones de deformació. Va evolucionar del 230 SL al 250 SL i al 280 SL.",
        image: "images/cars/mercedes/pagoda-w113-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1963-1971<br>
        <strong>Desplaçament:</strong> 2.3L - 2.8L<br>
        <strong>Potència:</strong> 150 - 170 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster amb hardtop opcional
    `,

        variants: [
            {
                engine: "2.3L (2306 cc) M127 R6",
                power: "150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "230 SL (1963-1967)"
            },
            {
                engine: "2.5L (2496 cc) M129 R6",
                power: "150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "250 SL (1966-1968)"
            },
            {
                engine: "2.8L (2778 cc) M130 R6",
                power: "170 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "280 SL (1968-1971)"
            }
        ],

        accessories: [
            {
                name: "Hardtop 'Pagoda'",
                description: "Sostre rígid desmuntable amb la forma còncava que dona nom al model.",
                extra: "Es podia combinar amb la capota de lona."
            }
        ],

        videos: []
    }
);
