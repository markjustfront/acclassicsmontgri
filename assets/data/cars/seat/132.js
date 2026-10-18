window.carData = window.carData || [];

window.carData.push(
    {
        id: 184,
        brand: "SEAT",
        model: "132",
        years: "1973-1982",
        description: "Berlina de gamma alta de SEAT, basada en el Fiat 132. Va ser el cotxe oficial per excel·lència de la Transició i un taxi molt habitual amb el motor dièsel Mercedes-Benz.",
        image: "images/cars/seat/132-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1973-1982<br>
        <strong>Desplaçament:</strong> 1.6L - 2.2L<br>
        <strong>Potència:</strong> 55 - aprox. 114 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> 108.725
    `,

        variants: [
            {
                engine: "1.6L - 2.0L R4 doble arbre",
                power: "98 - aprox. 114 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "132 1600, 1800 i 2000 (xifres de potència aproximades)"
            },
            {
                engine: "2.0L - 2.2L R4 Mercedes-Benz",
                power: "55 - 60 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "132 Diesel i 2200 Diesel"
            }
        ],

        accessories: [],

        videos: []
    }
);
