window.carData = window.carData || [];

window.carData.push(
    {
        id: 109,
        brand: "Authi",
        model: "Austin Victoria",
        years: "1972-1975",
        description: "Berlina exclusiva d'Authi basada en l'Austin 1100/1300, amb el morro i la part posterior redissenyats per Giovanni Michelotti a l'estil del Triumph 2000. Se'n van fabricar 24.682 a Pamplona; a Sud-àfrica es venia com a Austin Apache.",
        image: "images/cars/authi/victoria-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1972-1975<br>
        <strong>Desplaçament:</strong> 1.3L<br>
        <strong>Potència:</strong> 62 CV (SAE)<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> 24.682
    `,

        variants: [
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "62 CV SAE",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Victoria Normal i De Luxe; velocitat màxima 135 km/h"
            }
        ],

        accessories: [],

        videos: []
    }
);
