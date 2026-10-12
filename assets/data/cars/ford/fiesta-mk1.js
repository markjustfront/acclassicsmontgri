window.carData = window.carData || [];

window.carData.push(
    {
        id: 115,
        brand: "Ford",
        model: "Fiesta (Mk1)",
        years: "1976-1983",
        description: "El primer utilitari de tracció davantera de Ford, fabricat a la nova planta d'Almussafes (València), inaugurada el 1976. Va ser clau per a la indústria espanyola i un èxit de vendes a tot Europa.",
        image: "images/cars/ford/fiesta-mk1-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1976-1983<br>
        <strong>Desplaçament:</strong> 0.95L - 1.6L<br>
        <strong>Potència:</strong> 40 - 84 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 3 portes / Furgoneta<br>
        <strong>Unitats fabricades:</strong> Prop de 2 milions (aprox.)
    `,

        variants: [
            {
                engine: "0.95L (957 cc) R4 \"Kent/Valencia\"",
                power: "40 - 45 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió de base"
            },
            {
                engine: "1.1L (1117 cc) R4",
                power: "53 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "L / Ghia"
            },
            {
                engine: "1.3L (1298 cc) R4",
                power: "66 - 70 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "S / Ghia"
            },
            {
                engine: "1.6L (1598 cc) R4",
                power: "84 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "XR2 (1981)"
            }
        ],

        accessories: [
            {
                name: "Fabricat a Almussafes",
                description: "Planta de Ford a València, que el 1976 va començar amb el Fiesta.",
                extra: ""
            }
        ],

        videos: []
    }
);
