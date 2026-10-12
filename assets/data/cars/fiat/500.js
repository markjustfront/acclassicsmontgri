window.carData = window.carData || [];

window.carData.push(
    {
        id: 126,
        brand: "Fiat",
        model: "500 (Nuova 500)",
        years: "1957-1975",
        description: "El petit utilitari de Dante Giacosa amb motor bicilíndric posterior refrigerat per aire. Un símbol de la Itàlia dels anys 60; se'n van fer prop de 4 milions.",
        image: "images/cars/fiat/500-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1957-1975<br>
        <strong>Desplaçament:</strong> 0.48L - 0.6L<br>
        <strong>Potència:</strong> 13 - 18 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 2 portes (sostre de lona) / Giardiniera<br>
        <strong>Unitats fabricades:</strong> Uns 3,9 milions (aprox.)
    `,

        variants: [
            {
                engine: "0.48L (479 cc) R2 aire",
                power: "13 - 15 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Primers anys"
            },
            {
                engine: "0.5L (499 cc) R2 aire",
                power: "18 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "500 D / F / L"
            },
            {
                engine: "0.6L (594 cc) R2 aire",
                power: "18 CV (aprox.)",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "500 R (1972-1975)"
            }
        ],

        accessories: [
            {
                name: "Sostre de lona",
                description: "De sèrie en la majoria de versions.",
                extra: ""
            }
        ],

        videos: []
    }
);
