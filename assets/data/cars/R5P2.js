window.carData = window.carData || [];

window.carData.push(
    {
        id: 3,
        brand: "Renault",
        model: "5 Super Cinq (Phase 2)",
        years: "1984-1996",
        description: "La segona generació del Renault 5, coneguda com a Super Cinq. Disseny modernitzat, millor equipament i versions esportives icòniques com el GT Turbo.",
        image: "images/R5P2-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1984-1996<br>
        <strong>Desplaçament:</strong> 1.0L - 1.7L (1.6L Diesel)<br>
        <strong>Potència:</strong> 42 - 120 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 3 i 5 portes
    `,

        variants: [
            {
                engine: "1.0L (C1C)",
                power: "42 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions bàsiques (TC / TL)"
            },

            {
                engine: "1.1L (C1E)",
                power: "47 - 49 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TL / GTL"
            },
            {
                engine: "1.4L (C1J / C2J)",
                power: "60 - 72 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TS / TSE / GTL"
            },
            {
                engine: "1.4L GT Turbo",
                power: "115 - 120 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió esportiva turbo"
            },
            {
                engine: "1.6L Diesel (F8M)",
                power: "54 - 55 CV",
                fuel: "Diesel",
                traction: "Davantera",
                notes: "TD / GTD, molt fiable i econòmic"
            },
            {
                engine: "1.7L (F2N / F3N)",
                power: "90 - 95 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GTE / GTX / Baccara"
            }
        ],

        accessories: [
            {
                name: "Volant GT Turbo",
                description: "Volant esportiu de quatre radis amb disseny específic.",
                images: ["images/accessories/R5P2/volant-gt-turbo.jpg"],
                extra: "Un dels elements interiors més reconeixibles."
            },
            {
                name: "Seients esportius GT Turbo",
                description: "Seients amb gran subjecció lateral i disseny agressiu.",
                images: ["images/accessories/R5P2/seients-gt-turbo.jpg"],
                extra: "Clau en la identitat esportiva del model."
            },
            {
                name: "Quadre amb compta-revolucions",
                description: "Instrumentació completa amb informació esportiva.",
                images: ["images/accessories/R5P2/quadre-gt.jpg"],
                extra: "Absent en versions bàsiques."
            },
            {
                name: "Kit aerodinàmic GT Turbo",
                description: "Para-xocs específics, faldons laterals i spoiler.",
                images: ["images/accessories/R5P2/kit-gt-turbo.jpg"],
                extra: "Defineix completament l’aspecte del GT Turbo."
            },
            {
                name: "Llandes d'aliatge GT Turbo",
                description: "Llandes específiques amb disseny esportiu.",
                images: ["images/accessories/R5P2/llandes-gt.jpg"],
                extra: "Un dels elements visuals més icònics."
            },
            {
                name: "Vinils GT Turbo",
                description: "Decoració lateral amb el nom del model.",
                images: ["images/accessories/R5P2/vinils-gt.jpg"],
                extra: "Molt característics dels anys 80."
            },
            {
                name: "Interior Baccara",
                description: "Acabats de luxe amb cuir i millor equipament.",
                images: ["images/accessories/R5P2/baccara-interior.jpg"],
                extra: "La versió més refinada del Super Cinq."
            },
            {
                name: "Tancament centralitzat",
                description: "Sistema de bloqueig central de portes.",
                images: ["images/accessories/R5P2/centralitzat.jpg"],
                extra: "Equipament més modern respecte Phase 1."
            }
        ],

        videos: []
    }
);