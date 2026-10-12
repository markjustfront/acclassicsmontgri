window.carData = window.carData || [];

window.carData.push(
    {
        id: 105,
        brand: "Talbot",
        model: "Samba",
        years: "1981-1986",
        description: "Utilitari derivat del Peugeot 104, el darrer turisme de Talbot. Durant anys va ser l'únic cotxe del seu segment amb versió cabriolet. Es va fabricar a Poissy i a Villaverde (Madrid), amb unes 270.000 unitats.",
        image: "images/cars/talbot/samba-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1981-1986<br>
        <strong>Desplaçament:</strong> 1.0L - 1.4L<br>
        <strong>Potència:</strong> 45 - 90 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Hatchback 3 portes / Cabriolet<br>
        <strong>Unitats fabricades:</strong> 270.555
    `,

        variants: [
            {
                engine: "1.0L (954 cc) R4",
                power: "45 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "LS"
            },
            {
                engine: "1.1L (1124 cc) R4",
                power: "50 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GL"
            },
            {
                engine: "1.4L (1360 cc) R4",
                power: "72 - 90 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "GLS / Rallye / Cabriolet (potència segons versió)"
            }
        ],

        accessories: [
            {
                name: "Samba Cabriolet",
                description: "Carrosseria oberta amb arc de seguretat, fabricada amb Pininfarina.",
                extra: ""
            }
        ],

        videos: []
    }
);
