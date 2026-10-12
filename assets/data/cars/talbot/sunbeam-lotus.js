window.carData = window.carData || [];

window.carData.push(
    {
        id: 101,
        brand: "Talbot",
        model: "Sunbeam Lotus",
        years: "1979-1981",
        description: "Versió de ral·li del petit Sunbeam, amb motor Lotus de 16 vàlvules. Va donar a Talbot el Campionat del Món de Ral·lis de marques el 1981. Una icona dels ral·lis britànics.",
        image: "images/cars/talbot/sunbeam-lotus-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1979-1981<br>
        <strong>Desplaçament:</strong> 2.2L<br>
        <strong>Potència:</strong> 150 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Hatchback 3 portes<br>
        <strong>Unitats fabricades:</strong> Unes 2.300 (aprox.)
    `,

        variants: [
            {
                engine: "2.2L (2174 cc) Lotus 911 R4 16V",
                power: "150 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Dos carburadors dobles Dell'Orto; caixa ZF de 5 velocitats"
            }
        ],

        accessories: [
            {
                name: "Títol mundial 1981",
                description: "Talbot va guanyar el campionat de constructors del WRC el 1981.",
                extra: ""
            }
        ],

        videos: []
    }
);
