// File: assets/data/cars/peugeot/205-gti.js
window.carData = window.carData || [];

window.carData.push(
    {
        id: 52,
        brand: "Peugeot",
        model: "205 GTI",
        years: "1984-1994",
        description: "Un dels hot-hatches més llegendaris de la història. Àgil, lleuger i extremadament divertit de conduir. La versió GTI va marcar els anys 80, mentre que el Rallye (molt lleuger) i el Turbo 16 (només 200 unitats de carrer) són les versions extremes del model.",
        image: "images/cars/peugeot/205-main.jpg",
        destacat: true,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1984-1994<br>
        <strong>Desplaçament:</strong> 1.3L - 1.9L (Turbo 16: 1.8L)<br>
        <strong>Potència:</strong> 103 - 130 CV (Turbo 16: 200 CV)<br>
        <strong>Tracció:</strong> Davantera (GTI i Rallye) / Integral (Turbo 16)<br>
        <strong>Carrosseries:</strong> Hatchback 3 portes
    `,

        variants: [
            {
                engine: "1.6L (1580 cc) XU5J",
                power: "105 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió inicial GTI 1.6 (1984-1986)"
            },
            {
                engine: "1.6L (1580 cc) XU5JA",
                power: "115 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTI 1.6 fase 2 (vàlvules més grans, 1987+)"
            },
            {
                engine: "1.9L (1905 cc) XU9JA",
                power: "130 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTI 1.9 (la més buscada, sense catalitzador)"
            },
            {
                engine: "1.9L (1905 cc) XU9JA catalitzat",
                power: "122 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTI 1.9 tardana (amb catalitzador)"
            },
            {
                engine: "1.3L (1294 cc) TU24",
                power: "103 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "205 Rallye (molt lleuger, carburadors Weber dobles)"
            },
            {
                engine: "1.8L Turbo (1775 cc) 16v",
                power: "200 CV",
                fuel: "Gasolina",
                traction: "Integral",
                notes: "205 Turbo 16 (versió carretera homologada Grup B)"
            }
        ],

        accessories: [
            {
                name: "Llandes d'aliatge GTI",
                description: "Speedline 14\" (1.6) o 15\" (1.9).",
                images: ["images/accessories/peugeot/205-gti/llandes.jpg"],
                extra: "Aspecte esportiu icònic del model."
            },
            {
                name: "Spoiler posterior i faldons",
                description: "Kit aerodinàmic de fàbrica GTI.",
                images: ["images/accessories/peugeot/205-gti/spoiler.jpg"],
                extra: "Característica distintiva de la gamma GTI."
            },
            {
                name: "Seients Recaro / esportius",
                description: "Seients amb suport lateral i tapisseria específica.",
                images: ["images/accessories/peugeot/205-gti/seients.jpg"],
                extra: "Màxim agafada i confort en conducció esportiva."
            },
            {
                name: "Roll-cage i intercooler",
                description: "Gàbia de seguretat i intercooler gran (Turbo 16).",
                images: ["images/accessories/peugeot/205-t16/rollcage.jpg"],
                extra: "Elements essencials de la versió de ral·li."
            },
            {
                name: "Volant esportiu Nardi o Momo",
                description: "Volant de pell o fusta molt comú en aquests models.",
                images: ["images/accessories/peugeot/205-gti/volant.jpg"],
                extra: "Detall clàssic per millorar la sensació de conducció."
            }
        ],

        videos: []
    }
);