// ==================== R19.js ====================
// Renault 19 (berlina / hatchback finals dels 80 i 90)

window.carData = window.carData || [];

window.carData.push(
    {
        id: 16,
        brand: "Renault",
        model: "19",
        years: "1988 - 1996",
        description: "El Renault 19 va substituir els R9/R11 amb un disseny modern i bones prestacions. Disponible en hatchback, berlina i cabrio. Versions 16v molt apreciades pels aficionats a la conducció. Fiable i còmode, representa el final de l'era clàssica Renault abans dels models més moderns.",
        image: "images/cars/R19-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1988 - 1996<br>
        <strong>Desplaçament:</strong> 1.2L - 1.9L (gasolina i dièsel)<br>
        <strong>Potència:</strong> 55 - 140+ CV<br>
        <strong>Tracció:</strong> Davantera (FWD)<br>
        <strong>Carrosseries:</strong> Hatchback 3/5 portes, Berlina 4 portes, Cabrio
    `,

        variants: [
            {
                engine: "1.2L - 1.4L Cléon / Energy",
                power: "55 - 80 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions base i mitjanes."
            },
            {
                engine: "1.7L - 1.8L F-Type",
                power: "75 - 110 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versions superiors."
            },
            {
                engine: "1.8L 16v",
                power: "130 - 140 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Versió 16 vàlvules esportiva. Excel·lent comportament."
            },
            {
                engine: "1.9L Dièsel / Turbo D",
                power: "65 - 133 CV",
                fuel: "Dièsel",
                traction: "Davantera",
                notes: "Versions econòmiques i potents (el Turbo D arriba a 133 CV)."
            }
        ],

        accessories: [
            {
                name: "Versió Cabrio",
                description: "Carrosseria descapotable elegant.",
                images: ["images/accessories/R19/cabrio.jpg"],
                extra: "Molt bonic i poc comú."
            },
            {
                name: "Interior 16v",
                description: "Seients esportius i quadre complet.",
                images: ["images/accessories/R19/interior.jpg"],
                extra: "Orientat a conducció dinàmica."
            }
        ],

        videos: []
    }
);