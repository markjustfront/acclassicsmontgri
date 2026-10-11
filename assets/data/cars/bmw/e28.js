window.carData = window.carData || [];

window.carData.push(
    {
        id: 73,
        brand: "BMW",
        model: "Sèrie 5 E28 (incl. M5)",
        years: "1981-1988",
        description: "Evolució de l'E12 amb una carrosseria més aerodinàmica, nou quadre orientat al conductor i electrònica com el Check Control. La gamma anava del 518 al M535i, i culminava amb el primer M5, una de les berlines de sèrie més ràpides del seu temps.",
        image: "images/cars/bmw/e28-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1981-1988<br>
        <strong>Desplaçament:</strong> 1.8L - 3.5L (incl. dièsel)<br>
        <strong>Potència:</strong> 86 - 286 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes
    `,

        variants: [
            {
                engine: "1.8L (1766 cc) M10",
                power: "90 - 105 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "518 amb carburador (90 CV) i 518i (105 CV)"
            },
            {
                engine: "2.0L (1990 cc) M20 6 cilindres",
                power: "125 - 129 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "520i"
            },
            {
                engine: "2.7L (2693 cc) M20 'eta'",
                power: "122 - 129 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "525e / 528e, orientat al consum"
            },
            {
                engine: "2.5L (2494 cc) M30",
                power: "150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "525i"
            },
            {
                engine: "2.8L (2788 cc) M30",
                power: "184 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "528i"
            },
            {
                engine: "3.4L (3430 cc) M30",
                power: "185 - 218 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "535i i M535i (218 CV sense catalitzador, 185 CV amb catalitzador)"
            },
            {
                engine: "2.4L (2443 cc) M21 dièsel",
                power: "86 - 115 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "524d (86 CV) i 524td turbodièsel (115 CV)"
            },
            {
                engine: "3.5L (3453 cc) M88/3 / S38 M5",
                power: "260 - 286 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "M5 amb el motor de 24 vàlvules derivat del M1; 260 CV amb catalitzador"
            }
        ],

        accessories: [
            {
                name: "Check Control",
                description: "Panell al sostre que avisa de nivells de líquids, llums fosos i desgast de pastilles.",
                extra: "Gran novetat tecnològica a l'època."
            },
            {
                name: "Paquet M Technic (M535i)",
                description: "Para-xocs, faldons i aleró específics.",
                extra: "Molt característic del M535i."
            }
        ],

        videos: []
    }
);
