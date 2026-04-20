window.carData = window.carData || [];

window.carData.push(
    {
        id: 25,
        brand: "Renault Alpine",
        model: "GTA",
        years: "1984 - 1991",
        description: "Evolució gran turisme de l'A310 amb disseny més aerodinàmic i refinat. Disponible en versió atmosfèrica i Turbo. Més còmoda per llargs viatges però manté el caràcter esportiu Alpine.",
        image: "images/cars/alpine/GTA-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1984 - 1991<br>
        <strong>Desplaçament:</strong> 2.458L - 2.849L (V6)<br>
        <strong>Potència:</strong> 160 - 200 CV<br>
        <strong>Tracció:</strong> Tracció posterior (RWD)<br>
        <strong>Carrosseries:</strong> Berlinette/cupè
    `,

        variants: [
            {
                engine: "2.849 cc PRV V6 atmosfèric",
                power: "160 CV",
                fuel: "Gasolina",
                traction: "RWD",
                notes: "Versió GT bàsica (D500). Més refinada."
            },
            {
                engine: "2.458 cc PRV V6 Turbo",
                power: "200 CV",
                fuel: "Gasolina",
                traction: "RWD",
                notes: "Versió Turbo (D501). Acceleració potent (0-100 ~6.5s). La més desitjada."
            }
        ],

        accessories: [
            {
                name: "Aerodinàmica millorada",
                description: "Cx de només 0.28-0.30.",
                images: ["images/accessories/GTA/aero.jpg"],
                extra: "Millor eficiència i velocitat màxima."
            },
            {
                name: "Interior GT",
                description: "Més luxós i còmode que models anteriors.",
                images: ["images/accessories/GTA/interior.jpg"],
                extra: "Orientat a gran turisme."
            }
        ],

        videos: []
    }
);