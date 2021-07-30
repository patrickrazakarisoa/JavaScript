// Exemple 1 : fusionner plusieurs tableaux
let fruits = ['fraise', 'banane', 'poire'];
let aliments = ['chocolat', 'sucre', 'lait', ...fruits];
// let total = aliments.concat(fruits);
// console.log(aliments);

// Exemple 2 ; décuouper une chaine de caractères en plusierus éléments
let phrase = "Bonjour !";
let phraseTableau = [...phrase];
// console.log(phraseTableau);

// Exemple 2 :  sélectionner un élément , et stocker les autres dans une variable
let devises = ['dollars', 'euro', 'yen'];

// sans décomposition
// let premierDevise = devises[0];
// let autres = [devises[1], devises[2]];

// avec décomposition
let [ premierDevise, ...autres] = devises;

console.log(premierDevise);
console.log(autres);