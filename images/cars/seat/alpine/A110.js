window.carData = window.carData || [];

window.carData.push(
    {
        id: 23,
        brand: "Renault Alpine",
        model: "A110",
        years: "1963 - 1977",
        description: "La icònica Alpine A110 és el model més famós de la marca, campió de ral·lis (Monte Carlo 1971-1973). Disseny lleuger amb carrosseria de fibra de vidre, motor posterior i xassís tubular. Una llegenda del motorsport francès amb excel·lent relació pes/potència.",
        image: "images/cars/A110-main.jpg",
        destacat: true,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1963 - 1977<br>
        <strong>Desplaçament:</strong> 0.956L - 1.647L (principalment 4 cil. en línia)<br>
        <strong>Potència:</strong> 51 - 140+ CV (versions de ral·li fins a ~180 CV)<br>
        <strong>Tracció:</strong> Tracció posterior (RWD)<br>
        <strong>Carrosseries:</strong> Berlinette (cupè), alguns cabrio prototips
    `,

        variants: [
            {
                engine: "956 cc - 1.108 cc Cléon-Fonte (R8/R8 Gordini)",
                power: "51 - 95 CV",
                fuel: "Gasolina",
                traction: "RWD",
                notes: "Versions inicials bàsiques. Motors Renault 4CV/8 derivats."
            },
            {
                engine: "1.255 cc - 1.397 cc (R12 Gordini derivats)",
                power: "80 - 120 CV",
                fuel: "Gasolina",
                traction: "RWD",
                notes: "Versions intermèdies més potents, molt utilitzades en competició."
            },
            {
                engine: "1.565 cc - 1.605 cc Cléon-Alu (R16 TS/Gordini)",
                power: "125 - 140 CV",
                fuel: "Gasolina",
                traction: "RWD",
                notes: "Les més buscades: 1600S (1970-1975). Injecció o carburadors Weber. Icona de ral·lis."
            }
        ],

        accessories: [
            {
                name: "Xassís tubular central",
                description: "Estructura lleugera amb carrosseria de fibra de vidre.",
                images: ["images/accessories/A110/chassis.jpg"],
                extra: "Permet un pes inferior a 700 kg en moltes unitats."
            },
            {
                name: "Motor posterior transaxle",
                description: "Disposició clàssica per millor distribució de pes.",
                images: ["images/accessories/A110/engine.jpg"],
                extra: "Comportament àgil i divertit."
            }
        ],

        videos: []
    }
);