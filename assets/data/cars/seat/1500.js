window.carData = window.carData || [];

window.carData.push(
    {
        id: 43,
        brand: "SEAT",
        model: "1500",
        years: "1963-1973",
        description: "El SEAT 1500 és un cotxe gran i còmode de la gamma mitjana-alta. Va ser molt usat com a taxi i cotxe oficial, oferint espai i confort.",
        image: "images/cars/seat/1500-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1963-1973<br>
        <strong>Desplaçament:</strong> 1.5L (gasolina) / 1.8L-2.0L (dièsel)<br>
        <strong>Potència:</strong> 72 CV (gasolina) / 46-55 CV (dièsel)<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina / Familiar
    `,

        variants: [
            {
                engine: "1.5L (1481 cc)",
                power: "72 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió principal benzina"
            },
            {
                engine: "1.8L / 2.0L dièsel",
                power: "46 - 55 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "Versions 1800D / 2000D (taxis)"
            }
        ],

        accessories: [
            {
                name: "Versió Familiar",
                description: "Carrosseria station wagon espaiosa.",
                images: ["images/accessories/1500/familiar.jpg"],
                extra: "Ideal per a famílies nombroses."
            },
            {
                name: "Interior ampli",
                description: "Espai per a 6 ocupants.",
                images: ["images/accessories/1500/interior.jpg"],
                extra: "Confort i capacitat de càrrega."
            }
        ],

        videos: []
    }
);