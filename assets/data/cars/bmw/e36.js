window.carData = window.carData || [];

window.carData.push(
    {
        id: 78,
        brand: "BMW",
        model: "Sèrie 3 E36",
        years: "1990-2000",
        description: "La tercera Sèrie 3 va suposar un salt en disseny, aerodinàmica i comportament gràcies al nou eix posterior multibraç. Oferta en berlina, coupé, cabrio, Touring i Compact, i amb el M3 de sis cilindres, avui és un clàssic jove cada cop més apreciat.",
        image: "images/cars/bmw/e36-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1990-2000<br>
        <strong>Desplaçament:</strong> 1.6L - 3.2L (incl. dièsel)<br>
        <strong>Potència:</strong> 82 - 321 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina / Coupé / Cabrio / Touring / Compact
    `,

        variants: [
            {
                engine: "1.6L - 1.9L M40 / M43",
                power: "82 - 105 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "316i i 316g de gas natural (82 CV)"
            },
            {
                engine: "1.8L - 1.9L M40 / M43 / M42 / M44",
                power: "113 - 140 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "318i (113-115 CV) i 318is/ti de 16 vàlvules (140 CV)"
            },
            {
                engine: "2.0L (1991 cc) M50 / M52 6 cilindres",
                power: "150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "320i"
            },
            {
                engine: "2.5L (2494 cc) M50 / M52 6 cilindres",
                power: "170 - 192 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "325i (192 CV) i 323i/ti (170 CV)"
            },
            {
                engine: "2.8L (2793 cc) M52 6 cilindres",
                power: "193 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "328i"
            },
            {
                engine: "1.7L / 2.5L M41 / M51 dièsel",
                power: "90 - 143 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "318tds (90 CV), 325td (115 CV) i 325tds (143 CV)"
            },
            {
                engine: "3.0L / 3.2L S50 M3",
                power: "286 - 321 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "M3 3.0 (286 CV), M3 GT (295 CV) i M3 3.2 (321 CV)"
            }
        ],

        accessories: [
            {
                name: "Eix posterior multibraç Z",
                description: "Suspensió derivada del Z1 que millorava molt el comportament.",
                extra: "Gran avenç respecte a l'E30."
            },
            {
                name: "Paquet M i llandes M Contour",
                description: "Para-xocs esportius i llandes específiques.",
                extra: "Molt buscats en les versions 328i i M3."
            }
        ],

        videos: []
    }
);
