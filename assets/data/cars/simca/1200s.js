window.carData = window.carData || [];

window.carData.push(
    {
        id: 96,
        brand: "Simca",
        model: "1000 Coupé / 1200 S",
        years: "1962-1971",
        description: "Coupé de motor posterior derivat del Simca 1000, dissenyat per Giorgetto Giugiaro a Bertone, que hi construïa les carrosseries. El 1967 es va convertir en 1200 S, amb més potència i el radiador al davant.",
        image: "images/cars/simca/1200s-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1962-1971<br>
        <strong>Desplaçament:</strong> 0.9L - 1.2L<br>
        <strong>Potència:</strong> 40 - 85 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 portes<br>
        <strong>Unitats fabricades:</strong> Uns 25.000 (aprox.)
    `,

        variants: [
            {
                engine: "0.9L (944 cc) R4",
                power: "40 - 52 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1000 Coupé (1962-1967)"
            },
            {
                engine: "1.2L (1204 cc) R4",
                power: "80 - 85 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1200 S (1967-1971), dos carburadors dobles"
            }
        ],

        accessories: [
            {
                name: "Carrosseria Bertone",
                description: "Dissenyada per Giugiaro i fabricada a Torí.",
                extra: "Frens de disc a les quatre rodes."
            }
        ],

        videos: []
    }
);
