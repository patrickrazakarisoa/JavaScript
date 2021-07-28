
let monTableau = ['un', 'deux', 'trois', 'quatre']; 
// console.log(monTableau.join(' / '));

let monTableau2D = [
     ['Mark', 'Jeff', 'Bill'],
     ['Zuckerberg', 'Bezos', 'Gates']
];
console.log(monTableau2D[0].join(' , '));
console.log(monTableau2D.join(' / '));


let monTableauAssociatif = { // l'option "join" n'est pas disponible pour les tableaux associatif !!
     'prenom'  : 'Mark',
     'nom'     : 'Zuckerberg',
     'poste'   : 'PDG de Facebook'
};
// console.log(monTableauAssociatif);
