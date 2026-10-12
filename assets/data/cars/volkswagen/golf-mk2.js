window.carData = window.carData || [];

window.carData.push(
    {
        id: 123,
        brand: "Volkswagen",
        model: "Golf Mk2",
        years: "1983-1992",
        description: "Segona generació, més gran i sòlida. El GTI 16V i el Rallye (sobrealimentat i 4x4) en són les versions més buscades.",
        image: "images/cars/volkswagen/golf-mk2-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1983-1992<br>
        <strong>Desplaçament:</strong> 1.3L - 1.8L (dièsel 1.6L)<br>
        <strong>Potència:</strong> 54 - 160 CV<br>
        <strong>Tracció:</strong> Davantera / Integral (Syncro)<br>
        <strong>Carrosseries:</strong> Hatchback 3/5 portes<br>
        <strong>Unitats fabricades:</strong> Uns 6,3 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.3L - 1.6L R4",
                power: "54 - 75 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions de sèrie"
            },
            {
                engine: "1.8L R4",
                power: "112 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTI 8V"
            },
            {
                engine: "1.8L R4 16V",
                power: "129 - 139 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTI 16V"
            },
            {
                engine: "1.8L G60 compressor",
                power: "160 CV",
                fuel: "Gasolina",
                traction: "Integral (4x4)",
                notes: "Rallye i G60"
            }
        ],

        accessories: [],

        videos: []
    }
);
