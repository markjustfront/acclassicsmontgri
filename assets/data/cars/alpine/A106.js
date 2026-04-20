window.carData = window.carData || [];

window.carData.push(
    {
        id: 36,
        brand: "Alpine",
        model: "A106",
        years: "1955-1961",
        description: "L'Alpine A106 és el primer model de la història d'Alpine. Un cotxe esportiu lleuger amb carrosseria de fibra de vidre i motor posterior, basat en el Renault 4CV. Va marcar l'inici de la llegenda Alpine.",
        image: "images/cars/A106-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1955-1961<br>
        <strong>Desplaçament:</strong> 0.7L - 0.9L<br>
        <strong>Potència:</strong> 21 - 43 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé / Cabriolet
    `,

        variants: [
            {
                engine: "0.7L (747 cc)",
                power: "21 - 26 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió Normal i Special"
            },
            {
                engine: "0.7L (747 cc)",
                power: "38 - 43 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió Mille Miles / Sport (2 carburadors)"
            },
            {
                engine: "0.9L (904 cc)",
                power: "38 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions posteriors més potents"
            }
        ],

        accessories: [
            {
                name: "Carrosseria de fibra de vidre",
                description: "Cos lleuger i resistent fabricat amb fibra de vidre.",
                images: ["images/accessories/A106/fibra.jpg"],
                extra: "Element fonamental que donava lleugeresa i caràcter esportiu."
            },
            {
                name: "Capota de tela (Cabriolet)",
                description: "Versió descapotable amb sostre de tela plegable.",
                images: ["images/accessories/A106/capota.jpg"],
                extra: "Molt apreciada pels entusiastes de la conducció oberta."
            },
            {
                name: "Volant esportiu de fusta",
                description: "Volant de tres radis amb acabats en fusta.",
                images: ["images/accessories/A106/volant.jpg"],
                extra: "Detall clàssic d'Alpine per a una conducció més esportiva."
            },
            {
                name: "Suspensions reforçades",
                description: "Amortidors i ressorts esportius per millor comportament.",
                images: ["images/accessories/A106/suspensions.jpg"],
                extra: "Millorava la manejabilitat en carretera i circuit."
            }
        ],

        videos: []
    }
);