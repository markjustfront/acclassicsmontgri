window.carData = window.carData || [];

window.carData.push(
    {
        id: 97,
        brand: "Simca",
        model: "1307 / 1308 (Chrysler 150 / Talbot 150)",
        years: "1975-1986",
        description: "Berlina mitjana de cinc portes i tracció davantera, Cotxe de l'Any a Europa 1976. Al Regne Unit es venia com a Chrysler Alpine i, a Espanya, Chrysler España (Villaverde) la va fabricar com a Chrysler 150 i, després, Talbot 150.",
        image: "images/cars/simca/1307-1308-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1975-1986 (segons mercat)<br>
        <strong>Desplaçament:</strong> 1.3L - 1.6L<br>
        <strong>Potència:</strong> 68 - 88 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 5 portes<br>
        <strong>Unitats fabricades:</strong> Uns 1,3 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.3L (1294 cc) R4",
                power: "68 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "1307 / 150 GL"
            },
            {
                engine: "1.4L (1442 cc) R4",
                power: "85 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "1308 / 150 GT"
            },
            {
                engine: "1.6L (1592 cc) R4",
                power: "88 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "1309 / 150 SX (finals dels 70)"
            }
        ],

        accessories: [
            {
                name: "Cotxe de l'Any 1976",
                description: "Primer Simca a guanyar el premi europeu.",
                extra: ""
            }
        ],

        videos: []
    }
);
