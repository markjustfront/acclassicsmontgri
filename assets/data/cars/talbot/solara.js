window.carData = window.carData || [];

window.carData.push(
    {
        id: 103,
        brand: "Talbot",
        model: "Solara",
        years: "1980-1986",
        description: "Versió berlina de tres volums del Talbot 150, pensada per substituir el Chrysler 180. Es va fabricar a Poissy, a Ryton (Regne Unit) i a Villaverde (Madrid), on va continuar fins 1986.",
        image: "images/cars/talbot/solara-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1980-1986<br>
        <strong>Desplaçament:</strong> 1.3L - 1.6L<br>
        <strong>Potència:</strong> 68 - 90 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> Uns 185.000
    `,

        variants: [
            {
                engine: "1.3L (1294 cc) R4",
                power: "68 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "LS"
            },
            {
                engine: "1.4L (1442 cc) R4",
                power: "85 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GL / GLS"
            },
            {
                engine: "1.6L (1592 cc) R4",
                power: "88 - 90 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "SX (manual de 5 o automàtic)"
            }
        ],

        accessories: [],

        videos: []
    }
);
