window.carData = window.carData || [];

window.carData.push(
    {
        id: 102,
        brand: "Talbot",
        model: "Horizon",
        years: "1977-1986",
        description: "Compacte de cinc portes desenvolupat per Chrysler Europe per substituir el Simca 1100. Cotxe de l'Any a Europa 1979. Venut inicialment com a Simca o Chrysler Horizon, va passar a dir-se Talbot després de la compra per part de PSA. També es va fabricar a Villaverde (Madrid).",
        image: "images/cars/talbot/horizon-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1977-1986<br>
        <strong>Desplaçament:</strong> 1.1L - 1.5L (dièsel 1.9L)<br>
        <strong>Potència:</strong> 59 - 85 CV (dièsel 65 CV)<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 5 portes<br>
        <strong>Unitats fabricades:</strong> Més de 850.000 (aprox., Europa)
    `,

        variants: [
            {
                engine: "1.1L (1118 cc) R4",
                power: "59 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "LS"
            },
            {
                engine: "1.3L (1294 cc) R4",
                power: "65 - 68 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GL"
            },
            {
                engine: "1.5L (1442 cc) R4",
                power: "83 - 85 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GLS / SX / GT"
            },
            {
                engine: "1.9L (1905 cc) dièsel R4 XUD",
                power: "65 CV",
                fuel: "Dièsel",
                traction: "Davantera",
                notes: "Horizon Diesel (des de 1982)"
            }
        ],

        accessories: [
            {
                name: "Cotxe de l'Any 1979",
                description: "Premi europeu concedit el 1979.",
                extra: ""
            }
        ],

        videos: []
    }
);
