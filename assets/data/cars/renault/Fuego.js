// ==================== Fuego.js ====================
// Renault Fuego (cupè esportiu dels 80)

window.carData = window.carData || [];

window.carData.push(
    {
        id: 21,
        brand: "Renault",
        model: "Fuego",
        years: "1980 - 1986 (Europa)",
        description: "El Renault Fuego és un cupè hatchback elegant i aerodinàmic basat en el R18. Disseny icònic dels anys 80 amb línies fluides. Va oferir versions tranquil·les i versions esportives Turbo molt apreciades avui dia. Pràctic (4 places + maleter) però amb caràcter esportiu.",
        image: "images/cars/renault/Fuego-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1980 - 1986 (Europa) / fins 1992 a Argentina<br>
        <strong>Desplaçament:</strong> 1.4L - 2.2L<br>
        <strong>Potència:</strong> 64 - 132 CV<br>
        <strong>Tracció:</strong> Davantera (FWD)<br>
        <strong>Carrosseries:</strong> Cupè hatchback 3 portes
    `,

        variants: [
            {
                engine: "1.4L (1397 cc)",
                power: "64 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió base TL / GTL."
            },
            {
                engine: "1.6L (1647 cc)",
                power: "79 - 97 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TS / GTS."
            },
            {
                engine: "2.0L (1995 cc)",
                power: "105 - 110 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TX / GTX."
            },
            {
                engine: "1.6L (1565 cc) Turbo",
                power: "132 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió Turbo més desitjada. Acceleració potent i aspecte agressiu."
            }
        ],

        accessories: [
            {
                name: "Disseny aerodinàmic",
                description: "Cx baix per l'època i línies elegants.",
                images: ["images/accessories/Fuego/aero.jpg"],
                extra: "Un dels cupès més bonics dels 80."
            },
            {
                name: "Interior esportiu Turbo",
                description: "Seients Recaro opcionals, volant esportiu i quadre complet.",
                images: ["images/accessories/Fuego/interior.jpg"],
                extra: "Ambient GT molt aconseguit."
            }
        ],

        videos: []
    }
);