window.carData = window.carData || [];

window.carData.push(
    {
        id: 1,
        brand: "Renault",
        model: "4 (R4)",
        years: "1961-1992",
        description: "El Renault 4 és un dels cotxes més versàtils i icònics de Renault. Simple, robust i extremadament pràctic.",
        image: "images/R4-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1961-1992<br>
        <strong>Desplaçament:</strong> 0.6L - 1.1L<br>
        <strong>Potència:</strong> 23 - 34 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 5 portes / Furgoneta (F4/F6)
    `,

        variants: [
            {
                engine: "0.6L (603 cc)",
                power: "23 - 26 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Primeres versions (R4, R3)"
            },

            {
                engine: "0.7L (747 cc)",
                power: "27 - 32 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R4L inicial"
            },

            {
                engine: "0.8L (782 cc)",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R4L / TL"
            },

            {
                engine: "0.85L (845 cc)",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TL / GTL (molt comú)"
            },

            {
                engine: "1.1L (1108 cc)",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTL, més parell i eficiència"
            }
        ],

        accessories: [
            {
                name: "Portaequipatges sostre",
                description: "Estructura metàl·lica per transportar càrrega o equipatge.",
                images: ["images/accessories/R4/roofrack.jpg"],
                extra: "Molt icònic en el Renault 4, especialment en ús rural."
            },
            {
                name: "Seients reclinables (TL/GTL)",
                description: "Permeten convertir l'interior en una superfície plana.",
                images: ["images/accessories/R4/seients.jpg"],
                extra: "Un dels punts forts del R4: versatilitat màxima."
            },
            {
                name: "Tapisseria específica GTL",
                description: "Materials més cuidats en versions superiors.",
                images: ["images/accessories/R4/tapisseria.jpg"],
                extra: "Diferenciador interior respecte versions bàsiques."
            },
            {
                name: "Proteccions laterals (GTL Clan/Savane)",
                description: "Motllures laterals de plàstic.",
                images: ["images/accessories/R4/motllures.jpg"],
                extra: "Característiques de les últimes versions."
            }
        ],

        videos: []
    }
);