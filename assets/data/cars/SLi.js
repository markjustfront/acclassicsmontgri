window.carData = window.carData || [];

window.carData.push(
    {
        id: 4,
        brand: "Land Rover Santana",
        model: "Ligero",
        years: "1980 - 1986",
        description: "El Santana Ligero és la versió lleugera i simplificada del Santana 88. Inspirat en el Lightweight militar, té carrosseria reduïda, aletes retallades i menor pes per millorar l’agilitat en terreny difícil. Va néixer com a vehicle militar però també es va comercialitzar en versió civil. Molt àgil, robust i amb les característiques pròpies de Santana.",
        image: "images/SLi-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1980 - 1986 (versió militar des de finals dels 60, civil des de 1980)<br>
        <strong>Desplaçament:</strong> 2.25L - 2.5L (principalment 4 cilindres)<br>
        <strong>Potència:</strong> 60 - 81 CV (segons motor)<br>
        <strong>Tracció:</strong> 4x4 seleccionable<br>
        <strong>Carrosseries:</strong> Soft-top, Hard-top lleuger, Pick-up simplificat (principalment versió curta de 88")
    `,

        variants: [
            {
                engine: "2.25L gasolina (2286 cc, 4 cil.)",
                power: "70 - 81 CV",
                fuel: "Gasolina",
                traction: "4x4",
                notes: "Versió gasolina més habitual. Bona potència per al pes reduït."
            },
            {
                engine: "2.25L dièsel (2286 cc, 4 cil.)",
                power: "60 - 67 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "El dièsel estàndard més comú. Fiable i econòmic."
            },
            {
                engine: "2.25L / 2.286 cc dièsel turbo",
                power: "74 - 75 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Versió turbo introduïda als anys 80. Més potent i amb millor resposta."
            },
            {
                engine: "2.5L dièsel NA (2495 cc)",
                power: "64 - 68 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Models tardans (mitjans 80). Més parell que el 2.25."
            }
        ],

        accessories: [
            {
                name: "Carrosseria lleugera i aletes retallades",
                description: "Disseny simplificat amb menys pes i aletes més curtes per millorar l’angle d’atac i el maneig.",
                images: ["images/accessories/SLigero/carroceria.jpg"],
                extra: "Característica principal que el diferencia del 88 estàndard."
            },
            {
                name: "Finestres alpines / safari (opcional)",
                description: "Finestres addicionals al sostre en algunes unitats civils.",
                images: ["images/accessories/SLigero/alpine.jpg"],
                extra: "Més comú en versions civils dels anys 80."
            },
            {
                name: "Seients anatòmics",
                description: "Seients més còmodes introduïts per Santana.",
                images: ["images/accessories/SLigero/seients.jpg"],
                extra: "Millora de confort en la versió civil."
            },
            {
                name: "Toma de força (PTO) opcional",
                description: "Sistema per eines i remolcs en versions professionals o militars.",
                images: ["images/accessories/SLigero/pto.jpg"],
                extra: "Útil en ús agrícola o forestal."
            },
            {
                name: "Suspensión parabòlica",
                description: "Fulles parabòliques en moltes unitats per millor confort.",
                images: ["images/accessories/SLigero/parabolic.jpg"],
                extra: "Avantatge típic de les evolucions de Santana."
            }
        ],

        videos: []  
        // Pots afegir enllaços a vídeos de proves o restauracions del Ligero
    }
);