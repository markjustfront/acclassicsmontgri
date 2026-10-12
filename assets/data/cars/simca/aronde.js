window.carData = window.carData || [];

window.carData.push(
    {
        id: 92,
        brand: "Simca",
        model: "Aronde",
        years: "1951-1964",
        description: "El primer Simca de disseny propi i el cotxe que va convertir la marca en el segon fabricant francès. Berlina monocasc compacta, coneguda per la seva fiabilitat; amb el motor Rush (1955) i la sèrie P60 (1958) va arribar a superar el milió d'unitats.",
        image: "images/cars/simca/aronde-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1951-1964<br>
        <strong>Desplaçament:</strong> 1.2L - 1.3L<br>
        <strong>Potència:</strong> 45 - 70 CV (segons any i versió)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes / Break (Châtelaine) / Coupé (Grand Large) / Cabriolet (Océane) / Pick-up<br>
        <strong>Unitats fabricades:</strong> Més d'1,2 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.2L (1221 cc) R4",
                power: "45 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Primeres Aronde 9 (1951-1955)"
            },
            {
                engine: "1.3L (1290 cc) R4 \"Flash\" / \"Rush\"",
                power: "48 - 57 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Aronde 90A i P60"
            },
            {
                engine: "1.3L (1290 cc) R4 \"Rush Super M\"",
                power: "62 - 70 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Montlhéry i versions especials (finals dels 50 i 60)"
            }
        ],

        accessories: [
            {
                name: "Carrosseria Plein Ciel / Océane",
                description: "Coupé i cabriolet de luxe carrossats per Facel.",
                extra: "Molt buscats pels col·leccionistes."
            }
        ],

        videos: []
    }
);
