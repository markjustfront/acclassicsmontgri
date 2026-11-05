window.carData = window.carData || [];

window.carData.push(
    {
        id: 187,
        brand: "Renault",
        model: "Rodeo",
        years: "1970 - 1986",
        description: "El Renault Rodeo és un vehicle de lleure descapotable amb carrosseria de polièster, dissenyat pels Ateliers de Construction du Livradois (ACL) de Raoul Teilhol per competir amb el Citroën Méhari. Va néixer sobre la base del Renault 4 (Rodeo 4), es va ampliar amb el Rodeo 6 sobre el Renault 6 i es va renovar amb el Rodeo 5, construït per Teilhol. Se'n van fer aproximadament 60.000 unitats.",
        image: "images/cars/renault/Rodeo-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1970 - 1986 (aprox. 60.000 unitats)<br>
        <strong>Desplaçament:</strong> 845 cc - 1289 cc<br>
        <strong>Potència:</strong> 34 - 47 CV (aprox.)<br>
        <strong>Tracció:</strong> Davantera (4x4 Sinpar opcional als Rodeo 4 i 6)<br>
        <strong>Carrosseries:</strong> Descapotable 2 portes de polièster (Évasion, Chantier, Coursière, Artisanale, Quatre Saisons)
    `,

        variants: [
            {
                engine: "845 cc",
                power: "34 CV",
                fuel: "Gasolina",
                traction: "Davantera (4x4 Sinpar opcional)",
                notes: "Rodeo 4 (1970 - 1981). Base del Renault 4 Fourgonnette i motor del Renault 6."
            },
            {
                engine: "1108 cc",
                power: "45 - 47 CV (aprox.)",
                fuel: "Gasolina",
                traction: "Davantera (4x4 Sinpar opcional)",
                notes: "Rodeo 6 (1972 - 1979). Base del Renault 6 i motor del 6 TL, amb el frontal més quadrat."
            },
            {
                engine: "1289 cc",
                power: "45 CV (aprox.)",
                fuel: "Gasolina",
                traction: "Davantera (4x4 Sinpar opcional)",
                notes: "Rodeo 6 (1979 - 1981). Motor del 5 GTL amb més parell i frontal reestilitzat amb els fars del Renault 14."
            },
            {
                engine: "1108 cc",
                power: "34 CV (aprox.)",
                fuel: "Gasolina",
                traction: "Davantera",
                notes: "Rodeo 5 (1981 - 1986). Carrosseria més moderna i compacta construïda per Teilhol sobre la base del Renault 4 GTL. Sèrie limitada Hoggar (1984)."
            }
        ],

        accessories: [],

        videos: []
    }
);
