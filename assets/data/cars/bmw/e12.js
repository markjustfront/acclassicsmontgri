window.carData = window.carData || [];

window.carData.push(
    {
        id: 72,
        brand: "BMW",
        model: "Sèrie 5 E12",
        years: "1972-1981",
        description: "La primera Sèrie 5 i el primer BMW a fer servir el nom de sèrie. Una berlina mitjana elegant dissenyada sota la direcció de Paul Bracq, amb motors de quatre i sis cilindres. El M535i final va ser un dels primers models de BMW Motorsport per a carretera.",
        image: "images/cars/bmw/e12-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1972-1981<br>
        <strong>Desplaçament:</strong> 1.8L - 3.5L<br>
        <strong>Potència:</strong> 90 - 218 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes
    `,

        variants: [
            {
                engine: "1.8L (1766 cc) M10",
                power: "90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "518, versió d'accés"
            },
            {
                engine: "2.0L (1990 cc) M10",
                power: "115 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "520 de quatre cilindres amb carburador"
            },
            {
                engine: "2.0L (1990 cc) M10 injecció",
                power: "125 - 130 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "520i"
            },
            {
                engine: "2.0L (1990 cc) M20 6 cilindres",
                power: "122 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "520/6 (1977-1981)"
            },
            {
                engine: "2.5L (2494 cc) M30",
                power: "145 - 150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "525"
            },
            {
                engine: "2.8L (2788 cc) M30",
                power: "165 - 184 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "528 amb carburadors (165-170 CV) i 528i amb injecció (177-184 CV)"
            },
            {
                engine: "3.5L (3453 cc) M90",
                power: "218 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "M535i (1980-1981), de BMW Motorsport"
            }
        ],

        accessories: [
            {
                name: "M535i de BMW Motorsport",
                description: "Versió esportiva amb el motor de 3.5 litres, desenvolupada per BMW Motorsport.",
                extra: "Precursor de la saga M5."
            },
            {
                name: "Tapisseria de vellut",
                description: "Interiors de vellut típics dels anys 70 en versions de luxe.",
                extra: "Ajuda a identificar acabats originals."
            }
        ],

        videos: []
    }
);
