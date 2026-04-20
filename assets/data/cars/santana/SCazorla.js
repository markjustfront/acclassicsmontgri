window.carData = window.carData || [];

window.carData.push(
    {
        id: 31,
        brand: "Land Rover Santana",
        model: "Cazorla",
        years: "1982 - 1988",
        description: "El Santana Cazorla és la versió més equipada i potent del 109. Destaca pels motors exclusius de 6 cilindres (gasolina i dièsel), estètica diferenciada (fars quadrats en algunes, capó llarg, reixeta especial) i millor acabat interior. Considerat el “top de gamma” dels Santana clàssics.",
        image: "images/cars/santana/SCazorla-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1982 - 1988 (principalment sobre base 109")<br>
        <strong>Desplaçament:</strong> 3.429 cc (6 cilindres)<br>
        <strong>Potència:</strong> 94 - 104 CV<br>
        <strong>Tracció:</strong> 4x4 seleccionable<br>
        <strong>Carrosseries:</strong> Station Wagon, Hard-top, Pick-up (versió llarga)
    `,

        variants: [
            {
                engine: "3.5L gasolina 6 cil. (3429 cc)",
                power: "104 CV",
                fuel: "Gasolina",
                traction: "4x4",
                notes: "Més potent i suau. Ideal per carretera i ús mixt."
            },
            {
                engine: "3.5L dièsel 6 cil. (3429 cc)",
                power: "94 CV",
                fuel: "Dièsel",
                traction: "4x4",
                notes: "Versió dièsel del 6 cilindres. Excel·lent parell per càrrega i off-road."
            }
        ],

        accessories: [
            {
                name: "Motors 6 cilindres exclusius",
                description: "Blocs allargats a partir del 2.25. Més potència i suavitat.",
                images: ["images/accessories/SCazorla/motor6.jpg"],
                extra: "Creació pròpia de Santana, no usada per Land Rover al Regne Unit."
            },
            {
                name: "Estètica Cazorla (fars i reixeta)",
                description: "Fars quadrats o circulars segons any, capó llarg i detalls específics.",
                images: ["images/accessories/SCazorla/grille.jpg"],
                extra: "Aspecte més modern i distingit."
            },
            {
                name: "Interior millorat",
                description: "Seients anatòmics, tauler refinat i més equipament.",
                images: ["images/accessories/SCazorla/interior.jpg"],
                extra: "Versió alta de gamma amb millor confort per a passatgers."
            },
            {
                name: "Finestres alpines dobles",
                description: "Més finestres al sostre per ventilació i visibilitat.",
                images: ["images/accessories/SCazorla/alpine.jpg"],
                extra: "Característic de les versions Cazorla."
            }
        ],

        videos: []
    }
);