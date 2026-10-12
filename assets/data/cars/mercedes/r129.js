window.carData = window.carData || [];

window.carData.push(
    {
        id: 91,
        brand: "Mercedes-Benz",
        model: "SL (R129)",
        years: "1989-2001",
        description: "Roadster tecnològicament avançat, amb arc antibolcada automàtic que s'aixeca en cas de bolcada i capota elèctrica. Va tenir motors de sis, vuit i dotze cilindres, inclosos el 600 SL V12 i les versions AMG.",
        image: "images/cars/mercedes/r129-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1989-2001<br>
        <strong>Desplaçament:</strong> 2.8L - 6.0L (AMG fins a 7.3L)<br>
        <strong>Potència:</strong> 190 - 394 CV (sèrie)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Roadster amb hardtop
    `,

        variants: [
            {
                engine: "2.8L - 3.2L R6 / V6",
                power: "190 - 231 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "300 SL, 300 SL-24, SL 280 i SL 320"
            },
            {
                engine: "5.0L V8",
                power: "306 - 326 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "500 SL / SL 500"
            },
            {
                engine: "6.0L (5956 cc) V8",
                power: "381 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "SL 60 AMG"
            },
            {
                engine: "6.0L M120 V12",
                power: "394 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "600 SL / SL 600"
            },
            {
                engine: "5.4L (5439 cc) V8",
                power: "354 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "SL 55 AMG (1999-2001)"
            }
        ],

        accessories: [
            {
                name: "Arc antibolcada automàtic",
                description: "Arc de seguretat que es desplega en mil·lisegons si detecta una bolcada.",
                extra: "Primícia mundial el 1989."
            }
        ],

        videos: []
    }
);
