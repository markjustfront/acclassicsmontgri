window.carData = window.carData || [];

window.carData.push(
    {
        id: 151,
        brand: "Porsche",
        model: "911 (primera sèrie)",
        years: "1964-1973",
        description: "El successor del 356 va estrenar el bòxer de sis cilindres refrigerat per aire darrere de l'eix posterior. Aquesta primera etapa, de \"para-xocs prims\", va dels 2,0 litres als 2,7 del Carrera RS del 1973.",
        image: "images/cars/porsche/911-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1964-1973 (primera sèrie, fins a la sèrie G)<br>
        <strong>Desplaçament:</strong> 2.0L - 2.7L<br>
        <strong>Potència:</strong> 110 - 210 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / Targa<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada per a aquest període
    `,

        variants: [
            {
                engine: "2.0L bòxer 6 cil. (aire)",
                power: "110 - 170 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "911, 911 T, L, E i S (1964-1969)"
            },
            {
                engine: "2.2L - 2.4L bòxer 6 cil. (aire)",
                power: "125 - 190 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Sèries C/D i E/F (1970-1973)"
            },
            {
                engine: "2.7L bòxer 6 cil. (aire)",
                power: "210 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Carrera RS 2.7 (1973)"
            }
        ],

        accessories: [],

        videos: []
    }
);
