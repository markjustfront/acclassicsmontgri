window.carData = window.carData || [];

window.carData.push(
    {
        id: 18,
        brand: "Land Rover Santana",
        model: "109",
        years: "1968 - 1991",
        description: "El Land Rover Santana 109 és la versió de batalla llarga (109 polzades) fabricada a Linares. Més espaiós i versàtil que el 88, ideal per transport de passatgers, càrrega o ús professional. Robust, fiable i amb les mateixes evolucions pròpies de Santana, incloent motors de 6 cilindres i versions turbo.",
        image: "images/S109-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1968 - 1991 (Series II/IIA des de 1968, Series III fins 1983, Series IV/2500/Super fins ~1991)<br>
        <strong>Desplaçament:</strong> 2.0L - 3.5L (4 i 6 cilindres)<br>
        <strong>Potència:</strong> 51 - 104 CV (segons motor i època)<br>
        <strong>Tracció:</strong> 4x4 seleccionable<br>
        <strong>Carrosseries:</strong> Station Wagon, Hard-top, Soft-top, Pick-up, Van, Ligero (militar)
    `,

        variants: [
            {
                engine: "2.0L dièsel (2052 cc)",
                power: "51 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Primers anys (Series II, finals 60 - mitjans 70). Motor inicial."
            },
            {
                engine: "2.25L gasolina (2286 cc, 4 cil.)",
                power: "70 - 81 CV",
                fuel: "Gasolina",
                traction: "4x4",
                notes: "El més comú en gasolina durant Series IIA i III. ~81 CV en versions posteriors."
            },
            {
                engine: "2.25L dièsel (2286 cc, 4 cil.)",
                power: "60 - 67 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Versió dièsel més habitual i fiable de la Series III."
            },
            {
                engine: "2.25L / 2.286 cc dièsel turbo",
                power: "74 - 75 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Introduït cap al 1982-83 en versions Super. Evolució pròpia de Santana."
            },
            {
                engine: "2.5L dièsel NA (2495 cc)",
                power: "64 - 68 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Models tardans Series III i Series IV/2500 (anys 80). Més parell."
            },
            {
                engine: "3.5L gasolina 6 cil. (3429 cc)",
                power: "104 CV",
                fuel: "Gasolina",
                traction: "4x4",
                notes: "Creació exclusiva de Santana. Més potent i suau. Molt comú al 109 (Cazorla / Especial)."
            },
            {
                engine: "3.5L dièsel 6 cil. (3429 cc)",
                power: "94 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Versió dièsel del 6 cilindres. Molt valorada per potència i durabilitat, especialment en models professionals i militars."
            }
        ],

        accessories: [
            {
                name: "Finestres alpines / safari",
                description: "Finestres addicionals al sostre per millorar visibilitat i ventilació.",
                images: ["images/accessories/S109/alpine.jpg"],
                extra: "Molt característic de les versions espanyoles dels anys 70-80 (Especial / Super / Cazorla)."
            },
            {
                name: "Seients anatòmics",
                description: "Seients més còmodes i ergonòmics que els estàndard britànics.",
                images: ["images/accessories/S109/seients.jpg"],
                extra: "Introduïts en versions Especial i Super. Millora notable en confort per més passatgers."
            },
            {
                name: "Reixeta i llums específics",
                description: "Reixeta de plàstic Series III, fars en les aletes i detalls estètics Santana (incloent versions amb fars quadrats a Cazorla).",
                images: ["images/accessories/S109/grille.jpg"],
                extra: "Diferencia visual respecte als models britànics purs."
            },
            {
                name: "Toma de força (PTO) i equipament agrícola/forestal",
                description: "Sistema per connectar eines, bombes o remolcs.",
                images: ["images/accessories/S109/pto.jpg"],
                extra: "Molt valorat en ús rural, agrícola i professional gràcies a la major capacitat de càrrega."
            },
            {
                name: "Suspensión parabòlica",
                description: "Fulles parabòliques en algunes versions (més confort que les normals).",
                images: ["images/accessories/S109/parabolic.jpg"],
                extra: "Millora introduïda per Santana, especialment útil en el 109 per la major longitud."
            }
        ],

        videos: []  
        // Exemple:
        // videos: [
        //     "https://www.youtube.com/watch?v=EXAMPLE109",
        // ]
    }
);