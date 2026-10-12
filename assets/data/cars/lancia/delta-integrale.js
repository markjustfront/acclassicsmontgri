window.carData = window.carData || [];

window.carData.push(
    {
        id: 140,
        brand: "Lancia",
        model: "Delta HF Integrale",
        years: "1987-1994",
        description: "Evolució del Delta HF 4WD que va dominar el Mundial de Ral·lis: Lancia va guanyar sis títols consecutius de marques (1987-1992).",
        image: "images/cars/lancia/delta-integrale-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1987-1994<br>
        <strong>Desplaçament:</strong> 2.0L<br>
        <strong>Potència:</strong> 185 - 215 CV<br>
        <strong>Tracció:</strong> Integral (4x4)<br>
        <strong>Carrosseries:</strong> Hatchback 5 portes<br>
        <strong>Unitats fabricades:</strong> Unes 44.000 (aprox.)
    `,

        variants: [
            {
                engine: "2.0L turbo R4 8V",
                power: "185 CV",
                fuel: "Gasolina",
                traction: "Integral (4x4)",
                notes: "HF Integrale (1987)"
            },
            {
                engine: "2.0L turbo R4 16V",
                power: "196 - 215 CV",
                fuel: "Gasolina",
                traction: "Integral (4x4)",
                notes: "Integrale 16V, Evoluzione I i II"
            }
        ],

        accessories: [
            {
                name: "Pas de roda eixamplat",
                description: "Els \"Evoluzione\" tenen les aletes més amples.",
                extra: ""
            }
        ],

        videos: []
    }
);
