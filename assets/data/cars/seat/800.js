window.carData = window.carData || [];

window.carData.push(
    {
        id: 181,
        brand: "SEAT",
        model: "800",
        years: "1964-1967",
        description: "Versió de quatre portes del SEAT 600, una creació espanyola: Carrocerías Costa, de Terrassa, allargava la carrosseria uns 18 cm per poder-hi posar portes posteriors. Se'n van fer poques unitats i en queden molt poques.",
        image: "images/cars/seat/800-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1964-1967<br>
        <strong>Desplaçament:</strong> 0.8L<br>
        <strong>Potència:</strong> 29 CV (SAE)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> 18.200
    `,

        variants: [
            {
                engine: "0.8L (767 cc) R4",
                power: "29 CV (SAE)",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mecànica del 600 D, motor posterior"
            }
        ],

        accessories: [],

        videos: []
    }
);
