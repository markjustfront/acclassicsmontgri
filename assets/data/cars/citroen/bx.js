window.carData = window.carData || [];
window.carData.push(
    {
        id: 60,
        brand: "Citroën",
        model: "BX",
        years: "1982-1994",
        description: "Pràctica i innovadora dels 80: suspensió hidroneumàtica opcional, disseny angular i gran versatilitat. Èxit comercial.",
        image: "images/cars/citroen/bx-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1982-1994
Desplaçament: 1.1L - 1.9L
Potència: 60 - 125 CV
Tracció: Davantera
Carrosseries: Berlina / Familiar (Break)`,
        variants: [
            {
                engine: "1.4L - 1.9L",
                power: "60 - 125 CV",
                fuel: "Gasolina / Dièsel",
                traction: "Davantera",
                notes: "Versions estàndard i GT"
            }
        ],
        accessories: [
            {
                name: "Suspensión hidroneumàtica",
                description: "Opcional en moltes versions.",
                images: ["images/accessories/citroen/bx/hidroneumatica.jpg"],
                extra: "Confort Citroën."
            }
        ],
        videos: []
    }
);