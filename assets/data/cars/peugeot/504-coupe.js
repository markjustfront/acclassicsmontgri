window.carData = window.carData || [];
window.carData.push(
    {
        id: 51,
        brand: "Peugeot",
        model: "504 Coupé / Cabriolet",
        years: "1974-1983",
        description: "Les versions més elegants del 504, dissenyades per Pininfarina. Més refinades i esportives, amb opcions V6. Un gran tourer francès clàssic.",
        image: "images/cars/peugeot/504-coupe-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1974-1983
Desplaçament: 1.8L - 2.7L
Potència: 98 - 144 CV
Tracció: Posterior
Carrosseries: Coupé 2 portes / Cabriolet`,
        variants: [
            {
                engine: "2.0L (1971 cc)",
                power: "98 - 108 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions gasolina 4 cilindres"
            },
            {
                engine: "2.7L V6 (2660 cc)",
                power: "136 - 144 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió més potent i desitjada"
            }
        ],
        accessories: [
            {
                name: "Capota de lona (cabriolet)",
                description: "Teulada convertible per gaudir del cel obert.",
                images: ["images/accessories/peugeot/504-coupe/capota.jpg"],
                extra: "Icona d'elegància."
            },
            {
                name: "Llandes d'aliatge",
                description: "Rodes esportives opcionals.",
                images: ["images/accessories/peugeot/504-coupe/llandes.jpg"],
                extra: "Aspecte més dinàmic."
            },
            {
                name: "Interior de cuir",
                description: "Acabats de luxe.",
                images: ["images/accessories/peugeot/504-coupe/seients.jpg"],
                extra: "Confort premium."
            }
        ],
        videos: []
    }
);