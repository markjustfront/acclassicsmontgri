window.carData = window.carData || [];

window.carData.push(
    {
        id: 113,
        brand: "Ford",
        model: "Escort Mk2",
        years: "1975-1980",
        description: "Segona generació de l'Escort de propulsió, amb línies més rectes. El RS1800 va guanyar el Mundial de Ral·lis de 1979 (marques) i, amb Björn Waldegård i Ari Vatanen, molts ral·lis.",
        image: "images/cars/ford/escort-mk2-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1975-1980<br>
        <strong>Desplaçament:</strong> 1.1L - 2.0L<br>
        <strong>Potència:</strong> 48 - 115 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Familiar / Furgoneta<br>
        <strong>Unitats fabricades:</strong> Uns 1,8 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.1L - 1.6L R4 \"Kent\"",
                power: "48 - 84 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions de sèrie"
            },
            {
                engine: "2.0L R4 \"Pinto\"",
                power: "110 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "RS2000"
            },
            {
                engine: "1.8L R4 BDA 16V",
                power: "115 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "RS1800 d'homologació"
            }
        ],

        accessories: [],

        videos: []
    }
);
