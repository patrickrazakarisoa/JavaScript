//Animal(nombreDePattes, poids)
function Animal(nombreDePattes, poids) {
     this.nombreDePattes = nombreDePattes;
     this.poids          = poids;
}

Animal.prototype.presantation = function() {
     console.log("Cet animal possède " + this.nombreDePattes + " pattes et fait " + this.poids + ".")
}

// Oiseau(nombreDePattes, poids / longueurDesAiles)
function Oiseau(nombreDePattes, poids, longueurDesAiles) {
     Animal.call(this, nombreDePattes, poids)
     // La fonction call() permet d'appeler une fonction constructeur: en premier paramètre (this) on donne l'objet acteur , ensuite, on donne les arguments de son constructeur.
     this.longueurDesAiles = longueurDesAiles;
}
Oiseau.prototype = Object.create(Animal.prototype);
Oiseau.prototype.constructor = Oiseau;

// Mammifère(nombreDePattes, poids / typeDePoils)
function Mammifère(nombreDePattes, poids, typeDePoils) {
     Animal.call(this, nombreDePattes, poids)
     this.typeDePoils = typeDePoils;
}

var perroquet = new Oiseau(2, "2kg", "grandes");
console.log(perroquet);
// perroquet.presantation();