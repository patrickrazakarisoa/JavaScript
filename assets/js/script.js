
let monTableau = ['un', 'deux', 'trois', 'quatre']; 
monTableau.splice(2, 0, 'random', 'pie');
// console.log(monTableau);

let monTableau2D = [
     ['Mark', 'Jeff', 'Bill'],
     ['Zuckerberg', 'Bezos', 'Gates']
];
monTableau2D.splice(2, 0, ['40', '60', '70']);
// monTableau2D[0].splice(0, 1)
console.log(monTableau2D);

let monTableauAssociatif = { 
     'prenom'  : 'Mark',
     'nom'     : 'Zuckerberg',
     'poste'   : 'PDG de Facebook'
};
// console.log(monTableauAssociatif);
