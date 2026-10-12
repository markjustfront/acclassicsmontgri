window.carData = window.carData || [];

window.carData.push(
    {
        id: 81,
        brand: "Mercedes-Benz",
        model: "Fintail / Heckflosse (W111 / W110)",
        years: "1959-1968",
        description: "Berlina coneguda per les petites aletes posteriors ('Heckflosse'). El W111 portava motors de sis cilindres i el W110, més senzill, de quatre (gasolina i dièsel). Va ser pionera en seguretat passiva amb zones de deformació programada. Del W111 també en van derivar el coupé i el cabriolet (1961-1971).",
        image: "images/cars/mercedes/fintail-w111-main.jpg",
        destacat: false,

        generalCharacteristics: `
        <strong>Període de producció:</strong> 1959-1968 (Coupé/Cabriolet 1961-1971)<br>
        <strong>Desplaçament:</strong> 1.9L - 3.5L<br>
        <strong>Potència:</strong> 55 - 200 CV<br>
        <strong>Tracció:</strong> Posterior<br>
        <strong>Carrosseries:</strong> Berlina 4 portes / Coupé / Cabriolet
    `,

        variants: [
            {
                engine: "2.0L (1988 cc) diesel",
                power: "55 CV",
                fuel: "Dièsel",
                traction: "Posterior",
                notes: "190 Dc (1961-1965) i 200 D (1965-1968) (W110)"
            },
            {
                engine: "1.9L (1897 cc) R4",
                power: "80 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "190 c (W110, 1961-1965)"
            },
            {
                engine: "2.0L (1988 cc) R6",
                power: "95 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "200 (W110 de sis cilindres, 1965-1968)"
            },
            {
                engine: "2.3L (2306 cc) R6",
                power: "105 - 120 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "230 (W110, 105/120 CV) i 230 S (W111, 120 CV)"
            },
            {
                engine: "2.2L (2195 cc) R6",
                power: "95 - 120 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "220 b (95 CV), 220 Sb (105/110 CV) i 220 SEb d'injecció (120 CV) (W111)"
            },
            {
                engine: "2.5L / 2.8L R6",
                power: "150 - 160 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "250 SE i 280 SE Coupé/Cabriolet"
            },
            {
                engine: "3.5L (3499 cc) V8",
                power: "200 CV",
                fuel: "Gasolina",
                traction: "Posterior",
                notes: "280 SE 3.5 Coupé/Cabriolet (1969-1971)"
            }
        ],

        accessories: [
            {
                name: "Aletes posteriors (Heckflosse)",
                description: "Les petites aletes de la part posterior donen nom al model.",
                extra: "Mercedes les justificava com a ajuda per maniobrar."
            }
        ],

        videos: []
    }
);
