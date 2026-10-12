window.carData = window.carData || [];

window.carData.push(
    {
        id: 98,
        brand: "Barreiros",
        model: "Dodge Dart",
        years: "1965-1971",
        description: "Berlina americana de luxe fabricada a Villaverde (Madrid) per Barreiros Diesel sota llicència de Chrysler. Va ser un dels cotxes més grans i exclusius de l'Espanya dels 60, molt utilitzat per autoritats i taxis de luxe; hi havia una versió amb motor dièsel Barreiros.",
        image: "images/cars/barreiros/dodge-dart-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1965-1971<br>
        <strong>Desplaçament:</strong> 3.7L (gasolina) / 3.6L (dièsel)<br>
        <strong>Potència:</strong> 65 - 145 CV (segons motor)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes / Familiar<br>
        <strong>Unitats fabricades:</strong> Uns 20.000 (aprox.; la xifra varia segons la font)
    `,

        variants: [
            {
                engine: "3.7L (3687 cc) R6 \"Slant Six\"",
                power: "130 - 145 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Dart, Dart GL i GT"
            },
            {
                engine: "Barreiros dièsel C-6 (aprox. 3.6L) R4",
                power: "65 CV (aprox.)",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Dart Diesel; dades segons font"
            }
        ],

        accessories: [
            {
                name: "Versió Familiar",
                description: "Ranxera de cinc portes, poc habitual avui.",
                extra: ""
            }
        ],

        videos: []
    }
);
