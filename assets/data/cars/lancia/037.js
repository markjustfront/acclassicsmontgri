window.carData = window.carData || [];

window.carData.push(
    {
        id: 139,
        brand: "Lancia",
        model: "Rally 037",
        years: "1982-1983",
        description: "Esportiu d'homologació de Grup B basat en el Montecarlo, amb motor de compressor volumètric. Últim cotxe de propulsió que va guanyar el Mundial de Ral·lis de marques (1983).",
        image: "images/cars/lancia/037-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1982-1983<br>
        <strong>Desplaçament:</strong> 2.0L<br>
        <strong>Potència:</strong> 205 CV (Stradale)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 places<br>
        <strong>Unitats fabricades:</strong> Unes 207 (homologació, aprox.)
    `,

        variants: [
            {
                engine: "2.0L (1995 cc) R4 DOHC 16V compressor",
                power: "205 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Stradale; versió de ral·li fins a uns 325 CV"
            }
        ],

        accessories: [],

        videos: []
    }
);
