window.carData = window.carData || [];

window.carData.push(
    {
        id: 104,
        brand: "Talbot",
        model: "Tagora",
        years: "1980-1984",
        description: "Gran berlina de luxe iniciada per Chrysler Europe i llançada per PSA. Va tenir poc èxit comercial i se'n van fer unes 20.000 unitats; la versió SX portava el V6 PRV.",
        image: "images/cars/talbot/tagora-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1980-1984<br>
        <strong>Desplaçament:</strong> 2.2L - 2.7L (dièsel 2.3L)<br>
        <strong>Potència:</strong> 80 - 165 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> Unes 20.000 (aprox.)
    `,

        variants: [
            {
                engine: "2.2L (2155 cc) R4",
                power: "115 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "GL / GLS"
            },
            {
                engine: "2.3L (2304 cc) turbodièsel R4",
                power: "80 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "GLD / Turbo Diesel"
            },
            {
                engine: "2.7L (2664 cc) V6 PRV",
                power: "165 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "SX amb dos carburadors triples"
            }
        ],

        accessories: [],

        videos: []
    }
);
