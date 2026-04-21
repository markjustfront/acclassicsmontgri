window.carData = window.carData || [];
window.carData.push(
    {
        id: 56,
        brand: "Citroën",
        model: "Traction Avant",
        years: "1934-1957",
        description: "La primera berlina de tracció davantera en producció massiva del món. Innovadora amb xassís monobloc i suspensió independent. Icona d'avantguarda.",
        image: "images/cars/citroen/traction-avant-main.jpg",
        destacat: false,
        generalCharacteristics: `Període de producció: 1934-1957
Desplaçament: 1.303 - 2.867 cc
Potència: 32 - 77 CV
Tracció: Davantera
Carrosseries: Berlina 4 portes / Familiar / Descapotable`,
        variants: [
            {
                engine: "1.3L (1303 cc)",
                power: "32 - 35 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions inicials 7CV"
            },
            {
                engine: "1.9L (1911 cc)",
                power: "46 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "11CV (la més comuna)"
            },
            {
                engine: "2.9L (2867 cc) 6 cilindres",
                power: "77 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "15/6 (Big Six)"
            }
        ],
        accessories: [
            {
                name: "Motllures cromades",
                description: "Elements decoratius originals.",
                images: ["images/accessories/citroen/traction-avant/motllures.jpg"],
                extra: "Estil Art Deco."
            }
        ],
        videos: []
    }
);