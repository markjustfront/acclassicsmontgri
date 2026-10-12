window.carData = window.carData || [];

window.carData.push(
    {
        id: 99,
        brand: "Barreiros",
        model: "Dodge 3700 GT",
        years: "1971-1977",
        description: "Successor del Dart, fabricat per Chrysler España (l'antiga Barreiros) a Villaverde. Inspirat en el Dodge Polara argentí, combinava la mecànica Slant Six amb un estil més europeu. És recordat també pel Dodge 3700 de l'atemptat contra Carrero Blanco (1973). Se'n van fer 9.959 unitats.",
        image: "images/cars/barreiros/dodge-3700-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1971-1977<br>
        <strong>Desplaçament:</strong> 3.7L<br>
        <strong>Potència:</strong> 130 - 140 CV (segons norma)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> 9.959
    `,

        variants: [
            {
                engine: "3.7L (3687 cc) R6 \"Slant Six\"",
                power: "130 - 140 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "3700 GT i 3700 (canvi manual o automàtic)"
            },
            {
                engine: "Dièsel (versió taxi)",
                power: "aprox. 100 CV (dada incerta)",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Amb motor Perkins o Barreiros segons font"
            }
        ],

        accessories: [
            {
                name: "Canvi automàtic TorqueFlite",
                description: "Opció d'origen americà poc comuna a l'Espanya de l'època.",
                extra: ""
            }
        ],

        videos: []
    }
);
