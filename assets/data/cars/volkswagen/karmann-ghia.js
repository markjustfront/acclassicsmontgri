window.carData = window.carData || [];

window.carData.push(
    {
        id: 120,
        brand: "Volkswagen",
        model: "Karmann Ghia (Tipus 14)",
        years: "1955-1974",
        description: "Coupé i cabriolet de línies italianes (Ghia) i carrosseria Karmann, sobre la mecànica de l'Escarabat. Més elegant que ràpid, avui és un clàssic molt apreciat.",
        image: "images/cars/volkswagen/karmann-ghia-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1955-1974<br>
        <strong>Desplaçament:</strong> 1.2L - 1.6L<br>
        <strong>Potència:</strong> 30 - 50 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / Cabriolet<br>
        <strong>Unitats fabricades:</strong> Uns 445.000 (aprox.)
    `,

        variants: [
            {
                engine: "1.2L boxer R4 aire",
                power: "30 - 34 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1955-1965"
            },
            {
                engine: "1.3L - 1.6L boxer R4 aire",
                power: "40 - 50 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1966-1974"
            }
        ],

        accessories: [],

        videos: []
    }
);
