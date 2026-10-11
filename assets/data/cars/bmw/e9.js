window.carData = window.carData || [];

window.carData.push(
    {
        id: 69,
        brand: "BMW",
        model: "E9 (2800 CS / 3.0 CS / 3.0 CSL)",
        years: "1968-1975",
        description: "L'elegant coupé de sis cilindres construït per Karmann. El 3.0 CSL, alleugerit amb panells d'alumini i, en la darrera versió, amb l'aleró \"Batmobile\", va dominar el Campionat d'Europa de Turismes als anys 70.",
        image: "images/cars/bmw/e9-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1968-1975<br>
        <strong>Desplaçament:</strong> 2.5L - 3.2L<br>
        <strong>Potència:</strong> 150 - 206 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 portes (2+2)
    `,

        variants: [
            {
                engine: "2.5L (2492 cc) M30",
                power: "150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "2.5 CS, versió d'accés (1974-1975)"
            },
            {
                engine: "2.8L (2788 cc) M30",
                power: "170 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "2800 CS (1968-1971)"
            },
            {
                engine: "3.0L (2985 cc) M30",
                power: "180 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "3.0 CS amb carburadors (1971-1975)"
            },
            {
                engine: "3.0L (2985 cc) M30 injecció",
                power: "200 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "3.0 CSi amb injecció D-Jetronic"
            },
            {
                engine: "3.0L (2985 / 3003 cc) M30",
                power: "180 - 200 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "3.0 CSL de primera i segona sèrie (1971-1973), carrosseria alleugerida"
            },
            {
                engine: "3.2L (3153 cc) M30 injecció",
                power: "206 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "3.0 CSL final (1973-1975) amb kit aerodinàmic 'Batmobile'"
            }
        ],

        accessories: [
            {
                name: "Kit aerodinàmic 'Batmobile'",
                description: "Spoiler davanter, aletes sobre els guardafangs i gran aleró posterior del CSL.",
                extra: "Sovint lliurat al maleter per muntar-lo fora d'Alemanya."
            },
            {
                name: "Panells d'alumini (CSL)",
                description: "Portes, capó i tapa del maleter d'alumini per reduir pes.",
                extra: "Clau per identificar un CSL autèntic."
            }
        ],

        videos: []
    }
);
