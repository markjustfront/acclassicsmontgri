window.carData = window.carData || [];

window.carData.push(
    {
        id: 7,
        brand: "Renault",
        model: "9 (R9)",
        years: "1981-1989",
        description: "El Renault 9 és una berlina compacta molt fiable, dissenyada per ser econòmica i global, guanyadora del premi Cotxe de l’Any 1982.",
        image: "images/cars/R9-main.jpg",
        destacat: false
        ,

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1981-1989<br>
    <strong>Desplaçament:</strong> 1.1L - 1.4L<br>
    <strong>Potència:</strong> 48 - 105 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Berlina 4 portes
    `,

        variants: [
            {
                engine: "1.1L (C1E)",
                power: "48 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió base econòmica"
            },
            {
                engine: "1.4L (C2J)",
                power: "60 - 72 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió més comuna (GTL / TS)"
            },
            {
                engine: "1.4L Turbo",
                power: "105 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R9 Turbo (versió esportiva)"
            }
        ],

        accessories: [],
        videos: []
    }
);