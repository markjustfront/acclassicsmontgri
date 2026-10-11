window.carData = window.carData || [];

window.carData.push(
    {
        id: 71,
        brand: "BMW",
        model: "Sèrie 3 E30 (incl. M3)",
        years: "1982-1994",
        description: "Per a molts, la Sèrie 3 per excel·lència: compacta, ben construïda i amb una àmplia gamma de motors, de quatre i sis cilindres, gasolina i dièsel, i fins i tot tracció total (325iX). El M3 E30, nascut per a la competició, és avui un dels clàssics esportius més cotitzats.",
        image: "images/cars/bmw/e30-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1982-1994<br>
        <strong>Desplaçament:</strong> 1.6L - 2.7L (incl. dièsel i M3)<br>
        <strong>Potència:</strong> 75 - 238 CV<br>
        <strong>Tracció:</strong> Posterior / Total (325iX)<br>
        <strong>Carrosseries:</strong> Berlina 2 i 4 portes / Touring / Cabriolet
    `,

        variants: [
            {
                engine: "1.6L - 1.8L M10 / M40",
                power: "75 - 102 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "316 i 316i, versions d'accés"
            },
            {
                engine: "1.8L M10 / M40 / M42",
                power: "102 - 136 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "318i (102-116 CV) i 318is de 16 vàlvules (136 CV)"
            },
            {
                engine: "2.0L (1990 cc) M20 6 cilindres",
                power: "125 - 129 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "320i"
            },
            {
                engine: "2.5L (2494 cc) M20 6 cilindres",
                power: "170 - 171 CV",
                fuel: "Gasolina",
                traction: "Posterior / Total",
                notes: "325i i 325iX amb tracció total"
            },
            {
                engine: "2.7L (2693 cc) M20 'eta'",
                power: "122 - 129 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "325e, motor de baix règim pensat per a l'economia"
            },
            {
                engine: "2.4L (2443 cc) M21 dièsel",
                power: "86 - 115 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "324d atmosfèric (86 CV) i 324td turbodièsel (115 CV)"
            },
            {
                engine: "2.3L (2302 cc) S14 M3",
                power: "195 - 220 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "M3 de quatre cilindres i 16 vàlvules; 195 CV amb catalitzador, 200 CV sense, Evolution fins a 220 CV"
            },
            {
                engine: "2.5L (2467 cc) S14 M3 Sport Evolution",
                power: "238 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "M3 Sport Evolution (1990), sèrie limitada d'homologació"
            }
        ],

        accessories: [
            {
                name: "Kit aerodinàmic M3",
                description: "Passos de roda eixamplats, aleró posterior i para-xocs específics.",
                extra: "Només la porta i el capó es comparteixen amb l'E30 normal."
            },
            {
                name: "Paquet M Technic",
                description: "Para-xocs, faldons i aleró esportius per a les versions convencionals.",
                extra: "Molt popular a finals dels 80."
            }
        ],

        videos: []
    }
);
