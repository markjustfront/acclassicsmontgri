window.carData = window.carData || [];

window.carData.push(
    {
        id: 90,
        brand: "Mercedes-Benz",
        model: "Classe G (W460 / W463)",
        years: "1979-actualitat",
        description: "Tot terreny desenvolupat amb Steyr-Daimler-Puch i fabricat a Graz. El W460 (1979-1992) era la versió més espartana, i el W463 (des de 1990) va afegir més confort i motors més potents, mantenint la carrosseria quadrada.",
        image: "images/cars/mercedes/g-w460-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> W460: 1979-1992; W463: des de 1990<br>
        <strong>Desplaçament:</strong> 2.3L - 6.0L<br>
        <strong>Potència:</strong> 72 - 331 CV (fins al 1998)<br>
        <strong>Tracció:</strong> Integral<br>
        <strong>Carrosseries:</strong> Curt / Llarg / Descapotable
    `,

        variants: [
            {
                engine: "2.4L - 3.0L diesel",
                power: "72 - 88 CV",
                fuel: "Dièsel",
                traction: "Integral",
                notes: "240 GD, 250 GD i 300 GD (W460)"
            },
            {
                engine: "2.3L / 2.8L",
                power: "90 - 156 CV",
                fuel: "Gasolina",
                traction: "Integral",
                notes: "230 G, 230 GE i 280 GE (W460)"
            },
            {
                engine: "2.9L R5 diesel",
                power: "95 - 120 CV",
                fuel: "Dièsel",
                traction: "Integral",
                notes: "290 GD i 290 GD Turbo"
            },
            {
                engine: "2.3L - 3.2L",
                power: "113 - 215 CV",
                fuel: "Gasolina",
                traction: "Integral",
                notes: "200 GE (exportació), 230 GE, 300 GE i G 320 (W463)"
            },
            {
                engine: "5.0L (4973 cc) V8",
                power: "241 CV",
                fuel: "Gasolina",
                traction: "Integral",
                notes: "500 GE, sèrie limitada (W463, 1993-1994)"
            }
        ],

        accessories: [
            {
                name: "Bloquejos de diferencial",
                description: "Tres bloquejos de diferencial (davanter, central i posterior).",
                extra: "Clau en la seva capacitat tot terreny."
            }
        ],

        videos: []
    }
);
