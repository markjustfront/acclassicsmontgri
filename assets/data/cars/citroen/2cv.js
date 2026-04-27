window.carData = window.carData || [];
window.carData.push(
    {
        id: 55,
        brand: "Citroën",
        model: "2CV",
        years: "1948-1990",
        description: "El Citroën 2CV és un dels cotxes més icònics i longeus de la història. Simplicitat extrema, suspensió suau i versatilitat increïble. Símbol de la França rural i popular.",
        image: "images/cars/citroen/2cv-main.jpg",
        destacat: true,
        generalCharacteristics: `Període de producció: 1948-1990
Desplaçament: 375 - 602 cc (2 cilindres plans refrigerats per aire)
Potència: 9 - 29 CV
Tracció: Davantera
Carrosseries: Berlina 4 portes / Furgoneta / Pickup / 4x4 Sahara`,
        variants: [
            {
                engine: "0.375L (375 cc)",
                power: "9 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions inicials"
            },
            {
                engine: "0.425L (425 cc)",
                power: "12 - 18 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Més comú"
            },
            {
                engine: "0.602L (602 cc)",
                power: "29 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions finals"
            }
        ],
        accessories: [
            {
                name: "Portaequipatges sostre",
                description: "Estructura metàl·lica per càrrega extra.",
                images: ["images/accessories/citroen/2cv/roofrack.jpg"],
                extra: "Molt icònic en ús rural."
            },
            {
                name: "Seients abatibles",
                description: "Permeten convertir l'interior en llit.",
                images: ["images/accessories/citroen/2cv/seients.jpg"],
                extra: "Versatilitat màxima."
            }
        ],
        videos: []
    }
);