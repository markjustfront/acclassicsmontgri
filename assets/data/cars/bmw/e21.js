window.carData = window.carData || [];

window.carData.push(
    {
        id: 70,
        brand: "BMW",
        model: "Sèrie 3 E21",
        years: "1975-1983",
        description: "La primera Sèrie 3 de BMW, successora del 02. Va introduir el quadre de comandament orientat cap al conductor i, a partir de 1977, els primers sis cilindres M20 en una berlina compacta. Un clàssic accessible i molt agradable de conduir.",
        image: "images/cars/bmw/e21-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1975-1983<br>
        <strong>Desplaçament:</strong> 1.6L - 2.3L<br>
        <strong>Potència:</strong> 75 - 143 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2 portes / Cabriolet Baur (Top Cabriolet)
    `,

        variants: [
            {
                engine: "1.6L (1573 cc) M10",
                power: "75 - 90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "315 (75 CV) i 316 (90 CV)"
            },
            {
                engine: "1.8L (1766 cc) M10",
                power: "98 - 105 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "318 amb carburador (98 CV) i 318i amb injecció K-Jetronic (105 CV)"
            },
            {
                engine: "2.0L (1990 cc) M10",
                power: "109 - 125 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "320 de quatre cilindres (109 CV) i 320i (125 CV), 1975-1977"
            },
            {
                engine: "2.0L (1990 cc) M20 6 cilindres",
                power: "122 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "320/6 (1977-1982)"
            },
            {
                engine: "2.3L (2316 cc) M20 6 cilindres",
                power: "143 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "323i amb injecció K-Jetronic, la versió més esportiva"
            }
        ],

        accessories: [
            {
                name: "Quadre orientat cap al conductor",
                description: "La consola central inclinada cap al conductor va néixer amb l'E21.",
                extra: "Tret de disseny que BMW va mantenir durant dècades."
            },
            {
                name: "Top Cabriolet Baur",
                description: "Transformació amb arc de seguretat fix i sostre de lona.",
                extra: "Producció limitada i molt buscada."
            }
        ],

        videos: []
    }
);
