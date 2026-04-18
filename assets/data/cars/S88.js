window.carData = window.carData || [];

window.carData.push(
    {
        id: 17,
        brand: "Land Rover Santana",
        model: "88",
        years: "1958 - 1991",
        description: "El Land Rover Santana 88 és el clàssic tot terreny curt fabricat a Linares (Jaén) sota llicència de Land Rover. Robust, versàtil i llegendari pel seu ús rural, militar i professional. Versió espanyola del Series III amb evolucions pròpies de Santana Motor, incloent motors de 6 cilindres i versions turbo.",
        image: "images/cars/S88-main.jpg",
        destacat: true,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1958 - 1991 (Series II/IIA fins ~1974, Series III fins 1983, Series IV/2500/Super fins ~1991)<br>
        <strong>Desplaçament:</strong> 2.0L - 3.5L (4 i 6 cilindres)<br>
        <strong>Potència:</strong> 51 - 104 CV (segons motor i època)<br>
        <strong>Tracció:</strong> 4x4 seleccionable<br>
        <strong>Carrosseries:</strong> Soft-top, Hard-top, Station Wagon, Pick-up, Ligero (versió lleugera militar/civil)
    `,

        variants: [
            {
                engine: "2.0L dièsel (2052 cc)",
                power: "51 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Primers anys (Series II, 1958 - mitjans 60). Motor inicial de fabricació espanyola."
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
                notes: "Models tardans Series III i Series IV/2500 (a partir de finals 70 / 80). Més parell que el 2.25."
            },
            {
                engine: "3.5L gasolina 6 cil. (3429 cc)",
                power: "104 CV",
                fuel: "Gasolina",
                traction: "4x4",
                notes: "Creació exclusiva de Santana (estirant el bloc del 2.25). Més potent i suau. Menys comú al 88 curt."
            },
            {
                engine: "3.5L dièsel 6 cil. (3429 cc)",
                power: "94 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Versió dièsel del 6 cilindres. Molt valorada per potència i durabilitat. Principalment en models professionals."
            }
        ],

        accessories: [
            {
                name: "Finestres alpines / safari",
                description: "Finestres addicionals al sostre per millorar la visibilitat i ventilació.",
                images: ["images/accessories/S88/alpine.jpg"],
                extra: "Molt característic de les versions espanyoles dels anys 70 (Especial / Super)."
            },
            {
                name: "Seients anatòmics",
                description: "Seients més còmodes i ergonòmics que els estàndard britànics.",
                images: ["images/accessories/S88/seients.jpg"],
                extra: "Introduïts en versions Especial i Super. Millora notable de confort."
            },
            {
                name: "Reixeta i llums específics",
                description: "Reixeta de plàstic Series III, fars en les aletes i detalls estètics Santana.",
                images: ["images/accessories/S88/grille.jpg"],
                extra: "Diferencia visual respecte als models britànics purs."
            },
            {
                name: "Toma de força (PTO) i equipament agrícola/forestal",
                description: "Sistema per connectar eines, bombes o remolcs.",
                images: ["images/accessories/S88/pto.jpg"],
                extra: "Molt valorat en ús rural, agrícola i professional."
            },
            {
                name: "Suspensión parabòlica",
                description: "Fulles parabòliques en algunes versions (més confort que les normals).",
                images: ["images/accessories/S88/parabolic.jpg"],
                extra: "Millora introduïda per Santana abans que en molts models britànics."
            }
        ],

        videos: []
        // Exemple de com afegir vídeos:
        // videos: [
        //     "https://www.youtube.com/watch?v=EXAMPLE",
        //     "https://www.youtube.com/watch?v=ANOTHER"
        // ]
    }
);