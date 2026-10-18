window.carData = window.carData || [];

window.carData.push(
    {
        id: 143,
        brand: "Morris",
        model: "Minor",
        years: "1948-1971",
        description: "El primer gran èxit d'Alec Issigonis: un cotxe petit amb carrosseria monocasc i molt bon comportament. El 1960 es va convertir en el primer cotxe britànic que superava el milió d'unitats.",
        image: "images/cars/morris/minor-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1948-1971<br>
        <strong>Desplaçament:</strong> 0.8L - 1.1L<br>
        <strong>Potència:</strong> 27 - 48 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Tourer (descapotable) / Traveller (familiar) / Furgoneta / Pick-up<br>
        <strong>Unitats fabricades:</strong> 1.619.958
    `,

        variants: [
            {
                engine: "0.9L (918 cc) R4 de vàlvules laterals",
                power: "27 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Sèrie MM (1948-1953)"
            },
            {
                engine: "0.8L (803 cc) R4 Serie A",
                power: "30 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Sèrie II (1952-1956)"
            },
            {
                engine: "0.95L - 1.1L (948 / 1098 cc) R4 Serie A",
                power: "37 - 48 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Minor 1000 (1956-1971)"
            }
        ],

        accessories: [],

        videos: []
    }
);
