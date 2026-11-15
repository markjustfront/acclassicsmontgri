// Índex de la revista de Revolucions.
// Per afegir una setmana nova: crea assets/data/revista/<id>.js (mira n06-peugeot-404.js),
// afegeix-hi una entrada en aquest array (la més nova, a dalt) i les fotos a images/revista/<id>/.
window.revistaIndex = [
  {
    id: 'n06-peugeot-404',
    num: 6,
    title: 'Peugeot 404: el lleó de Pininfarina que no es va jubilar mai',
    standfirst: 'Va néixer el 1960 com una berlina de família, va guanyar quatre vegades el Ral·li Safari i a Kenya es va muntar fins al 1991.',
    date: '2026-11-16',
    dateLabel: 'Setmana del 16 de novembre de 2026',
    car: 'Peugeot 404',
    carId: 49,
    carFile: 'assets/data/cars/peugeot/404.js',
    hero: 'images/revista/n06/hero.jpg',
    dataFile: 'assets/data/revista/n06-peugeot-404.js'
  }
];

window.revistaForCar = function (car) {
  if (!car || !window.revistaIndex) return null;
  const id = Number(car.id);
  return window.revistaIndex.find(a => a.carId === id) || null;
};
