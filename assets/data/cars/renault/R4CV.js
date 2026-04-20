window.carData = window.carData || [];

window.carData.push(
    {
        id: 32,
        brand: "Renault",
        model: "4CV",
        years: "1947 - 1961",
        description: "El Renault 4CV és un dels cotxes més importants de la història de Renault. Primer vehicle de gran producció després de la Segona Guerra Mundial, va ser el primer cotxe francès a superar el milió d'unitats. Disseny rear-engine amb tracció posterior, carrosseria monobloc de 4 portes (les davanteres tipus suïcida) i motor Billancourt. Simbolitza la reconstrucció i la motorització popular a França.",
        image: "images/cars/renault/R4CV-main.jpg",
        destacat: true,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1947 - 1961 (més d'1.105.000 unitats)<br>
        <strong>Desplaçament:</strong> 747 cc - 760 cc (4 cilindres en línia Billancourt)<br>
        <strong>Potència:</strong> 17 - 21 CV (algunes versions Sport fins a ~32 CV)<br>
        <strong>Tracció:</strong> Tracció posterior (RWD)<br>
        <strong>Carrosseries:</strong> Berlina 4 portes (suïcida davanteres)
    `,

        variants: [
            {
                engine: "760 cc Billancourt (inicial)",
                power: "18 - 19 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Primers anys (1947-1950). Motor refrigerat per aigua."
            },
            {
                engine: "747 cc Billancourt (estàndard)",
                power: "17 - 21 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió principal des de 1950 per sota del límit fiscal de 750 cc. La més produïda."
            },
            {
                engine: "747 cc Billancourt Sport",
                power: "~32 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions esportives preparades per competició (ral·lis i curses)."
            }
        ],

        accessories: [
            {
                name: "Motor posterior refrigerat per aigua",
                description: "Disposició clàssica rear-engine que influiria en molts models posteriors (Dauphine, R8, etc.).",
                images: ["images/accessories/R4CV/motor.jpg"],
                extra: "Lleuger i senzill de mantenir."
            },
            {
                name: "Portes davanteres suïcida",
                description: "Característica típica de l'època.",
                images: ["images/accessories/R4CV/portes.jpg"],
                extra: "Disseny distintiu del 4CV."
            },
            {
                name: "Versions Luxe i Grand Luxe",
                description: "Millor acabat interior i cromats.",
                images: ["images/accessories/R4CV/interior.jpg"],
                extra: "Les més còmodes per a l'època."
            }
        ],

        videos: []
    }
);