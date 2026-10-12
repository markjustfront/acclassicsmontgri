window.carData = window.carData || [];

window.carData.push(
    {
        id: 95,
        brand: "Simca",
        model: "1300 / 1500",
        years: "1963-1976",
        description: "Berlines mitjanes de propulsió que van substituir l'Aronde. El 1966 es van actualitzar com a 1301 i 1501, amb un morro i una part posterior allargats. Hi havia versió familiar (Break).",
        image: "images/cars/simca/1300-1500-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1963-1976<br>
        <strong>Desplaçament:</strong> 1.3L - 1.5L<br>
        <strong>Potència:</strong> 52 - 81 CV (segons any i norma)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes / Break 5 portes<br>
        <strong>Unitats fabricades:</strong> Prop de 1,5 milions (aprox., totes les versions)
    `,

        variants: [
            {
                engine: "1.3L (1290 cc) R4",
                power: "52 - 60 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Simca 1300 / 1301"
            },
            {
                engine: "1.5L (1475 cc) R4",
                power: "69 - 81 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Simca 1500 / 1501 (xifres SAE o DIN segons font)"
            }
        ],

        accessories: [
            {
                name: "Break amb gran maleter",
                description: "Versió familiar molt habitual com a cotxe de feina.",
                extra: ""
            }
        ],

        videos: []
    }
);
