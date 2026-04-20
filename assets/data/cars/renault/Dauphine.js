window.carData = window.carData || [];

window.carData.push(
    {
        id: 33,
        brand: "Renault",
        model: "Dauphine",
        years: "1956 - 1967",
        description: "La Renault Dauphine va ser un dels cotxes més venuts de la seva època, amb més de 2 milions d'unitats produïdes. Successora del 4CV, manté el disseny rear-engine però amb més espai, confort i potència. Versàtil, econòmica i disponible en versions Gordini esportives. Un clàssic popular a tot el món.",
        image: "images/cars/renault/Dauphine-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1956 - 1967 (més de 2.150.000 unitats)<br>
        <strong>Desplaçament:</strong> 845 cc (principalment)<br>
        <strong>Potència:</strong> 27 - 40 CV<br>
        <strong>Tracció:</strong> Tracció posterior (RWD)<br>
        <strong>Carrosseries:</strong> Berlina 4 portes
    `,

        variants: [
            {
                engine: "845 cc Ventoux",
                power: "27 - 32 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió estàndard. Motor refrigerat per aigua, molt fiable i econòmic."
            },
            {
                engine: "845 cc Ventoux Gordini",
                power: "37 - 40 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió esportiva preparada per Amédée Gordini. Més potència i millor rendiment."
            }
        ],

        accessories: [
            {
                name: "Motor posterior Ventoux",
                description: "Disposició clàssica rear-engine heretada del 4CV.",
                images: ["images/accessories/RDauphine/motor.jpg"],
                extra: "Lleuger i fàcil de mantenir."
            },
            {
                name: "Versions Gordini",
                description: "Preparació esportiva amb millores en motor i suspensió.",
                images: ["images/accessories/RDauphine/gordini.jpg"],
                extra: "Molt buscades pels col·leccionistes."
            }
        ],

        videos: []
    }
);