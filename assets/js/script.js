// Call permet d'invoquer immédiatement une fonction
// Call 
// Animal.call(this, nombreDePattes, poids);

let gandalf = { titre: "Magicien"}

function direBonjour(arme, degats) {
     console.log("Bonjour " + this.titre  + ", vous possédez " + arme + " qui donne " + degats + " points de dégats.");
}
// direBonjour.apply(gandalf, ["une baton", 75]); // Apply a besion d'un tableau pour passer des arguments ( utile pour les gros données .JSON)
// direBonjour.call(gandalf, "une baton", 75); // Call donner les arguments un à un.

// Bind
// Objectif: changer le context de "this".

this.valeur = "Windows"

let monObjet = {
     valeur: "Objet",
     getValeur: function() {
          console.log(this.valeur);
     }
}

monObjet.getValeur();

let maValeur = monObjet.getValeur;
maValeur();

let maValeurAvecBind = monObjet.getValeur.bind(monObjet); // On change le context de Glogale en Locale
maValeurAvecBind();