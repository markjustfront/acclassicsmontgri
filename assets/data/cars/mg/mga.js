window.carData = window.carData || [];

window.carData.push(
    {
        id: 173,
        brand: "MG",
        model: "MGA",
        years: "1955-1962",
        description: "Esportiu de línies arrodonides que va substituir els MG T de l'estil anterior a la guerra. Va ser el primer MG que va superar les 100.000 unitats, la majoria exportades als Estats Units.",
        image: "images/cars/mg/mga-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1955-1962<br>
        <strong>Desplaçament:</strong> 1.5L - 1.6L<br>
        <strong>Potència:</strong> 68 - 108 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster / Coupé<br>
        <strong>Unitats fabricades:</strong> Unes 101.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.5L (1489 cc) R4 Serie B",
                power: "68 - 72 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "MGA 1500"
            },
            {
                engine: "1.6L (1588 / 1622 cc) R4 Serie B",
                power: "79 - 86 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "MGA 1600 i 1600 Mk II"
            },
            {
                engine: "1.6L (1588 cc) R4 doble arbre",
                power: "108 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Twin Cam (1958-1960)"
            }
        ],

        accessories: [],

        videos: []
    }
);
