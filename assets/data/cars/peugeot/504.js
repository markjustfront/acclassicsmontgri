window.carData = window.carData || [];
window.carData.push(
    {
        id: 50,
        brand: "Peugeot",
        model: "504",
        years: "1968-1983",
        description: "Un autèntic llegendari Peugeot: còmode, robust i produït en milions. Excel·lent qualitat de marxa. Disponible en berlina, familiar i les elegants versions coupé/cabriolet Pininfarina.",
        image: "images/cars/peugeot/504-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1968-1983 (producció estesa en altres països)
Desplaçament: 1.8L - 2.7L (incl. dièsel i V6)
Potència: 80 - 144 CV
Tracció: Posterior
Carrosseries: Berlina 4 portes / Familiar (Break) / Coupé / Cabriolet`,
        variants: [
            {
                engine: "1.8L (1796 cc)",
                power: "80 - 98 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions base"
            },
            {
                engine: "2.0L (1971 cc)",
                power: "90 - 108 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Més comú"
            },
            {
                engine: "2.7L V6 (2660 cc)",
                power: "136 - 144 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Coupé de luxe"
            },
            {
                engine: "2.1L Dièsel",
                power: "60 - 80 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Versions dièsel indestructibles"
            }
        ],
        accessories: [
            {
                name: "Portaequipatges sostre",
                description: "Per les versions familiar.",
                images: ["images/accessories/peugeot/504/roofrack.jpg"],
                extra: "Molt pràctic i comú."
            },
            {
                name: "Seients reclinables",
                description: "Gran confort en viatges llargs.",
                images: ["images/accessories/peugeot/504/seients.jpg"],
                extra: "Signatura de la comoditat Peugeot."
            },
            {
                name: "Motllures cromades",
                description: "Acabats exteriors elegants.",
                images: ["images/accessories/peugeot/504/motllures.jpg"],
                extra: "Estil clàssic."
            }
        ],
        videos: []
    }
);