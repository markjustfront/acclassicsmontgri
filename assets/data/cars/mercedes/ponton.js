window.carData = window.carData || [];

window.carData.push(
    {
        id: 80,
        brand: "Mercedes-Benz",
        model: "Ponton (W120 / W121 / W180)",
        years: "1953-1962",
        description: "La primera berlina Mercedes-Benz de carrosseria autoportant de la postguerra, coneguda com a 'Ponton' per la seva carrosseria llisa amb les aletes integrades. Va tenir versions de quatre cilindres de gasolina i dièsel (180/190) i de sis cilindres (220).",
        image: "images/cars/mercedes/ponton-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1953-1962<br>
        <strong>Desplaçament:</strong> 1.8L - 2.2L<br>
        <strong>Potència:</strong> 40 - 106 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes (220 S/SE també coupé i cabriolet)
    `,

        variants: [
            {
                engine: "1.8L (1767 cc) OM 636 diesel",
                power: "40 - 43 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "180 D (40 CV) i 180 Db (43 CV)"
            },
            {
                engine: "2.0L (1988 cc) OM 621 diesel",
                power: "48 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "180 Dc"
            },
            {
                engine: "1.8L / 1.9L R4",
                power: "52 - 68 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "180 (52 CV), 180 a (65 CV, 1897 cc), 180 b i 180 c (68 CV)"
            },
            {
                engine: "1.9L (1897 cc) R4",
                power: "75 - 80 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "190 (75 CV, 1956-1959) i 190 b (80 CV, 1959-1961)"
            },
            {
                engine: "1.9L diesel",
                power: "50 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "190 D (W121)"
            },
            {
                engine: "2.2L (2195 cc) R6",
                power: "85 - 106 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "220 a (85 CV) i 220 S (100 CV; 106 CV des de 8/1957) (W180)"
            }
        ],

        accessories: [
            {
                name: "Sostre corredís de lona",
                description: "Sostre obrible de tela, una opció habitual a les berlines de l'època.",
                extra: "Molt buscat avui."
            }
        ],

        videos: []
    }
);
