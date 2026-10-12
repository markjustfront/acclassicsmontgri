window.carData = window.carData || [];

window.carData.push(
    {
        id: 100,
        brand: "Barreiros",
        model: "Chrysler 180 / 2 Litros",
        years: "1970-1982",
        description: "Berlina gran desenvolupada per Rootes i Simca. Es va fabricar a França fins 1975 i després a la planta de Villaverde (antiga Barreiros), on es va mantenir com a Chrysler 2 Litros i, més tard, com a Talbot amb motor dièsel fins 1982.",
        image: "images/cars/barreiros/chrysler-180-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1970-1982 (Espanya des de 1973, aprox.)<br>
        <strong>Desplaçament:</strong> 1.6L - 2.0L (dièsel 2.0L)<br>
        <strong>Potència:</strong> aprox. 65 - 110 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> Uns 290.000 (aprox., totes les versions)
    `,

        variants: [
            {
                engine: "1.8L (1812 cc) R4",
                power: "97 - 100 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Chrysler 180"
            },
            {
                engine: "2.0L (1981 cc) R4",
                power: "110 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Chrysler 2 Litros (habitualment automàtic)"
            },
            {
                engine: "2.0L dièsel Barreiros",
                power: "aprox. 65 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Talbot/Chrysler Diesel (Espanya)"
            }
        ],

        accessories: [],

        videos: []
    }
);
