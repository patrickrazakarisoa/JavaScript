class Utilisateur {
     constructor(prenom, nom, email) {
          this.prenom = prenom;
          this.nom    = nom;
          this.email  = email;
     }

     // Un getter (accesseur) permet de récupérer une propriété.
     get nomComplet() {
          return this.prenom + ' ' + this.nom;
     }

     // Un setter (mutateur) permet de définir une propriété
     set nomComplet(valeur) {
          [this.prenom, this.nom] = valeur.split(' ') // split divise une chaine de caractère à partir d'une séparateur pour faire un tableau;
     }

     sePresenter() {
          console.log("Je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email: " + this.email + ".");
     }
}

var mark = new Utilisateur('Mark', 'Juckerberg', 'mark@facebook.com');
console.log(mark.nomComplet);
mark.nomComplet = "Bill Gates";
console.log(mark.nomComplet);



















// class Animal {
//      constructor(nombreDePattes, poids) {
//           this.nombreDePattes = nombreDePattes;
//           this.poids          = poids;
//      }

//      presentation() {
//           console.log("Cet animal possède " + this.nombreDePattes + " pattes et fait " + this.poids + " kg.");
//      }
// }

// // Oiseau.prototype = Object.create(Animal.prototype); // cette methide est la même qu'extends (l'heritage des classes) 
// class Oiseau extends Animal {
//      constructor(nombreDePattes, poids, longueurDesAiles) {
//           super(nombreDePattes, poids);
//           this.longueurDesAiles = longueurDesAiles;
//      }

//      voler() {
//           console.log("L'oiseau vole !");
//      }
// }

// var perroquet = new Oiseau(2, 1, "grandes");
// console.log(perroquet);
// perroquet.presentation();
// perroquet.voler();