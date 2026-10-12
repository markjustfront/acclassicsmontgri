window.carData = window.carData || [];

window.carData.push(
    {
        id: 108,
        brand: "Authi",
        model: "MG 1300",
        years: "1969-1975",
        description: "Versió esportiva de l'ADO16 amb la marca MG, fabricada per Authi a Pamplona. Tenia motor 1275 amb dos carburadors SU i un acabat més esportiu.",
        image: "images/placeholder.svg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1969-1975 (dates aproximades)<br>
        <strong>Desplaçament:</strong> 1.3L<br>
        <strong>Potència:</strong> aprox. 65 - 70 CV<br>
        <strong>Tracció:</strong> Davantera<br>
        <strong>Carrosseries:</strong> Berlina 4 portes<br>
        <strong>Unitats fabricades:</strong> Dada no confirmada
    `,

        variants: [
            {
                engine: "1.3L (1275 cc) R4 Serie A",
                power: "aprox. 65 - 70 CV",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Dos carburadors SU (xifra de potència incerta)"
            }
        ],

        accessories: [],

        videos: []
    }
);
