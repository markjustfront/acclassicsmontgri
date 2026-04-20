window.carData = window.carData || [];

window.carData.push(
    {
        id: 39,
        brand: "SEAT",
        model: "600",
        years: "1957-1973",
        description: "El SEAT 600 és el cotxe més icònic de la història d'Espanya. El 'cotxe del poble' que va motoritzar el país durant el desenvolupament econòmic dels anys 60 i 70.",
        image: "images/cars/600-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1957-1973<br>
        <strong>Desplaçament:</strong> 0.6L - 0.8L<br>
        <strong>Potència:</strong> 21 - 32 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2 portes / Familiar
    `,

        variants: [
            {
                engine: "0.6L (633 cc)",
                power: "21.5 - 24.5 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions inicials (1957-1963)"
            },
            {
                engine: "0.8L (767 cc)",
                power: "29.5 - 32.5 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "600 D / E / L (1963-1973)"
            }
        ],

        accessories: [
            {
                name: "Portaequipatges sostre",
                description: "Estructura metàl·lica per transportar càrrega.",
                images: ["images/accessories/600/roofrack.jpg"],
                extra: "Molt comú en ús familiar i rural."
            },
            {
                name: "Seients reclinables",
                description: "Seients que permeten dormir dins el cotxe.",
                images: ["images/accessories/600/seients.jpg"],
                extra: "Icona de la versatilitat del 600."
            },
            {
                name: "Tapisseria especial",
                description: "Versions superiors amb interiors més cuidats.",
                images: ["images/accessories/600/tapisseria.jpg"],
                extra: "Diferenciador en models D i E."
            }
        ],

        videos: []
    }
);