let voitures = new WeakMap();

let index = {
     id: 1
}

let voitureA = {
     contructeur: 'Tesla',
     modele: 'Cybertruck'
}

voitures.set(index, voitureA);

voitures.delete(index);
console.log(voitures);