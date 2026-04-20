window.carData = window.carData || [];

window.carData.push(
    {
        id: 46,
        brand: "SEAT",
        model: "131",
        years: "1975-1984",
        description: "El SEAT 131 és un familiar mitjà robust i espaiós, successor del 124/1430. Va oferir versions benzina i dièsel, sent molt popular com a cotxe de flota i familiar.",
        image: "images/cars/seat/131-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1975-1984<br>
        <strong>Desplaçament:</strong> 1.4L - 2.0L<br>
        <strong>Potència:</strong> 71 - 113 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina / Familiar (Panorama)
    `,

        variants: [
            {
                engine: "1.4L - 2.0L gasolina",
                power: "71 - 113 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions normals i Diplomatic"
            },
            {
                engine: "2.0L - 2.4L dièsel",
                power: "72 - 83 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Versions dièsel"
            }
        ],

        accessories: [
            {
                name: "Versió Panorama",
                description: "Familiar de 5 portes amb gran espai.",
                images: ["images/accessories/131/panorama.jpg"],
                extra: "Molt pràctica per a famílies."
            },
            {
                name: "Equipament Diplomatic",
                description: "Versió alta de gamma amb aire condicionat i direcció assistida.",
                images: ["images/accessories/131/diplomatic.jpg"],
                extra: "Luxuosa per a l'època."
            }
        ],

        videos: []
    }
);