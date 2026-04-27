window.carData = window.carData || [];
window.carData.push(
    {
        id: 61,
        brand: "Citroën",
        model: "SM",
        years: "1970-1975",
        description: "Gran tourer de luxe amb motor Maserati V6. Suspensió hidroneumàtica, direcció assistida variable i disseny espectacular.",
        image: "images/cars/citroen/sm-main.jpg",
        destacat: true,
        generalCharacteristics: `Període de producció: 1970-1975
Desplaçament: 2.7L V6 (Maserati)
Potència: 170 CV
Tracció: Davantera
Carrosseries: Coupé 2 portes`,
        variants: [
            {
                engine: "2.7L V6",
                power: "170 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió única"
            }
        ],
        accessories: [
            {
                name: "Interior de cuir",
                description: "Acabats de luxe premium.",
                images: ["images/accessories/citroen/sm/seients.jpg"],
                extra: "Gran confort i elegància."
            }
        ],
        videos: []
    }
);