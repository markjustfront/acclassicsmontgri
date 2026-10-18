window.carData = window.carData || [];

window.carData.push(
    {
        id: 180,
        brand: "Toyota",
        model: "Corolla Levin / Sprinter Trueno (AE86)",
        years: "1983-1987",
        description: "Les versions coupé i liftback de tracció posterior del Corolla E80, amb el motor 4A-GE de 16 vàlvules. És un mite del drift i del manga Initial D.",
        image: "images/cars/toyota/corolla-ae86-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1983-1987<br>
        <strong>Desplaçament:</strong> 1.5L - 1.6L<br>
        <strong>Potència:</strong> 83 - 130 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 portes / Liftback 3 portes<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada
    `,

        variants: [
            {
                engine: "1.6L (1587 cc) R4 DOHC 16v (4A-GE)",
                power: "112 - 130 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "AE86 GT, GT-S i GT Apex (segons mercat i norma)"
            },
            {
                engine: "1.5L R4 (3A-U)",
                power: "83 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "AE85 (versió econòmica)"
            }
        ],

        accessories: [],

        videos: []
    }
);
