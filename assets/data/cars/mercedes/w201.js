window.carData = window.carData || [];

window.carData.push(
    {
        id: 88,
        brand: "Mercedes-Benz",
        model: "190 (W201)",
        years: "1982-1993",
        description: "El primer Mercedes compacte, amb suspensió posterior multibraç. Les versions 190 E 2.3-16 i 2.5-16, amb culata de 16 vàlvules de Cosworth, i les Evolution van ser la base del cotxe de turismes del DTM.",
        image: "images/cars/mercedes/w201-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1982-1993<br>
        <strong>Desplaçament:</strong> 1.8L - 3.2L<br>
        <strong>Potència:</strong> 72 - 235 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes
    `,

        variants: [
            {
                engine: "2.0L - 2.5L diesel",
                power: "72 - 90 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "190 D, 190 D 2.2 i 190 D 2.5"
            },
            {
                engine: "2.5L turbodièsel",
                power: "122 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "190 D 2.5 Turbo (1986-1988)"
            },
            {
                engine: "1.8L / 2.0L / 2.3L R4",
                power: "90 - 136 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "190, 190 E, 190 E 1.8 i 190 E 2.3"
            },
            {
                engine: "2.6L (2597 cc) M103 R6",
                power: "160 - 166 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "190 E 2.6"
            },
            {
                engine: "2.3L (2299 cc) 16V",
                power: "170 - 185 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "190 E 2.3-16 (1984-1988)"
            },
            {
                engine: "2.5L (2498 cc) 16V",
                power: "195 - 204 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "190 E 2.5-16 (1988-1993)"
            },
            {
                engine: "2.5L (2463 cc) 16V",
                power: "195 - 235 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "190 E 2.5-16 Evolution (502 unitats) i Evolution II (502 unitats, 235 CV)"
            }
        ],

        accessories: [
            {
                name: "Kit aerodinàmic Evolution II",
                description: "Aleró posterior gran i faldons per a l'homologació del DTM.",
                extra: "Només 502 unitats."
            }
        ],

        videos: []
    }
);
