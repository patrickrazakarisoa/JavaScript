class Utilisateur {
     constructor(prenom, nom, email) {
          this.prenom = prenom;
          this.nom    = nom;
          this.email  = email;
     }

     sePresenter() {
          console.log("Je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email: " + this.email + ".");
     }
}

var mark = new Utilisateur('Mark', 'Juckerberg', 'mark@facebook.com');
mark.sePresenter();

class Animal {
     constructor(nombreDePattes, poids) {
          this.nombreDePattes = nombreDePattes;
          this.poids          = poids;
     }

     presentation() {
          console.log("Cet animal possède " + this.nombreDePattes + " pattes et fait " + this.poids + " kg.");
     }
}

// Oiseau.prototype = Object.create(Animal.prototype); // cette methide est la même qu'extends (l'heritage des classes) 
class Oiseau extends Animal {
     constructor(nombreDePattes, poids, longueurDesAiles) {
          super(nombreDePattes, poids);
          this.longueurDesAiles = longueurDesAiles;
     }

     voler() {
          console.log("L'oiseau vole !");
     }
}

var perroquet = new Oiseau(2, 1, "grandes");
console.log(perroquet);
perroquet.presentation();
perroquet.voler();