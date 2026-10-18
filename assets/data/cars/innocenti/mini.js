window.carData = window.carData || [];

window.carData.push(
    {
        id: 167,
        brand: "Innocenti",
        model: "Mini Minor / Mini Cooper",
        years: "1965-1975",
        description: "El Mini fabricat sota llicència a Lambrate (Milà), amb un acabat més cuidat que el britànic i més equipament. El Mini Cooper 1300 italià és molt buscat.",
        image: "images/cars/innocenti/mini-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1965-1975<br>
        <strong>Desplaçament:</strong> 0.85L - 1.3L<br>
        <strong>Potència:</strong> 34 - 71 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 2 portes / Familiar (Mini T)<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada
    `,

        variants: [
            {
                engine: "0.85L (848 cc) R4 Serie A",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Mini Minor 850 i Mini T"
            },
            {
                engine: "1.0L (998 cc) R4 Serie A",
                power: "aprox. 55 - 60 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Mini Cooper 1000 (xifra aproximada)"
            },
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "71 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Mini Cooper 1300 (1972-1975)"
            }
        ],

        accessories: [],

        videos: []
    }
);
