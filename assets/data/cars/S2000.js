window.carData = window.carData || [];

window.carData.push(
    {
        id: 22,
        brand: "Land Rover Santana",
        model: "2000",
        years: "1978 - ~1985",
        description: "El Santana 2000 és la versió de cabina avançada (Forward Control) dissenyada per a càrrega pesada. Successor del 1300, ofereix una capacitat de càrrega de fins a 2 tones. Ideal per ús comercial, agrícola o industrial. Disseny únic i pràctic amb motor de 6 cilindres en moltes unitats.",
        image: "images/cars/S2000-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1978 - ~1985 (successor del 1300 de 1967-1978)<br>
        <strong>Desplaçament:</strong> 2.25L - 3.5L (principalment 6 cil.)<br>
        <strong>Potència:</strong> 70 - 104 CV<br>
        <strong>Tracció:</strong> 4x4 seleccionable<br>
        <strong>Carrosseries:</strong> Pick-up, Cab-chassis, Drop-side, Crew-cab, Furgoneta
    `,

        variants: [
            {
                engine: "2.25L dièsel (2286 cc)",
                power: "60 - 67 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Versió bàsica dièsel."
            },
            {
                engine: "3.5L gasolina 6 cil. (3429 cc)",
                power: "104 CV",
                fuel: "Gasolina",
                traction: "4x4",
                notes: "Més comú en el 2000 per millor potència de càrrega."
            },
            {
                engine: "3.5L dièsel 6 cil. (3429 cc)",
                power: "94 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Versió dièsel potent per treball pesat."
            }
        ],

        accessories: [
            {
                name: "Cabina avançada (Forward Control)",
                description: "Disseny de cabina sobre l’eix davanter per màxima càrrega.",
                images: ["images/accessories/S2000/cabina.jpg"],
                extra: "Característica principal que el fa únic."
            },
            {
                name: "Xassís reforçat",
                description: "Suspensions i eixos reforçats per suportar fins a 2 tones de càrrega.",
                images: ["images/accessories/S2000/xassis.jpg"],
                extra: "Ideal per ús professional."
            },
            {
                name: "Toma de força (PTO)",
                description: "Sistema per eines i remolcs.",
                images: ["images/accessories/S2000/pto.jpg"],
                extra: "Molt utilitzat en agricultura i construcció."
            }
        ],

        videos: []
    }
);