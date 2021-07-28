// Comment créer des tableaux

// let monTableau = new Array('un', 'deux', 'trois');
// let monTableau = Array('un', 'deux', 'trois');
let monTableau = ['un', 'deux', 'trois', 'quatre']; // le plus utilisé par les développeurs

// console.log(monTableau[0]); // comment acceder une valeur dans un tableau simple
console.log(monTableau[monTableau.length - 1]); // comment afficher dinamiquement le dernier résultat.

// let monTableau2D = new Array( 
//      Array('Mark', 'Jeff', 'Bill'),
//      Array('Zuckerberg', 'Bezos', 'Gates')
// ); // Ancienne façon de faire un tableau

let monTableau2D = [
     ['Mark', 'Jeff', 'Bill'],
     ['Zuckerberg', 'Bezos', 'Gates']
];

let monTableauAssociatif = { // on associe des noms à des éléments
     'prenom'  : 'Mark',
     'nom'     : 'Zuckerberg',
     'poste'   : 'PDG de Facebook'
};

console.log(monTableau2D[1][0]); // comment acceder une valeur dans un tableau à plusieurs dimensions
console.log(monTableauAssociatif['poste']); // comment acceder une valeur dans un tableau associatif
