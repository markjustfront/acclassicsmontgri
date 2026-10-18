window.carData = window.carData || [];

window.carData.push(
    {
        id: 142,
        brand: "Austin",
        model: "A40 Farina",
        years: "1958-1967",
        description: "Utilitari de línies rectes dissenyat per Pinin Farina, el primer encàrrec de l'estudi italià per a BMC. La versió Countryman, amb el portó posterior partit, és considerada una de les precursores del cotxe de tres portes. Innocenti també el va fabricar a Itàlia.",
        image: "images/cars/austin/a40-farina-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1958-1967<br>
        <strong>Desplaçament:</strong> 0.95L - 1.1L<br>
        <strong>Potència:</strong> 34 - 48 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2 portes / Countryman (3 portes)<br>
        <strong>Unitats fabricades:</strong> 342.162
    `,

        variants: [
            {
                engine: "0.95L (948 cc) R4 Serie A",
                power: "34 - 37 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk I (1958-1961) i primers Mk II"
            },
            {
                engine: "1.1L (1098 cc) R4 Serie A",
                power: "48 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Mk II (1962-1967)"
            }
        ],

        accessories: [],

        videos: []
    }
);
