window.carData = window.carData || [];

window.carData.push(
    {
        id: 107,
        brand: "Authi",
        model: "Morris / Austin 1100 / 1300",
        years: "1967-1975",
        description: "El primer cotxe d'Authi (ADO16), amb disseny de Pininfarina i la suspensió Hydrolastic d'Alec Issigonis. Es va vendre a Espanya amb les marques Morris i Austin a partir de gener de 1967.",
        image: "images/cars/authi/morris-1300-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1967-1975 (Authi)<br>
        <strong>Desplaçament:</strong> 1.1L - 1.3L<br>
        <strong>Potència:</strong> 48 - 62 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada
    `,

        variants: [
            {
                engine: "1.1L (1098 cc) R4 Serie A",
                power: "48 - 50 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Morris / Austin 1100"
            },
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "58 - 62 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Morris 1300"
            }
        ],

        accessories: [
            {
                name: "Suspensió Hydrolastic",
                description: "Sistema hidràulic interconnectat davant-darrere.",
                extra: ""
            }
        ],

        videos: []
    }
);
