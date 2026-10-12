window.carData = window.carData || [];

window.carData.push(
    {
        id: 84,
        brand: "Mercedes-Benz",
        model: "SL / SLC (R107 / C107)",
        years: "1971-1989",
        description: "Un dels Mercedes de producció més llarga: gairebé divuit anys. El roadster SL (R107) i el coupé de quatre places SLC (C107) van compartir motors de sis i vuit cilindres, des del 280 SL fins al 560 SL per a Amèrica del Nord.",
        image: "images/cars/mercedes/r107-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1971-1989 (SLC fins al 1981)<br>
        <strong>Desplaçament:</strong> 2.7L - 5.5L<br>
        <strong>Potència:</strong> 177 - 245 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster (SL) / Coupé 4 places (SLC)
    `,

        variants: [
            {
                engine: "2.7L (2746 cc) M110 R6",
                power: "177 - 185 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "280 SL / 280 SLC"
            },
            {
                engine: "3.0L (2962 cc) M103 R6",
                power: "180 - 188 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "300 SL (1985-1989); 180 CV amb catalitzador"
            },
            {
                engine: "3.5L / 3.8L V8",
                power: "195 - 218 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "350 SL/SLC (195-200 CV) i 380 SL/SLC (204-218 CV)"
            },
            {
                engine: "4.2L (4196 cc) V8",
                power: "204 - 218 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "420 SL (1985-1989)"
            },
            {
                engine: "4.5L (4520 cc) M117 V8",
                power: "217 - 225 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "450 SL / 450 SLC"
            },
            {
                engine: "5.0L V8",
                power: "223 - 245 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "450 SLC 5.0, 500 SLC i 500 SL"
            },
            {
                engine: "5.5L (5547 cc) V8",
                power: "230 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "560 SL, només exportació (Amèrica del Nord, Japó, Austràlia)"
            }
        ],

        accessories: [
            {
                name: "Hardtop",
                description: "Sostre rígid desmuntable de sèrie al roadster.",
                extra: "Sovint es guarda penjat al garatge."
            }
        ],

        videos: []
    }
);
