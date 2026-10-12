window.carData = window.carData || [];

window.carData.push(
    {
        id: 121,
        brand: "Volkswagen",
        model: "Golf Mk1 (incl. GTI)",
        years: "1974-1983",
        description: "El compacte de tracció davantera dissenyat per Giugiaro que va substituir l'Escarabat. El GTI (1976) va popularitzar el concepte de \"hot hatch\".",
        image: "images/cars/volkswagen/golf-mk1-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1974-1983 (berlina; Cabriolet fins 1993)<br>
        <strong>Desplaçament:</strong> 1.1L - 1.8L (dièsel 1.5L - 1.6L)<br>
        <strong>Potència:</strong> 50 - 112 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 3/5 portes / Cabriolet / Caddy<br>
        <strong>Unitats fabricades:</strong> Uns 6,8 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.1L - 1.5L R4",
                power: "50 - 85 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions de sèrie"
            },
            {
                engine: "1.6L R4 injecció K-Jetronic",
                power: "110 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTI (1976-1982)"
            },
            {
                engine: "1.8L R4",
                power: "112 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTI (1982-1983)"
            },
            {
                engine: "1.5L / 1.6L dièsel R4",
                power: "50 - 54 CV",
                fuel: "Dièsel",
                traction: "Davantera",
                notes: "Golf D (1976)"
            }
        ],

        accessories: [
            {
                name: "Pomell en forma de pilota de golf",
                description: "Detall característic de l'interior del GTI.",
                extra: ""
            }
        ],

        videos: []
    }
);
