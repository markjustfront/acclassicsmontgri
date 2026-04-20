window.carData = window.carData || [];

window.carData.push(
    {
        id: 45,
        brand: "SEAT",
        model: "127",
        years: "1972-1982",
        description: "El SEAT 127 és el primer cotxe de tracció davantera de SEAT. Un supermini modern, pràctic i econòmic que va revolucionar la mobilitat urbana als anys 70.",
        image: "images/cars/127-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1972-1982<br>
        <strong>Desplaçament:</strong> 0.9L - 1.0L<br>
        <strong>Potència:</strong> 43 - 52 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 2/3/5 portes
    `,

        variants: [
            {
                engine: "0.9L (903 cc)",
                power: "43 - 47 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió base"
            },
            {
                engine: "1.0L (1010 cc)",
                power: "52 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió Especial"
            }
        ],

        accessories: [
            {
                name: "Porta posterior (hatchback)",
                description: "Accés fàcil al maleter.",
                images: ["images/accessories/127/hatch.jpg"],
                extra: "Innovació important en l'època."
            },
            {
                name: "Cinturons de seguretat",
                description: "Primers amb cinturons de 3 punts.",
                images: ["images/accessories/127/cinturons.jpg"],
                extra: "Avanç en seguretat."
            }
        ],

        videos: []
    }
);