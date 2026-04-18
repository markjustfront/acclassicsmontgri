window.carData = window.carData || [];

window.carData.push(
    {
        id: 20,
        brand: "Land Rover Santana",
        model: "2500",
        years: "1983 - 1994",
        description: "El Santana 2500 (també conegut com Series IV) és l’evolució final i més independent del clàssic Land Rover fabricat a Linares. Després de la fi de l’acord amb Land Rover, Santana va desenvolupar un vehicle amb morro més modern (estil Defender), finestra posterior més alta, millores estètiques i mecàniques pròpies. Molt robust i popular a Espanya durant els 80 i 90.",
        image: "images/cars/S2500-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1983 - 1994<br>
        <strong>Desplaçament:</strong> 2.25L - 3.5L (4 i 6 cilindres)<br>
        <strong>Potència:</strong> 64 - 104 CV (segons motor)<br>
        <strong>Tracció:</strong> 4x4 seleccionable<br>
        <strong>Carrosseries:</strong> 88" / 90" curta i 109" / 110" llarga (Hard-top, Station Wagon, Pick-up, DL/DC)
    `,

        variants: [
            {
                engine: "2.25L / 2.286 cc dièsel turbo",
                power: "74 - 75 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Versions primers anys (Super)."
            },
            {
                engine: "2.5L dièsel NA (2495 cc, 12J)",
                power: "64 - 68 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "El més comú en els 2500. Més parell i fiable."
            },
            {
                engine: "3.5L gasolina 6 cil. (3429 cc)",
                power: "104 CV",
                fuel: "Gasolina",
                traction: "4x4",
                notes: "Més potent i suau. Menys freqüent."
            },
            {
                engine: "3.5L dièsel 6 cil. (3429 cc)",
                power: "94 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Versió dièsel del 6 cilindres. Molt valorada en models DL / Super."
            }
        ],

        accessories: [
            {
                name: "Morro avançat estil Defender",
                description: "Disseny frontal més modern amb capó llarg i reixeta específica.",
                images: ["images/accessories/S2500/morro.jpg"],
                extra: "Característica principal que el diferencia dels Series III."
            },
            {
                name: "Finestres alpines / trampilles d’aire",
                description: "Ventilació millorada al sostre i laterals.",
                images: ["images/accessories/S2500/alpine.jpg"],
                extra: "Molt comú en versions tardanes."
            },
            {
                name: "Seients anatòmics i tauler modern",
                description: "Interior més refinat amb seients còmodes i quadre d’instruments actualitzat.",
                images: ["images/accessories/S2500/seients.jpg"],
                extra: "Millora notable de confort respecte models anteriors."
            },
            {
                name: "Suspensión parabòlica",
                description: "Fulles parabòliques per millor confort i capacitat de càrrega.",
                images: ["images/accessories/S2500/parabolic.jpg"],
                extra: "Introduïda per Santana en moltes unitats."
            }
        ],

        videos: []
    }
);