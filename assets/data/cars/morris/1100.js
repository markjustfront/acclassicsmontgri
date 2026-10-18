window.carData = window.carData || [];

window.carData.push(
    {
        id: 144,
        brand: "Morris",
        model: "1100 / 1300 (ADO16)",
        years: "1962-1974",
        description: "Berlina familiar d'Issigonis amb motor transversal, tracció davantera i suspensió Hydrolastic, i línia de Pininfarina. Es va vendre amb les marques Morris, Austin, MG, Riley, Wolseley i Vanden Plas i va ser el cotxe més venut del Regne Unit durant gran part dels anys 60. A Pamplona el va fabricar Authi.",
        image: "images/cars/morris/1100-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1962-1974<br>
        <strong>Desplaçament:</strong> 1.1L - 1.3L<br>
        <strong>Potència:</strong> 48 - 70 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Familiar (Traveller / Countryman)<br>
        <strong>Unitats fabricades:</strong> Més de 2 milions de tota la família ADO16 (aprox.)
    `,

        variants: [
            {
                engine: "1.1L (1098 cc) R4 Serie A",
                power: "48 - 55 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Morris / Austin 1100"
            },
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "58 - 70 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "1300 i 1300 GT (dos carburadors)"
            }
        ],

        accessories: [],

        videos: []
    }
);
