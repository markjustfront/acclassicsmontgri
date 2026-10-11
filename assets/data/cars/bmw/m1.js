window.carData = window.carData || [];

window.carData.push(
    {
        id: 76,
        brand: "BMW",
        model: "M1 (E26)",
        years: "1978-1981",
        description: "El primer cotxe desenvolupat íntegrament per BMW M: un superesportiu de motor central amb disseny de Giugiaro. Pensat per competir en Grup 4 i Grup 5, va protagonitzar la mítica sèrie Procar. Només se'n van fer unes 450 unitats, la qual cosa el converteix en una joia per als col·leccionistes.",
        image: "images/cars/bmw/m1-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1978-1981<br>
        <strong>Desplaçament:</strong> 3.5L<br>
        <strong>Potència:</strong> 277 CV (versió de carretera)<br>
        <strong>Tracció:</strong> Posterior (motor central)<br>
        <strong>Carrosseries:</strong> Coupé 2 places de fibra de vidre sobre xassís tubular
    `,

        variants: [
            {
                engine: "3.5L (3453 cc) M88/1 6 cilindres, 24 vàlvules",
                power: "277 CV",
                fuel: "Gasolina",
                traction: "Posterior (motor central)",
                notes: "Injecció mecànica Kugelfischer. Versió de carretera"
            },
            {
                engine: "3.5L M88 Procar / Grup 4",
                power: "Uns 470 CV",
                fuel: "Gasolina",
                traction: "Posterior (motor central)",
                notes: "Versió de competició de la sèrie Procar (1979-1980)"
            }
        ],

        accessories: [
            {
                name: "Disseny de Giugiaro (Italdesign)",
                description: "Carrosseria de fibra de vidre amb els logotips BMW a la part posterior.",
                extra: "Inspiració directa del prototip BMW Turbo de 1972."
            },
            {
                name: "Pilots traseres de la Sèrie 6",
                description: "Les llums posteriors provenen del BMW E24.",
                extra: "Exemple de l'ús de peces de sèrie."
            }
        ],

        videos: []
    }
);
