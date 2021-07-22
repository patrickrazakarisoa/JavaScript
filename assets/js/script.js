let nombreUn = 4, nombreDeux = 7;

function add(nombreA, nombreB){
     let result = nombreA + nombreB;
     // console.log(result); // affiche un resultat.
     return result;
}

function division(nombreA, nombreB){
     let result = nombreA / nombreB;
     return result;
}

// console.log(add(nombreUn, nombreDeux));
let resultAddiction = add(nombreUn, nombreDeux);
let resultDivision = division(nombreUn, nombreDeux);
console.log(resultAddiction * resultDivision);
