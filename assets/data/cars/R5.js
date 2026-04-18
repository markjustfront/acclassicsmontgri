window.carData = window.carData || [];

window.carData.push(
    {
        id: 2,
        brand: "Renault",
        model: "5 (R5) - Primera Generació (Phase 1)",
        years: "1972-1984",
        description: "El mític Renault 5 original. Un dels cotxes urbans més icònics dels anys 70 i principis dels 80.",
        image: "images/cars/R5-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1972-1984<br>
        <strong>Desplaçament:</strong> 0.8L - 1.4L<br>
        <strong>Potència:</strong> 34 - 160 CV<br>
        <strong>Tracció:</strong> Davantera (excepte Turbo: RWD)<br>
        <strong>Carrosseries:</strong> Hatchback 3 portes (5 portes a partir de 1979)
    `,

        variants: [
            {
                engine: "0.8L (782 cc)",
                power: "34 - 36 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions bàsiques inicials (L)"
            },
            {
                engine: "0.85L (845 cc)",
                power: "36 - 37 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Base més comuna (L / TL)"
            },
            {
                engine: "1.0L (956 cc)",
                power: "44 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Gamma mitjana inicial"
            },
            {
                engine: "1.1L (1108 cc)",
                power: "44 - 45 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TL / GTL (molt popular)"
            },
            {
                engine: "1.3L (1289 cc)",
                power: "54 - 58 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "LS / TS, també amb canvi automàtic"
            },
            {
                engine: "1.4L (1397 cc)",
                power: "63 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TS / TX"
            },
            {
                engine: "1.4L Alpine",
                power: "90 - 93 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió esportiva (Alpine / Gordini)"
            },
            {
                engine: "1.4L Turbo",
                power: "110 - 160 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Motor central, homologació rally (R5 Turbo)"
            }
        ],

        accessories: [
            {
                name: "Volant Iso Delta (Copa i Copa Turbo)",
                description: "Volant esportiu de tres radis muntat en versions Copa i Copa Turbo.",
                images: ["images/accessories/R5/iso-delta-r5.jpg", "images/accessories/R5/iso-delta-r5-2.jpg"],
                extra: "Molt buscat a Espanya i difícil de trobar original."
            },
            {
                name: "Rellotges Copa/Alpine",
                description: "Quadre addicional amb temperatura d'oli i voltatge de bateria.",
                images: ["images/accessories/R5/rellotges-copa-r5.jpg"],
                extra: "Accessoris típics de versions esportives."
            },
            {
                name: "Rellotges Copa Turbo/Alpine Turbo",
                description: "Inclou pressió d'oli i pressió de turbo.",
                images: ["images/accessories/R5/rellotges-copa-turbo-r5.jpg"],
                extra: "Clau en models turboalimentats."
            },
            {
                name: "Llandes Alpine (Gordini)",
                description: "Llandes específiques d'aliatge de disseny esportiu.",
                images: ["images/accessories/R5/llandes-alpine.jpg"],
                extra: "Un dels elements visuals més icònics del R5 Alpine."
            },
            {
                name: "Bandes decoratives Alpine/Copa",
                description: "Vinils laterals amb inscripcions Alpine o Copa.",
                images: ["images/accessories/R5/bandes-alpine.jpg"],
                extra: "Molt utilitzades per diferenciar versions esportives."
            },
            {
                name: "Seients esportius Alpine",
                description: "Seients amb més subjecció lateral i disseny específic.",
                images: ["images/accessories/R5/seients-alpine.jpg"],
                extra: "Interior clarament diferenciat respecte versions bàsiques."
            },
            {
                name: "Para-xocs amb spoiler (TS / Alpine)",
                description: "Para-xocs davanter amb disseny més agressiu i millor aerodinàmica.",
                images: ["images/accessories/R5/spoilers-ts.jpg"],
                extra: "Diferenciador visual important respecte versions base."
            },
            {
                name: "Quadre d'instruments complet (TS / Alpine)",
                description: "Inclou compta-revolucions i més informació mecànica.",
                images: ["images/accessories/R5/quadre-ts.jpg"],
                extra: "Millora funcional respecte quadres bàsics inclou sensor de temperatura d'oli."
            },
            {
                name: "Tapisseria específica (GTL / TS / Alpine)",
                description: "Diferents patrons i materials segons versió.",
                images: ["images/accessories/R5/tapisseria-r5.jpg"],
                extra: "Clau per identificar versions originals."
            },
            {
                name: "Miralls retrovisors babyTornado",
                description: "Miralls metàl·lics típics de versions Alpine.",
                images: ["images/accessories/R5/miralls-tornado.jpg"],
                extra: "Mes comuns a França."
            },
            {
                name: "Miralls retrovisors California",
                description: "Miralls de plastic típics de la epoca.",
                images: ["images/accessories/R5/miralls-california.jpg"],
                extra: "Mes comuns a Espanya."
            },
            {
                name: "Pom de canvi de pell Alpine",
                description: "Pom de canvi de pell per a versions esportives.",
                images: ["images/accessories/R5/pom-canvi-r5.jpg", "images/accessories/R5/pom-canvi-r5-2.jpg"],
                extra: "Accesoris típics de versions esportives."
            }
        ],
        videos: [
            {
                title: "Bota de canvi de marxes del R5 en pell",
                youtubeId: "CQthDNyU7f0",
                description: "Explicació de la instal·lació d'una bota de canvi de marxes en pell per a un Renault 5.",
                images: ["images/accessories/R5/bota-canvi-r5.jpg"],
                imageDescription: "Això era un accessori molt rar de trobar, venut a concessionaris Renault durant els anys 80. Molt buscat pels col·leccionistes actualment."
            }
        ]
    }
);