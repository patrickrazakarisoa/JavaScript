// function calculerIMC(poids, taille){

//      // Calculer la taille en mètres.
//      let tailleEnMetre   = taille / 100;
//      let tailleCaclulee  = Math.pow(tailleEnMetre, 2);
//      let result          = poids / tailleCaclulee;

//      // let showResult      = alert("Vous IMC est de: " + result);

//      return result;     
// }

function calculerIMC(poids, taille){

     return poids / Math.pow((taille/100), 2);
}

let taille    = prompt('Quelle est votre taille ? (en cm)');
let poids     = prompt('Quel est votre poids ? (en kg)')

alert(calculerIMC(poids, taille));