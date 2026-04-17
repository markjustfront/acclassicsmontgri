window.carData = window.carData || [];

window.carData.push(
    {
        id: 4,
        brand: "Renault",
        model: "6 (R6)",
        years: "1968-1986",
        description: "El Renault 6 és la versió més còmoda i evolucionada del R4, amb millor suspensió i enfoc familiar més refinat.",
        image: "images/R6-main.jpg",
        destacat: false,

        generalCharacteristics: `
    <strong>Període de producció:</strong> 1968-1986<br>
    <strong>Desplaçament:</strong> 0.8L - 1.1L<br>
    <strong>Potència:</strong> 26 - 45 CV<br>
    <strong>Tracció:</strong> Davantera<br>
    <strong>Carrosseries:</strong> Berlina 5 portes
    `,

        variants: [
            {
                engine: "0.8L (845 cc)",
                power: "26 - 30 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R6 L (versió base inicial)"
            },
            {
                engine: "1.0L (1108 cc)",
                power: "34 - 38 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R6 TL (la més comuna)"
            },
            {
                engine: "1.1L (1108 cc)",
                power: "45 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R6 TL millorada / última evolució"
            },
            {
                engine: "1.1L (Export)",
                power: "38 - 45 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "R6 Export (acabats millorats per mercats exteriors)"
            }
        ],

        accessories: [
            {
                name: "Portaequipatges sostre",
                description: "Barres per càrrega addicional.",
                images: ["images/accessories/R6/roofrack.jpg"],
                extra: "Molt utilitzat en viatges familiars."
            },
            {
                name: "Seients abatibles",
                description: "Interior modular per augmentar espai.",
                images: ["images/accessories/R6/seats.jpg"],
                extra: "Millora clara respecte el R4."
            }
        ],

        videos: []
    }
);