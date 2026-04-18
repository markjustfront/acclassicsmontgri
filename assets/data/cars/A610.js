window.carData = window.carData || [];

window.carData.push(
    {
        id: 26,
        brand: "Renault Alpine",
        model: "A610",
        years: "1991 - 1995",
        description: "L'Alpine A610 és l'últim model de la saga clàssica Alpine abans de la desaparició temporal de la marca. Evolució directa del GTA amb un disseny més arrodonit, fars escamotejables i un motor V6 Turbo de 3 litres més potent i refinat. Més gran, còmode i equipat (ABS de sèrie, aire condicionat opcional), però manté l'essència rear-engine i lleugera de fibra de vidre. Una gran tourer esportiva exclusiva i poc produïda (només ~800 unitats).",
        image: "images/cars/A610-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1991 - 1995 (aprox. 800 unitats)<br>
        <strong>Desplaçament:</strong> 2.975 cc (reduït a 2.963 cc el 1993 per impostos)<br>
        <strong>Potència:</strong> 250 CV (247 hp)<br>
        <strong>Tracció:</strong> Tracció posterior (RWD)<br>
        <strong>Carrosseries:</strong> Berlinette / Cupè 2+2<br>
        <strong>Transmissió:</strong> Manual de 5 velocitats
    `,

        variants: [
            {
                engine: "3.0L PRV V6 Turbo (2975 cc)",
                power: "250 CV @ 5750 rpm",
                fuel: "Gasolina",
                traction: "RWD",
                notes: "Versió principal i única de producció. Parell màxim de 350 Nm @ 2900 rpm. Acceleració 0-100 km/h en ~5.7s i velocitat màxima ~265 km/h."
            },
            {
                engine: "3.0L PRV V6 Turbo (2963 cc post-1993)",
                power: "250 CV",
                fuel: "Gasolina",
                traction: "RWD",
                notes: "Versió adaptada per mercats com Suïssa (impostos per cilindrada). Pràcticament idèntica en potència."
            }
        ],

        accessories: [
            {
                name: "Fars escamotejables (pop-up headlights)",
                description: "Disseny característic dels anys 90 per millorar l'aerodinàmica.",
                images: ["images/accessories/A610/fars.jpg"],
                extra: "Dona un aspecte més modern i net."
            },
            {
                name: "Motor V6 Turbo posterior",
                description: "3.0 litres amb turbocompressor Garrett T3.",
                images: ["images/accessories/A610/engine.jpg"],
                extra: "Millor resposta i potència que el GTA Turbo."
            },
            {
                name: "ABS de sèrie",
                description: "Primer Alpine clàssic amb sistema antibloqueig de frens.",
                images: ["images/accessories/A610/abs.jpg"],
                extra: "Millora significativa en seguretat i conducció."
            },
            {
                name: "Interior refinat 2+2",
                description: "Més espai i equipament (aire condicionat opcional, seients en cuir o vellut).",
                images: ["images/accessories/A610/interior.jpg"],
                extra: "Orientat a gran turisme de luxe."
            }
        ],

        videos: []
    }
);