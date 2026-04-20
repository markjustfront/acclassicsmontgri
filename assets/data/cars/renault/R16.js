window.carData = window.carData || [];

window.carData.push(
    {
        id: 13,
        brand: "Renault",
        model: "16",
        years: "1965 - 1980",
        description: "El Renault 16 és un dels cotxes més innovadors de la seva època. Considerat el primer hatchback modern del món, combina la comoditat d'una berlina amb la versatilitat d'un familiar gràcies al seu gran portell posterior i seients modulars. Va guanyar el títol de Cotxe Europeu de l'Any 1966 i va revolucionar el segment familiar amb tracció davantera, suspensió independent per barres de torsió i un motor d'aliatge lleuger. Més d'1.8 milions d'unitats produïdes.",
        image: "images/cars/renault/R16-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1965 - 1980 (1.845.959 unitats)<br>
        <strong>Desplaçament:</strong> 1.470 cc - 1.647 cc (4 cilindres en línia, motor d'aliatge)<br>
        <strong>Potència:</strong> 55 - 93 CV<br>
        <strong>Tracció:</strong> Tracció davantera (FWD)<br>
        <strong>Carrosseries:</strong> Hatchback 5 portes (amb gran portell posterior i seients reclinables/modulars)<br>
        <strong>Transmissió:</strong> Manual 4 o 5 velocitats / Automàtica opcional
    `,

        variants: [
            {
                engine: "1.470 cc (A1K) 4 cil. (motors inicials)",
                power: "55 - 60 CV",
                fuel: "Gasolina",
                traction: "FWD",
                notes: "Versions base (Grand Luxe / Super / L). Motor d'aliatge lleuger longitudinal."
            },
            {
                engine: "1.565 cc (A2L) 4 cil. (TS / TL)",
                power: "83 - 85 CV",
                fuel: "Gasolina",
                traction: "FWD",
                notes: "Versió més equilibrada i comuna. Capçalera de flux creuat (cross-flow). Top speed ~165 km/h."
            },
            {
                engine: "1.647 cc (A3M) 4 cil. (TX)",
                power: "93 CV",
                fuel: "Gasolina",
                traction: "FWD",
                notes: "Versió superior TX (1973-1980). Caixa de 5 velocitats, fars dobles, equipament més luxós. La més potent i desitjada."
            }
        ],

        accessories: [
            {
                name: "Portell posterior gran (hatchback)",
                description: "Primer hatchback modern amb gran obertura posterior per càrrega.",
                images: ["images/accessories/R16/hatch.jpg"],
                extra: "Revolucionari per l'època: combina berlina i familiar en un sol vehicle."
            },
            {
                name: "Seients modulars i reclinables",
                description: "Seients posteriors abatibles i configurables per màxima versatilitat.",
                images: ["images/accessories/R16/seients.jpg"],
                extra: "Permet transportar objectes llargs o crear un espai pla."
            },
            {
                name: "Suspensión per barres de torsió",
                description: "Independent a les 4 rodes amb excel·lent confort.",
                images: ["images/accessories/R16/suspensio.jpg"],
                extra: "Una de les suspensions més còmodes de la seva generació."
            },
            {
                name: "Motor d'aliatge lleuger Cléon-Alu",
                description: "Motor longitudinal davanter amb caixa de canvis al davant (layout clàssic Renault).",
                images: ["images/accessories/R16/motor.jpg"],
                extra: "Lleuger i fiable, base de molts motors Renault posteriors."
            }
        ],

        videos: []
    }
);