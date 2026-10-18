window.carData = window.carData || [];

window.carData.push(
    {
        id: 179,
        brand: "Toyota",
        model: "Celica (A20/A35)",
        years: "1970-1977",
        description: "El primer Celica, un coupé esportiu inspirat en els \"pony cars\" americans. El 1973 va arribar la versió Liftback, amb la part posterior de tipus fastback.",
        image: "images/cars/toyota/celica-a20-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1970-1977<br>
        <strong>Desplaçament:</strong> 1.4L - 2.2L<br>
        <strong>Potència:</strong> 86 - 145 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / Liftback<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada
    `,

        variants: [
            {
                engine: "1.4L - 1.6L R4 (T / 2T)",
                power: "86 - 100 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions ST i LT (xifres JIS aproximades)"
            },
            {
                engine: "1.6L R4 DOHC (2T-G)",
                power: "115 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Celica 1600 GT"
            },
            {
                engine: "2.0L R4 DOHC (18R-G)",
                power: "145 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Celica 2000 GT (Japó)"
            },
            {
                engine: "2.0L - 2.2L R4 (18R / 20R)",
                power: "aprox. 95 - 105 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions d'exportació"
            }
        ],

        accessories: [],

        videos: []
    }
);
