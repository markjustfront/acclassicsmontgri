window.carData = window.carData || [];

window.carData.push(
    {
        id: 67,
        brand: "BMW",
        model: "Isetta",
        years: "1955-1962",
        description: "La mítica \"bombolla\" de BMW: un microcotxe amb porta frontal que obria tot el morro, basat en el disseny italià d'Iso. Va salvar BMW en els difícils anys de postguerra i se'n van fabricar més de 160.000 unitats. Avui és una icona entranyable de l'automòbil europeu.",
        image: "images/cars/bmw/isetta-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1955-1962<br>
        <strong>Desplaçament:</strong> 245 - 298 cc<br>
        <strong>Potència:</strong> 12 - 13 CV<br>
        <strong>Tracció:</strong> Posterior (cadena)<br>
        <strong>Carrosseries:</strong> Microcotxe 2 places amb porta frontal (també versió de tres rodes)
    `,

        variants: [
            {
                engine: "0.25L (245 cc) monocilíndric",
                power: "12 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Isetta 250. Motor de moto BMW refrigerat per aire"
            },
            {
                engine: "0.3L (298 cc) monocilíndric",
                power: "13 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Isetta 300, a partir de 1956"
            }
        ],

        accessories: [
            {
                name: "Porta frontal amb columna de direcció articulada",
                description: "El volant i el quadre s'obren juntament amb la porta per facilitar l'accés.",
                extra: "El tret més característic de la Isetta."
            },
            {
                name: "Sostre de lona enrotllable",
                description: "Sostre obert de tela que també servia de sortida d'emergència.",
                extra: "Molt apreciat en exemplars restaurats."
            }
        ],

        videos: []
    }
);
