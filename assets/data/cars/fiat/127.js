window.carData = window.carData || [];

window.carData.push(
    {
        id: 132,
        brand: "Fiat",
        model: "127",
        years: "1971-1983",
        description: "Utilitari de tracció davantera, Cotxe de l'Any a Europa 1972. A Espanya SEAT el va fabricar com a SEAT 127 i en va derivar el Fura.",
        image: "images/cars/fiat/127-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1971-1983 (Itàlia)<br>
        <strong>Desplaçament:</strong> 0.9L - 1.3L<br>
        <strong>Potència:</strong> 45 - 75 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 2/3 portes<br>
        <strong>Unitats fabricades:</strong> Uns 3,7 milions (aprox.)
    `,

        variants: [
            {
                engine: "0.9L (903 cc) R4",
                power: "45 - 47 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió original"
            },
            {
                engine: "1.05L (1049 cc) R4 SOHC",
                power: "50 - 70 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "127 Sport (70 CV)"
            }
        ],

        accessories: [],

        videos: []
    }
);
