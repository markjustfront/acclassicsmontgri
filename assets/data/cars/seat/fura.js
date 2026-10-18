window.carData = window.carData || [];

window.carData.push(
    {
        id: 185,
        brand: "SEAT",
        model: "Fura / Fura Dos",
        years: "1981-1986",
        description: "Evolució del SEAT 127: el Fura del 1981 era el 127 de tercera sèrie, i el Fura Dos (1983) tenia un frontal i una part posterior noves fetes per SEAT. La versió esportiva Crono tenia el motor 1.4 de 75 CV.",
        image: "images/cars/seat/fura-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1981-1986<br>
        <strong>Desplaçament:</strong> 0.9L - 1.4L<br>
        <strong>Potència:</strong> 45 - 75 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 3/5 portes<br>
        <strong>Unitats fabricades:</strong> 84.973 del primer Fura (aprox.; el Fura Dos a part)
    `,

        variants: [
            {
                engine: "0.9L (903 cc) R4",
                power: "aprox. 45 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Fura L/CL i Fura Dos L/GL"
            },
            {
                engine: "1.4L R4",
                power: "75 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Fura Crono"
            }
        ],

        accessories: [],

        videos: []
    }
);
