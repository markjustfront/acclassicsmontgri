// ==================== R18.js ====================
// Renault 18 (berlina familiar dels anys 80)

window.carData = window.carData || [];

window.carData.push(
    {
        id: 15,
        brand: "Renault",
        model: "18",
        years: "1978 - 1989",
        description: "El Renault 18 va substituir els R12 i parcialment el R16. Una berlina familiar sòlida i fiable, disponible en versió berlina i break (combi). Va oferir motors gasolina, dièsel i versions Turbo esportives. Molt produït i popular a Europa i Amèrica del Sud.",
        image: "images/cars/R18-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1978 - 1989 (fins 1994 a Argentina)<br>
        <strong>Desplaçament:</strong> 1.4L - 2.2L (gasolina i dièsel)<br>
        <strong>Potència:</strong> 64 - 125 CV<br>
        <strong>Tracció:</strong> Davantera (FWD)<br>
        <strong>Carrosseries:</strong> Berlina 4 portes, Break (Combi)
    `,

        variants: [
            {
                engine: "1.4L (1397 cc) Cléon",
                power: "64 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions TL / GTL bàsiques."
            },
            {
                engine: "1.6L (1647 cc) Cléon-Alu",
                power: "79 - 96 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "TS / GTS. Més refinat i potent."
            },
            {
                engine: "1.6L (1565 cc) Turbo",
                power: "110 - 125 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió Turbo esportiva (1980-1986)."
            },
            {
                engine: "2.1L (2068 cc) Dièsel / Turbo D",
                power: "67 - 88 CV",
                fuel: "Dièsel",
                traction: "Davantera",
                notes: "TD / GTD. El Turbo D va ser un dels dièsel més ràpids de l'època."
            }
        ],

        accessories: [
            {
                name: "Versió Break / Combi",
                description: "Carrosseria familiar amb gran capacitat de càrrega.",
                images: ["images/accessories/R18/break.jpg"],
                extra: "Molt pràctica per famílies."
            },
            {
                name: "Interior GTS / GTX",
                description: "Equipament superior amb seients en vellut o cuir opcional.",
                images: ["images/accessories/R18/interior.jpg"],
                extra: "Més luxós que els models anteriors."
            }
        ],

        videos: []
    }
);