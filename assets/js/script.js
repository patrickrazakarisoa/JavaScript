// L'objet WeakSet permet de faire une collection d'objet. Dans le cas ci-dessous, on associel dans les objets à un voiture (WeakSet)

let voitureA = {
     constructeur   : 'Tesla',
     modele         : 'Cybertruck'
}

let voitureB = {
     constructeur   : 'Toyota',
     modele         : 'Supra'
}

// voiture.add(voitureA);
// voiture.add(voitureB);

// Au lieu de rajouter add à chaque fois, on peut faire la méthode suivante.
let voiture = new WeakSet([voitureA, voitureB]);

voiture.delete(voitureA);

console.log(voiture);