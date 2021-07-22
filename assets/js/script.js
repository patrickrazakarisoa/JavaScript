let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minuteDePreparation = 10, minuteDeCuisson = 15){

     let resultat = nombreDeGateaux * (minuteDeCuisson + minuteDePreparation);
     return resultat;
}

let tempsDePreparationChocolat = cuisiner(4);
let tempsDePreparationFraisier = cuisiner(1, 20);

console.log(tempsDePreparationFraisier + tempsDePreparationChocolat);