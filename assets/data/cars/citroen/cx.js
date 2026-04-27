window.carData = window.carData || [];
window.carData.push(
    {
        id: 59,
        brand: "Citroën",
        model: "CX",
        years: "1974-1991",
        description: "Successora de la DS: disseny aerodinàmic, suspensió hidroneumàtica i luxe francès. Cotxe de l'Any 1975.",
        image: "images/cars/citroen/cx-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1974-1991
Desplaçament: 1.8L - 2.5L
Potència: 80 - 138 CV
Tracció: Davantera
Carrosseries: Berlina / Familiar (Break)`,
        variants: [
            {
                engine: "2.0L - 2.5L",
                power: "80 - 138 CV",
                fuel: "Gasolina / Dièsel",
                traction: "Davantera",
                notes: "Versions gasolina i dièsel"
            }
        ],
        accessories: [
            {
                name: "Suspensión hidroneumàtica",
                description: "Sistema icònic per viatges suaus.",
                images: ["images/accessories/citroen/cx/hidroneumatica.jpg"],
                extra: "Confort de luxe."
            }
        ],
        videos: []
    }
);