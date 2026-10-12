window.carData = window.carData || [];

window.carData.push(
    {
        id: 110,
        brand: "Ford",
        model: "Mustang (1a generació)",
        years: "1964-1973",
        description: "El cotxe que va crear la categoria \"pony car\". Llançat l'abril de 1964, va vendre més d'un milió d'unitats en menys de dos anys. Molt present en concentracions de clàssics a Europa.",
        image: "images/cars/ford/mustang-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1964-1973<br>
        <strong>Desplaçament:</strong> 2.8L - 7.0L<br>
        <strong>Potència:</strong> 101 - 375 CV (bruts, SAE)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / Fastback / Convertible<br>
        <strong>Unitats fabricades:</strong> Més de 2,9 milions (1964-1973, aprox.)
    `,

        variants: [
            {
                engine: "2.8L - 3.3L R6",
                power: "101 - 120 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Motor de base"
            },
            {
                engine: "4.7L (289 ci) V8",
                power: "200 - 271 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió K-Code de 271 CV"
            },
            {
                engine: "7.0L (428 ci) V8 Cobra Jet",
                power: "335 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mach 1 (1969-1970)"
            }
        ],

        accessories: [
            {
                name: "Fastback 2+2",
                description: "Carrosseria fastback disponible des de 1965.",
                extra: ""
            }
        ],

        videos: []
    }
);
