window.carData = window.carData || [];

window.carData.push(
    {
        id: 79,
        brand: "Mercedes-Benz",
        model: "300 SL (W198) Gullwing / Roadster",
        years: "1954-1963",
        description: "L'esportiu llegendari derivat del cotxe de competició W194. El coupé (1954-1957) es va fer famós per les portes d'ala de gavina, i el Roadster (1957-1963) en va prendre el relleu. Va ser un dels primers cotxes de sèrie amb injecció directa de gasolina.",
        image: "images/cars/mercedes/300sl-w198-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1954-1963 (Coupé 1954-1957, Roadster 1957-1963)<br>
        <strong>Desplaçament:</strong> 3.0L<br>
        <strong>Potència:</strong> 215 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé (portes d'ala de gavina) / Roadster<br>
        <strong>Unitats fabricades:</strong> 1.400 coupés i 1.858 roadsters
    `,

        variants: [
            {
                engine: "3.0L (2996 cc) M198 R6",
                power: "215 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Injecció directa mecànica; Coupé i Roadster"
            }
        ],

        accessories: [
            {
                name: "Portes d'ala de gavina",
                description: "Les portes s'obren cap amunt perquè el xassís tubular té els laterals molt alts.",
                extra: "Exclusiu del coupé."
            },
            {
                name: "Hardtop per al Roadster",
                description: "Sostre rígid desmuntable ofert per al Roadster.",
                extra: "Permet fer-lo servir tot l'any."
            }
        ],

        videos: []
    }
);
