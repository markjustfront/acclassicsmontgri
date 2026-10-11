window.carData = window.carData || [];

window.carData.push(
    {
        id: 74,
        brand: "BMW",
        model: "Sèrie 5 E34",
        years: "1988-1996",
        description: "Una de les Sèries 5 més ben valorades: robusta, refinada i amb un disseny atemporal. Va estrenar els sis cilindres de 24 vàlvules M50, els V8 M60 al 530i i 540i, la carrosseria Touring i el darrer M5 fet a mà a Garching.",
        image: "images/cars/bmw/e34-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1988-1996<br>
        <strong>Desplaçament:</strong> 1.8L - 4.0L (incl. dièsel i M5)<br>
        <strong>Potència:</strong> 100 - 340 CV<br>
        <strong>Tracció:</strong> Posterior / Total (525iX)<br>
        <strong>Carrosseries:</strong> Berlina 4 portes / Touring
    `,

        variants: [
            {
                engine: "1.8L (1796 cc) M40 / M43",
                power: "113 - 115 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "518i"
            },
            {
                engine: "2.0L M20 / M50 6 cilindres",
                power: "129 - 150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "520i (129 CV amb M20, 150 CV amb M50 de 24 vàlvules)"
            },
            {
                engine: "2.5L M20 / M50 6 cilindres",
                power: "170 - 192 CV",
                fuel: "Gasolina",
                traction: "Posterior / Total",
                notes: "525i i 525iX amb tracció total (192 CV)"
            },
            {
                engine: "3.0L / 3.4L M30",
                power: "188 - 211 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "530i (188 CV) i 535i (211 CV), 1988-1992"
            },
            {
                engine: "3.0L / 4.0L V8 M60",
                power: "218 - 286 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "530i V8 (218 CV) i 540i (286 CV), 1992-1996"
            },
            {
                engine: "2.4L - 2.5L M21 / M51 dièsel",
                power: "115 - 143 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "524td, 525td (115 CV) i 525tds (143 CV)"
            },
            {
                engine: "3.6L / 3.8L S38 M5",
                power: "315 - 340 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "M5 3.6 (315 CV) i M5 3.8 (340 CV), també Touring"
            }
        ],

        accessories: [
            {
                name: "Carrosseria Touring",
                description: "Primer familiar de la Sèrie 5, a partir de 1991.",
                extra: "Avui molt buscat, sobretot en M5 Touring."
            },
            {
                name: "Llandes BBS / M-System",
                description: "Llandes de radis creuats típiques de l'època.",
                extra: "Molt associades a l'E34."
            }
        ],

        videos: []
    }
);
