window.carData = window.carData || [];

window.carData.push(
    {
        id: 83,
        brand: "Mercedes-Benz",
        model: "Classe S (W108 / W109)",
        years: "1965-1972",
        description: "Gran berlina de luxe que va succeir les Fintail de sis cilindres. El W109 era la versió de batalla llarga amb suspensió pneumàtica (300 SEL), i el 300 SEL 6.3, amb el V8 de 6,3 litres del 600, va ser una de les berlines més ràpides del seu temps.",
        image: "images/cars/mercedes/w108-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1965-1972<br>
        <strong>Desplaçament:</strong> 2.5L - 6.3L<br>
        <strong>Potència:</strong> 130 - 250 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes (normal i llarga)
    `,

        variants: [
            {
                engine: "2.5L (2496 cc) R6",
                power: "130 - 150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "250 S (130 CV) i 250 SE (150 CV)"
            },
            {
                engine: "2.8L (2778 cc) R6",
                power: "140 - 160 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "280 S (140 CV) i 280 SE/SEL (160 CV)"
            },
            {
                engine: "3.0L (2996 cc) R6",
                power: "170 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "300 SEb (W108) i 300 SEL (W109)"
            },
            {
                engine: "3.5L (3499 cc) V8",
                power: "200 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "280 SE/SEL 3.5 i 300 SEL 3.5"
            },
            {
                engine: "4.5L (4520 cc) V8",
                power: "198 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "280 SE/SEL 4.5 i 300 SEL 4.5"
            },
            {
                engine: "6.3L (6332 cc) M100 V8",
                power: "250 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "300 SEL 6.3 (W109, 1967-1972)"
            }
        ],

        accessories: [
            {
                name: "Suspensió pneumàtica",
                description: "El W109 (300 SEL) portava suspensió pneumàtica de sèrie.",
                extra: "Hereva de la del 600."
            }
        ],

        videos: []
    }
);
