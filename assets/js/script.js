let mark = {
     prenom: "Mark", // propriété
     nom: "Zuckerberg",
     email: "mark@facebook.com",

     // à l'ancienne
     sePresenter: function(){
          console.log("Bonjour, je m'appelle " + this.prenom);
     }
}

// mark.sePresenter();


// ce qu'il faut faire
function recevoirLesCoordonnees() {
     return { latitude: 35, longitude: 139 }
}

let coordonnees = recevoirLesCoordonnees();
console.log(coordonnees.latitude);
console.log(coordonnees.longitude);