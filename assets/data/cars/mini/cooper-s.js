window.carData = window.carData || [];

window.carData.push(
    {
        id: 146,
        brand: "Mini",
        model: "Cooper S",
        years: "1963-1971",
        description: "La versió preparada amb John Cooper, amb frens de disc i motors de fins a 1275 cc. Va guanyar el Ral·li de Montecarlo el 1964 (Paddy Hopkirk), el 1965 (Timo Mäkinen) i el 1967 (Rauno Aaltonen).",
        image: "images/cars/mini/cooper-s-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1963-1971<br>
        <strong>Desplaçament:</strong> 0.97L - 1.3L<br>
        <strong>Potència:</strong> 65 - 76 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 2 portes<br>
        <strong>Unitats fabricades:</strong> Unes 27.000 (aprox.)
    `,

        variants: [
            {
                engine: "0.97L (970 cc) R4 Serie A",
                power: "65 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Cooper S 970, per a la classe d'1 litre (1964-1965)"
            },
            {
                engine: "1.1L (1071 cc) R4 Serie A",
                power: "70 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Primer Cooper S (1963-1964)"
            },
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "76 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Cooper S 1275, Mk I a Mk III"
            }
        ],

        accessories: [],

        videos: []
    }
);
