window.carData = window.carData || [];

window.carData.push(
    {
        id: 141,
        brand: "Austin",
        model: "A35",
        years: "1956-1968",
        description: "Petit utilitari de Longbridge, successor de l'A30, amb el motor Serie A de 948 cc. La berlina es va fer fins al 1959 i la furgoneta fins al 1968; avui és un clàssic de les curses de turismes històrics al Regne Unit.",
        image: "images/cars/austin/a35-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1956-1968 (berlina 1956-1959)<br>
        <strong>Desplaçament:</strong> 0.95L - 1.1L<br>
        <strong>Potència:</strong> 34 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2/4 portes / Familiar (Countryman) / Furgoneta / Pick-up<br>
        <strong>Unitats fabricades:</strong> 280.897
    `,

        variants: [
            {
                engine: "0.95L (948 cc) R4 Serie A",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Berlina, Countryman i furgoneta"
            },
            {
                engine: "1.1L (1098 cc) R4 Serie A",
                power: "aprox. 48 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Últimes furgonetes (fins al 1968)"
            }
        ],

        accessories: [],

        videos: []
    }
);
