window.carData = window.carData || [];

window.carData.push(
    {
        id: 124,
        brand: "Pegaso",
        model: "Z-102",
        years: "1951-1958",
        description: "Esportiu espanyol creat per ENASA i dissenyat per Wifredo Ricart a Barcelona. Motor V8 d'alumini amb doble arbre de lleves, carrosseries de Touring o Saoutchik i un rècord de velocitat de 244,62 km/h el 1953. Només se'n van fer 86 unitats.",
        image: "images/cars/pegaso/z102-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1951-1958<br>
        <strong>Desplaçament:</strong> 2.5L - 3.2L<br>
        <strong>Potència:</strong> aprox. 165 - 360 CV (segons versió i compressor)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlineta / Coupé / Cabriolet (carrossers diversos)<br>
        <strong>Unitats fabricades:</strong> 86
    `,

        variants: [
            {
                engine: "2.5L (2474 cc) V8 DOHC",
                power: "aprox. 165 - 175 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Primera versió"
            },
            {
                engine: "2.8L V8 DOHC",
                power: "aprox. 180 - 210 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: ""
            },
            {
                engine: "3.2L V8 DOHC (amb compressor opcional)",
                power: "aprox. 230 - 360 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Xifres variables segons font"
            }
        ],

        accessories: [
            {
                name: "Carrosseria Touring Superleggera",
                description: "Carrossers de Milà; també Saoutchik (París) i ENASA.",
                extra: ""
            }
        ],

        videos: []
    }
);
