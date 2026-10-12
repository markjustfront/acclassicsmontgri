window.carData = window.carData || [];

window.carData.push(
    {
        id: 85,
        brand: "Mercedes-Benz",
        model: "Classe S (W116)",
        years: "1972-1980",
        description: "El primer model batejat oficialment com a Classe S. Va introduir l'ABS com a opció el 1978 i va incloure el 450 SEL 6.9, amb un V8 de 6,9 litres, i el 300 SD turbodièsel per als EUA.",
        image: "images/cars/mercedes/w116-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1972-1980<br>
        <strong>Desplaçament:</strong> 2.7L - 6.9L<br>
        <strong>Potència:</strong> 111 - 286 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes (normal i llarga SEL)
    `,

        variants: [
            {
                engine: "3.0L 5 cil. turbodièsel",
                power: "111 - 121 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "300 SD, només exportació (1978-1980)"
            },
            {
                engine: "2.7L (2746 cc) M110 R6",
                power: "156 - 185 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "280 S (carburador) i 280 SE/SEL (injecció)"
            },
            {
                engine: "3.5L (3499 cc) V8",
                power: "195 - 205 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "350 SE / 350 SEL"
            },
            {
                engine: "4.5L (4520 cc) V8",
                power: "217 - 225 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "450 SE / 450 SEL"
            },
            {
                engine: "6.9L M100 V8",
                power: "286 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "450 SEL 6.9 (1975-1980)"
            }
        ],

        accessories: [
            {
                name: "ABS (opcional des de 1978)",
                description: "Sistema antibloqueig de frens desenvolupat amb Bosch.",
                extra: "Un dels primers cotxes de sèrie a oferir-lo."
            }
        ],

        videos: []
    }
);
