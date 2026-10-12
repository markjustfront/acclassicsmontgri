window.carData = window.carData || [];

window.carData.push(
    {
        id: 118,
        brand: "Volkswagen",
        model: "Transporter T1",
        years: "1950-1967",
        description: "La primera furgoneta Volkswagen, amb el parabrisa partit (\"Splitty\"). Mecànica de l'Escarabat amb motor posterior i una gran varietat de carrosseries.",
        image: "images/cars/volkswagen/t1-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1950-1967 (Alemanya)<br>
        <strong>Desplaçament:</strong> 1.1L - 1.5L<br>
        <strong>Potència:</strong> 25 - 44 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Furgoneta / Microbús / Samba / Pick-up<br>
        <strong>Unitats fabricades:</strong> Uns 1,8 milions (aprox.)
    `,

        variants: [
            {
                engine: "1.1L - 1.2L boxer R4 aire",
                power: "25 - 34 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Primers anys"
            },
            {
                engine: "1.5L boxer R4 aire",
                power: "42 - 44 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Des de 1963"
            }
        ],

        accessories: [
            {
                name: "Samba de 23 finestres",
                description: "Versió de luxe amb claraboies i sostre de lona.",
                extra: "Una de les més buscades."
            }
        ],

        videos: []
    }
);
