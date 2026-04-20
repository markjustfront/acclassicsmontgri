window.carData = window.carData || [];

window.carData.push(
    {
        id: 34,
        brand: "Renault",
        model: "Floride / Caravelle",
        years: "1959 - 1968",
        description: "La Renault Floride (anomenada Caravelle en molts mercats) és un cupè i cabriolet elegant basat en la Dauphine. Disseny bonic i juvenil, ideal per a l'oci. Va evolucionar amb motors més potents i suspensió millorada. Un clàssic romàntic i poc comú avui dia, perfecte per a qui busca estil francès dels anys 60.",
        image: "images/cars/Floride-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1959 - 1968<br>
        <strong>Desplaçament:</strong> 845 cc - 1.108 cc<br>
        <strong>Potència:</strong> 37 - 55 CV<br>
        <strong>Tracció:</strong> Tracció posterior (RWD)<br>
        <strong>Carrosseries:</strong> Cabriolet i Coupé (alguns amb hardtop)
    `,

        variants: [
            {
                engine: "845 cc Ventoux",
                power: "37 - 40 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions inicials Floride (1959-1962). Inclou versió Gordini."
            },
            {
                engine: "956 cc",
                power: "44 - 48 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versió intermèdia Caravelle. Radiador rere el motor."
            },
            {
                engine: "1.108 cc (R8 derivats)",
                power: "52 - 55 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "Versions finals (1964-1968). Més potència i frens de disc en algunes unitats."
            }
        ],

        accessories: [
            {
                name: "Carrosseria cabrio / coupè",
                description: "Disseny elegant amb sostre de tela o hardtop opcional.",
                images: ["images/accessories/Floride/carroceria.jpg"],
                extra: "Aspecte esportiu i romàntic."
            },
            {
                name: "Interior refinat",
                description: "Seients i acabats més luxosos que la Dauphine.",
                images: ["images/accessories/Floride/interior.jpg"],
                extra: "Orientat a conducció plaent."
            }
        ],

        videos: []
    }
);