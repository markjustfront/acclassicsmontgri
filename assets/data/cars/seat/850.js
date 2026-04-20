window.carData = window.carData || [];

window.carData.push(
    {
        id: 40,
        brand: "SEAT",
        model: "850",
        years: "1966-1974",
        description: "El SEAT 850 és un supermini compacte i versàtil basat en el Fiat 850. Va oferir versions berlina, coupé i Spider, sent molt popular als anys 60-70.",
        image: "images/cars/850-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1966-1974<br>
        <strong>Desplaçament:</strong> 0.8L - 0.9L<br>
        <strong>Potència:</strong> 37 - 52 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina / Coupé / Spider
    `,

        variants: [
            {
                engine: "0.8L (843 cc)",
                power: "37 - 47 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions estàndard"
            },
            {
                engine: "0.9L (903 cc)",
                power: "52 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions Sport / Especial"
            }
        ],

        accessories: [
            {
                name: "Coupé / Spider",
                description: "Versions esportives amb disseny més dinàmic.",
                images: ["images/accessories/850/coupe.jpg"],
                extra: "Les versions més apreciades pels joves."
            },
            {
                name: "Interior esportiu",
                description: "Seients i volant més esportius.",
                images: ["images/accessories/850/interior.jpg"],
                extra: "Disponible en versions Sport."
            }
        ],

        videos: []
    }
);