window.carData = window.carData || [];

window.carData.push(
    {
        id: 177,
        brand: "Datsun",
        model: "240Z",
        years: "1969-1973",
        description: "Esportiu de sis cilindres i preu raonable que va obrir el mercat americà als esportius japonesos. Al Japó es venia com a Nissan Fairlady Z. Va guanyar el Ral·li Safari el 1971 i el 1973.",
        image: "images/cars/datsun/240z-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1969-1973<br>
        <strong>Desplaçament:</strong> 2.4L<br>
        <strong>Potència:</strong> 151 CV (SAE)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 places<br>
        <strong>Unitats fabricades:</strong> Uns 150.000 (aprox.)
    `,

        variants: [
            {
                engine: "2.4L (2393 cc) R6 SOHC (L24)",
                power: "151 CV (SAE)",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "240Z d'exportació"
            },
            {
                engine: "2.0L R6 (L20 / S20)",
                power: "aprox. 130 - 160 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Fairlady Z i Z432 japonesos"
            }
        ],

        accessories: [],

        videos: []
    }
);
