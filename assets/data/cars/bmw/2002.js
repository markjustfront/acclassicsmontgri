window.carData = window.carData || [];

window.carData.push(
    {
        id: 68,
        brand: "BMW",
        model: "2002 (Sèrie 02)",
        years: "1966-1977",
        description: "La berlina compacta de dues portes que va definir BMW com a marca esportiva. Lleugera, àgil i amb motors M10 de quatre cilindres, va culminar amb el 2002 tii d'injecció i el 2002 turbo, el primer cotxe alemany de sèrie amb turbocompressor.",
        image: "images/cars/bmw/2002-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1966-1977 (2002: 1968-1975)<br>
        <strong>Desplaçament:</strong> 1.6L - 2.0L<br>
        <strong>Potència:</strong> 75 - 170 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2 portes / Touring (3 portes) / Cabriolet (Baur)
    `,

        variants: [
            {
                engine: "1.6L (1573 cc) M10",
                power: "75 - 85 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1502 (75 CV) i 1600-2 / 1602 (85 CV)"
            },
            {
                engine: "1.6L (1573 cc) M10",
                power: "105 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1600 ti amb dos carburadors (1967-1968)"
            },
            {
                engine: "1.8L (1766 cc) M10",
                power: "90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1802 (1971-1975)"
            },
            {
                engine: "2.0L (1990 cc) M10",
                power: "100 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "2002 amb carburador, la versió més venuda"
            },
            {
                engine: "2.0L (1990 cc) M10",
                power: "120 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "2002 ti amb dos carburadors (1968-1972)"
            },
            {
                engine: "2.0L (1990 cc) M10 injecció",
                power: "130 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "2002 tii amb injecció mecànica Kugelfischer (1971-1975)"
            },
            {
                engine: "2.0L (1990 cc) M10 turbo",
                power: "170 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "2002 turbo (1973-1974): primer BMW de sèrie amb turbocompressor"
            }
        ],

        accessories: [
            {
                name: "Retrovisor amb lletres 'turbo' invertides",
                description: "El 2002 turbo portava l'inscripció 'turbo' al revés al spoiler davanter per llegir-la pel retrovisor.",
                extra: "Detall polèmic a l'època."
            },
            {
                name: "Versió Touring (hatchback)",
                description: "Carrosseria de tres portes amb portó posterior, oferta entre 1971 i 1974.",
                extra: "Avançada al seu temps i avui poc comuna."
            }
        ],

        videos: []
    }
);
