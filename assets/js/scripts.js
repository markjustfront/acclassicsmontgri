// Catalog data - Add more models here easily
const modelsData = [
    {
        id: 1,
        brand: "Renault",
        model: "4 (R4)",
        years: "1961-1994",
        description: "El cotxe més venut de la història de Renault. Simbol de practicitat i durabilitat.",
        image: "images/renault4.jpg",
        characteristics: "Motor: 0.8L - 1.1L (27-45 CV)<br>Tracció: davantera<br>Portes: 5<br>Consum: molt baix",
        accessories: "Barres de sostre, fundes de seients, rodes de recanvi extern, kit de reparació.",
        extra: "Produït a més de 8 milions d'unitats. Encara molt comú a les concentracions."
    },
    {
        id: 2,
        brand: "Renault",
        model: "5 (R5)",
        years: "1972-1996",
        description: "El supercotxe urbà dels anys 70-80. Icona francesa i espanyola.",
        image: "images/renault5.jpg",
        characteristics: "Motor: 0.8L - 1.7L (36-93 CV)<br>Versions: TL, GTL, Alpine, Turbo",
        accessories: "Pack GT, alerons, llantes d'aliatge, sostre solar.",
        extra: "La versió Turbo va guanyar campionats de turismes."
    },
    {
        id: 3,
        brand: "Renault",
        model: "12",
        years: "1969-1980",
        description: "Berlina familiar espaiosa i fiable. Gran èxit a Espanya.",
        image: "images/renault12.jpg",
        characteristics: "Motor: 1.3L - 1.6L (54-64 CV)<br>Carrosseries: sedan, break",
        accessories: "Pack Lujo, aire condicionat, para-xocs cromats.",
        extra: "Versió Gordini molt buscada pels col·leccionistes."
    },
    {
        id: 4,
        brand: "Renault",
        model: "18",
        years: "1978-1989",
        description: "La berlina moderna dels 80. Confort i tecnologia familiar.",
        image: "images/renault18.jpg",
        characteristics: "Motor: 1.4L - 2.0L (64-110 CV)<br>Versions: TL, GTS, Turbo",
        accessories: "Interior de vellut, equipament elèctric complet.",
        extra: "Va competir en rallies i va tenir versió 4x4."
    },
    {
        id: 5,
        brand: "Renault",
        model: "25",
        years: "1984-1992",
        description: "El vaixell insígnia dels 80. Disseny futurista i gran confort.",
        image: "images/renault25.jpg",
        characteristics: "Motor: 1.7L - 2.9L (90-182 CV)<br>Versions: TS, V6, Turbo, Baccara",
        accessories: "Seients de cuir, ordinador de bord, equip de so premium.",
        extra: "La versió Baccara era la més luxosa."
    }
    // Add more models here (Citroën, SEAT, etc.)
];

const grid = document.getElementById('modelsGrid');
const searchInput = document.getElementById('searchInput');

function renderModels(filteredModels) {
    grid.innerHTML = '';
    if (filteredModels.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1 / -1; text-align:center; padding:40px; font-size:1.2rem; color:#777;">Cap model trobat.</p>`;
        return;
    }

    filteredModels.forEach(model => {
        const cardHTML = `
            <div class="card" onclick="showModel(${model.id})">
                <img src="${model.image}" alt="${model.brand} ${model.model}">
                <div class="card-content">
                    <h3>${model.brand} ${model.model}</h3>
                    <p><strong>${model.years}</strong></p>
                    <p>${model.description}</p>
                </div>
            </div>
        `;
        grid.innerHTML += cardHTML;
    });
}

function filterModels() {
    const term = searchInput.value.toLowerCase().trim();
    const filtered = modelsData.filter(m => 
        m.brand.toLowerCase().includes(term) ||
        m.model.toLowerCase().includes(term) ||
        m.years.includes(term) ||
        m.description.toLowerCase().includes(term)
    );
    renderModels(filtered);
}

window.showModel = function(id) {
    const model = modelsData.find(m => m.id === id);
    if (!model) return;

    document.getElementById('modalTitle').innerHTML = `${model.brand} ${model.model} <small style="font-size:1rem; opacity:0.8;">(${model.years})</small>`;
    
    const bodyHTML = `
        <img src="${model.image}" alt="${model.brand} ${model.model}" style="width:100%; border-radius:12px; margin-bottom:25px;">
        <p style="font-size:1.15rem; margin-bottom:25px;">${model.description}</p>
        
        <h3>Característiques tècniques</h3>
        <p style="background:#f8f6f0; padding:15px; border-radius:8px; margin-bottom:25px;">${model.characteristics}</p>
        
        <h3>Accessoris originals</h3>
        <p style="background:#f8f6f0; padding:15px; border-radius:8px; margin-bottom:25px;">${model.accessories}</p>
        
        <h3>Curiositats</h3>
        <p>${model.extra}</p>
    `;
    document.getElementById('modalBody').innerHTML = bodyHTML;
    document.getElementById('modal').style.display = 'flex';
};

window.closeModal = function() {
    document.getElementById('modal').style.display = 'none';
};

// Initialize
if (searchInput && grid) {
    searchInput.addEventListener('keyup', filterModels);
    renderModels(modelsData);
}