window.carData = window.carData || [];

window.carData.push(
    {
        id: 35,
        brand: "Renault",
        model: "3 (R3)",
        years: "1961 - 1962",
        description: "El Renault 3 és una versió extremadament bàsica i econòmica del R4, produïda només durant dos anys. Destinada a competir amb el Citroën 2CV en el segment més barat, tenia menys equipament (sense tercera finestra lateral, sense para-xocs cromats, etc.) i un motor més petit. Molt rar avui dia, amb només unes 2.500 unitats fabricades.",
        image: "images/cars/renault/R3-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1961 - 1962 (només 2.571 unitats)<br>
        <strong>Desplaçament:</strong> 603 cc<br>
        <strong>Potència:</strong> 22 - 23 CV<br>
        <strong>Tracció:</strong> Davantera (FWD)<br>
        <strong>Carrosseries:</strong> Hatchback 5 portes (molt simplificat)
    `,

        variants: [
            {
                engine: "603 cc (Cléon reduït)",
                power: "22 - 23 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Única versió produïda. Motor de 3CV fiscals per reduir impostos."
            }
        ],

        accessories: [
            {
                name: "Disseny ultra-bàsic",
                description: "Sense tercera finestra lateral, sense cromats ni embellidors.",
                images: ["images/accessories/R3/basic.jpg"],
                extra: "Versió 'low-cost' del R4."
            },
            {
                name: "Motor davanter transversal",
                description: "Mateixa arquitectura que el R4 però més senzill.",
                images: ["images/accessories/R3/motor.jpg"],
                extra: "Molt econòmic de manteniment."
            }
        ],

        videos: []
    }
);