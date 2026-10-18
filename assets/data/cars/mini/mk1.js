window.carData = window.carData || [];

window.carData.push(
    {
        id: 145,
        brand: "Mini",
        model: "Mk1 (Austin Seven / Morris Mini-Minor)",
        years: "1959-1967",
        description: "El cotxe que va canviar els utilitaris: Alec Issigonis va posar el motor transversal i el canvi sota el motor perquè el 80% del terra quedés per als passatgers. Al principi es venia com a Austin Seven i Morris Mini-Minor; Mini no va ser una marca pròpia fins al 1969.",
        image: "images/cars/mini/mk1-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1959-1967 (Mk1)<br>
        <strong>Desplaçament:</strong> 0.85L<br>
        <strong>Potència:</strong> 34 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 2 portes / Familiar (Countryman / Traveller) / Furgoneta / Pick-up<br>
        <strong>Unitats fabricades:</strong> 5.387.862 Mini clàssics en total (1959-2000)
    `,

        variants: [
            {
                engine: "0.85L (848 cc) R4 Serie A transversal",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Rodes de 10 polzades, suspensió de goma (Hydrolastic des del 1964)"
            }
        ],

        accessories: [],

        videos: []
    }
);
