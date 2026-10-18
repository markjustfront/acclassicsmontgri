window.carData = window.carData || [];

window.carData.push(
    {
        id: 186,
        brand: "SEAT",
        model: "Ritmo / Ronda",
        years: "1979-1986",
        description: "El compacte fabricat a Barcelona basat en el Fiat Ritmo. El 1982 es va reestilitzar com a SEAT Ronda i Fiat va portar el cas a un tribunal d'arbitratge de París, que va donar la raó a SEAT.",
        image: "images/cars/seat/ritmo-ronda-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1979-1986 (Ritmo 1979-1982, Ronda 1982-1986)<br>
        <strong>Desplaçament:</strong> 1.2L - 2.0L (i dièsel 1.7L)<br>
        <strong>Potència:</strong> 55 - 118 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 3/5 portes<br>
        <strong>Unitats fabricades:</strong> 296.188 (118.450 Ritmo i 177.738 Ronda)
    `,

        variants: [
            {
                engine: "1.2L - 1.5L R4",
                power: "63 - 85 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Ritmo/Ronda 65 i 75, Ronda 1.5 \"System Porsche\""
            },
            {
                engine: "1.6L - 2.0L R4 doble arbre",
                power: "95 - 118 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Ritmo Crono i Ronda 2.0 (molt escàs)"
            },
            {
                engine: "1.7L (1714 cc) R4",
                power: "55 CV",
                fuel: "Dièsel",
                traction: "Davantera",
                notes: "Ritmo D i Ronda Diesel"
            }
        ],

        accessories: [],

        videos: []
    }
);
