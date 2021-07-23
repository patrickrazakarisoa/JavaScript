let gareDeDepart = "Valenciennes";
let gareDArrivee = prompt("Où souhaitez-vous allez ?") || "Gard du Nord" // Valeur par défaut si le voyageur choisit de ne rien mettre NULL;
let chauffeur    = "Bob";

if ( (gareDeDepart != "" || gareDArrivee != "")  && chauffeur != "") {
     alert("Le train va démarrer à destination de " + gareDArrivee + ".");
} else {
     alert("Le train ne peut pas démarrer.");
}

// let x = 2;

// Une condition ternaire
//[CONDITION] ? [TRUE] : [FALSE];
// x > 3 ? console.log("x est supérieur à 3.") : console.log("x est inférieur à 3") ;


// if(x > 3) {
//      console.log("x est supérieur à 3.");
// } else {
//      console.log("x est inférieur à 3");
// }