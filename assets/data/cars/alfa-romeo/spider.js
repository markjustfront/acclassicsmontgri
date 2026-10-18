window.carData = window.carData || [];

window.carData.push(
    {
        id: 157,
        brand: "Alfa Romeo",
        model: "Spider (Duetto)",
        years: "1966-1993",
        description: "Descapotable de Pininfarina, famós per la pel·lícula El graduat (1967). La primera sèrie, de cua rodona, es coneix com a Duetto; la línia bàsica es va mantenir quasi 27 anys.",
        image: "images/cars/alfa-romeo/spider-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1966-1993 (Duetto 1966-1969)<br>
        <strong>Desplaçament:</strong> 1.3L - 2.0L<br>
        <strong>Potència:</strong> 89 - 131 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Spider 2 places<br>
        <strong>Unitats fabricades:</strong> 124.104 (totes les sèries)
    `,

        variants: [
            {
                engine: "1.6L (1570 cc) R4 Twin Cam",
                power: "109 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Duetto original (1966-1967)"
            },
            {
                engine: "1.3L (1290 cc) R4 Twin Cam",
                power: "89 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Spider 1300 Junior"
            },
            {
                engine: "1.8L - 2.0L R4 Twin Cam",
                power: "113 - 131 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "1750 i 2000 Spider Veloce"
            }
        ],

        accessories: [],

        videos: []
    }
);
