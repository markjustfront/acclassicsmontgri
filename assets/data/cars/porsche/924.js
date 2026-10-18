window.carData = window.carData || [];

window.carData.push(
    {
        id: 154,
        brand: "Porsche",
        model: "924",
        years: "1976-1988",
        description: "El primer Porsche de motor davanter i refrigerat per aigua, amb el canvi a l'eix posterior (transaxle). Va néixer com a projecte per a Volkswagen i va ser un gran èxit de vendes.",
        image: "images/cars/porsche/924-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1976-1988<br>
        <strong>Desplaçament:</strong> 2.0L - 2.5L<br>
        <strong>Potència:</strong> 125 - 210 CV<br>
        <strong>Tracció:</strong> Posterior (transaxle)<br>
        <strong>Carrosseries:</strong> Coupé 2+2 (portó posterior)<br>
        <strong>Unitats fabricades:</strong> Més de 150.000
    `,

        variants: [
            {
                engine: "2.0L R4 (Audi)",
                power: "125 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "924 (1976-1985)"
            },
            {
                engine: "2.0L R4 turbo",
                power: "170 - 210 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "924 Turbo i Carrera GT"
            },
            {
                engine: "2.5L R4",
                power: "150 - 160 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "924 S (1986-1988)"
            }
        ],

        accessories: [],

        videos: []
    }
);
