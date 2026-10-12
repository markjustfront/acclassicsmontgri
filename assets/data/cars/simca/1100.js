window.carData = window.carData || [];

window.carData.push(
    {
        id: 94,
        brand: "Simca",
        model: "1100",
        years: "1967-1985",
        description: "Un dels primers compactes europeus amb tracció davantera, motor transversal i porta posterior (hatchback). Molt popular a França durant els anys 70; també en va derivar la furgoneta VF i la versió TI esportiva.",
        image: "images/cars/simca/1100-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1967-1985 (furgonetes fins 1985)<br>
        <strong>Desplaçament:</strong> 1.1L - 1.3L<br>
        <strong>Potència:</strong> 50 - 82 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 3/5 portes / Break 3/5 portes / Furgoneta<br>
        <strong>Unitats fabricades:</strong> Més de 2 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.1L (1118 cc) R4",
                power: "50 - 60 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Motor Poissy transversal"
            },
            {
                engine: "1.3L (1294 cc) R4",
                power: "54 - 82 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "1100 Special i 1100 TI (82 CV, 1973)"
            }
        ],

        accessories: [
            {
                name: "Suspensió per barres de torsió",
                description: "Les quatre rodes amb barres de torsió, solució típica de Simca.",
                extra: "Bon confort en carreteres dolentes."
            }
        ],

        videos: []
    }
);
