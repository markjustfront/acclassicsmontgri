window.carData = window.carData || [];

window.carData.push(
    {
        id: 77,
        brand: "BMW",
        model: "Z1",
        years: "1989-1991",
        description: "Un roadster experimental de BMW Technik amb portes que baixen dins els llindars, panells de carrosseria de plàstic intercanviables i xassís galvanitzat. Muntava el sis cilindres del 325i i se'n van fabricar unes 8.000 unitats.",
        image: "images/cars/bmw/z1-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1989-1991<br>
        <strong>Desplaçament:</strong> 2.5L<br>
        <strong>Potència:</strong> 170 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster 2 places
    `,

        variants: [
            {
                engine: "2.5L (2494 cc) M20 6 cilindres",
                power: "170 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mateix motor que el 325i E30"
            }
        ],

        accessories: [
            {
                name: "Portes retràctils",
                description: "Les portes baixen verticalment dins els llindars i es pot circular amb elles obertes.",
                extra: "El tret més famós del Z1."
            },
            {
                name: "Panells de plàstic desmuntables",
                description: "La carrosseria es pot canviar de color substituint els panells.",
                extra: "Concepte únic a l'època."
            }
        ],

        videos: []
    }
);
