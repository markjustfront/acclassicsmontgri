window.carData = window.carData || [];

window.carData.push(
    {
        id: 75,
        brand: "BMW",
        model: "Sèrie 6 E24 (incl. M635CSi)",
        years: "1976-1989",
        description: "El gran coupé de luxe de BMW, successor de l'E9, amb el seu característic morro de \"tauró\". Va combinar confort i esportivitat durant tretze anys, amb versions guanyadores en turismes i el M635CSi amb el motor de 24 vàlvules del M1.",
        image: "images/cars/bmw/e24-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1976-1989<br>
        <strong>Desplaçament:</strong> 2.8L - 3.5L<br>
        <strong>Potència:</strong> 184 - 286 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Coupé 2 portes (2+2)
    `,

        variants: [
            {
                engine: "2.8L (2788 cc) M30",
                power: "184 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "628 CSi (1979-1987)"
            },
            {
                engine: "3.0L (2986 cc) M30",
                power: "185 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "630 CS amb carburadors (1976-1979)"
            },
            {
                engine: "3.2L (3210 cc) M30",
                power: "197 - 200 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "633 CSi amb injecció"
            },
            {
                engine: "3.5L (3453 / 3430 cc) M90 / M30",
                power: "185 - 218 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "635 CSi; 218 CV sense catalitzador, 185 CV amb catalitzador, 211 CV a partir de 1987"
            },
            {
                engine: "3.5L (3453 cc) M88/3 / S38",
                power: "260 - 286 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "M635CSi (M6 als EUA), 286 CV; 260 CV amb catalitzador"
            }
        ],

        accessories: [
            {
                name: "Check Control i ordinador de bord",
                description: "Equipament electrònic avançat per a l'època.",
                extra: "Compartit amb la Sèrie 5 i 7."
            },
            {
                name: "Spoiler davanter i aleró (635 CSi)",
                description: "Elements aerodinàmics de sèrie a les versions esportives.",
                extra: "Diferencien el 635 CSi dels models base."
            }
        ],

        videos: []
    }
);
