window.carData = window.carData || [];

window.carData.push(
    {
        id: 87,
        brand: "Mercedes-Benz",
        model: "Classe S (W126)",
        years: "1979-1991",
        description: "Classe S de línies aerodinàmiques i pes reduït, una de les més venudes de la història. Va estrenar el coixí de seguretat per al conductor (1981) i es va oferir com a berlina normal i llarga i com a coupé SEC.",
        image: "images/cars/mercedes/w126-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1979-1991<br>
        <strong>Desplaçament:</strong> 2.6L - 5.6L<br>
        <strong>Potència:</strong> 121 - 300 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina (normal i llarga) / Coupé SEC
    `,

        variants: [
            {
                engine: "3.0L / 3.5L turbodièsel",
                power: "121 - 136 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "300 SD, 300 SDL i 350 SD/SDL (exportació)"
            },
            {
                engine: "2.6L - 3.0L R6",
                power: "156 - 188 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "280 S/SE/SEL, 260 SE i 300 SE/SEL"
            },
            {
                engine: "3.8L / 4.2L V8",
                power: "204 - 218 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "380 SE/SEL/SEC i 420 SE/SEL/SEC"
            },
            {
                engine: "5.0L V8",
                power: "224 - 265 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "500 SE/SEL/SEC (segons any i catalitzador)"
            },
            {
                engine: "5.6L V8",
                power: "279 - 300 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "560 SE/SEL/SEC (des de 1985; segons catalitzador)"
            }
        ],

        accessories: [
            {
                name: "Coixí de seguretat (airbag)",
                description: "El 1981 es va oferir l'airbag del conductor com a opció.",
                extra: "Fita en seguretat passiva."
            }
        ],

        videos: []
    }
);
