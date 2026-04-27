window.carData = window.carData || [];

window.carData.push(
    {
        id: 57,
        brand: "LM Sovra",
        model: "LM3",
        years: "1973-1980",
        description: "El LM3 és una rara conversió coupé de 3 portes realitzada per LM Sovra sobre base Renault 15/17. Només es van produir unes 23 unitats (incloent kits). Un cotxe exclusiu i poc conegut amb esperit esportiu francès.",
        image: "images/cars/lm-sovra/lm3-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1973-1980<br>
        <strong>Base:</strong> Renault 15 / 17<br>
        <strong>Desplaçament:</strong> 1.3L - 1.6L<br>
        <strong>Potència:</strong> 60 - 108 CV (segons motor base)<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Coupé 3 portes
    `,

        variants: [
            {
                engine: "1.3L (1289 cc)",
                power: "60 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Base Renault 15 TL"
            },
            {
                engine: "1.6L (1565 cc)",
                power: "90 - 108 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Base Renault 17 TS (més esportiva)"
            }
        ],

        accessories: [
            {
                name: "Carrosseria coupé personalitzada",
                description: "Transformació completa sobre plataforma Renault.",
                images: ["images/accessories/lm-sovra/coupe.jpg"],
                extra: "Disseny exclusiu de LM Sovra."
            },
            {
                name: "Interior esportiu",
                description: "Seients i volant adaptats.",
                images: ["images/accessories/lm-sovra/interior.jpg"],
                extra: "Adaptat al caràcter del model base."
            }
        ],

        videos: []
    }
);