window.carData = window.carData || [];

window.carData.push(
    {
        id: 165,
        brand: "Opel",
        model: "Ascona A",
        years: "1970-1975",
        description: "Berlina mitjana d'Opel entre el Kadett i el Rekord. Walter Röhrl va guanyar el Campionat d'Europa de Ral·lis del 1974 amb un Ascona A.",
        image: "images/cars/opel/ascona-a-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1970-1975<br>
        <strong>Desplaçament:</strong> 1.2L - 1.9L<br>
        <strong>Potència:</strong> 60 - 90 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Familiar (Voyage)<br>
        <strong>Unitats fabricades:</strong> Gairebé 692.000
    `,

        variants: [
            {
                engine: "1.2L R4 OHV",
                power: "60 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Ascona 12"
            },
            {
                engine: "1.6L - 1.9L R4 CIH",
                power: "68 - 90 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Ascona 16, 16 S i 19 SR"
            }
        ],

        accessories: [],

        videos: []
    }
);
