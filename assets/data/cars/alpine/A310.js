window.carData = window.carData || [];

window.carData.push(
    {
        id: 24,
        brand: "Renault Alpine",
        model: "A310",
        years: "1971 - 1985",
        description: "Successora espiritual de l'A110 amb disseny més modern i angular (wedge). Més còmoda i refinada, però manté l'esperit esportiu amb motor posterior. Va passar de 4 cilindres a V6 PRV.",
        image: "images/cars/alpine/A310-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1971 - 1985<br>
        <strong>Desplaçament:</strong> 1.605L - 2.849L<br>
        <strong>Potència:</strong> 95 - 150+ CV<br>
        <strong>Tracció:</strong> Tracció posterior (RWD)<br>
        <strong>Carrosseries:</strong> Berlinette 2+2
    `,

        variants: [
            {
                engine: "1.605 cc - 1.647 cc 4 cil. (R17 TS/Gordini)",
                power: "124 - 127 CV",
                fuel: "Gasolina",
                traction: "RWD",
                notes: "Versions inicials (1971-1976). Carburadors o injecció Bosch."
            },
            {
                engine: "2.664 cc PRV V6 (atmosfèric)",
                power: "150 CV (algunes ~162 CV amb carburadors)",
                fuel: "Gasolina",
                traction: "RWD",
                notes: "Versió V6 des de 1976. La més potent i buscada de l'A310."
            }
        ],

        accessories: [
            {
                name: "Disseny wedge angular",
                description: "Carrosseria de fibra amb línies marcades dels anys 70.",
                images: ["images/accessories/A310/body.jpg"],
                extra: "Millor aerodinàmica que l'A110."
            },
            {
                name: "Interior 2+2",
                description: "Seients posteriors limitats però més pràctic.",
                images: ["images/accessories/A310/interior.jpg"],
                extra: "Més refinat que models anteriors."
            }
        ],

        videos: []
    }
);