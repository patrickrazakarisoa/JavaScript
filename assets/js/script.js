
let monTableau = ['un', 'deux', 'trois', 'quatre']; 
// monTableau.push('cinq'); 
// monTableau.unshift('zero') 
// monTableau.pop(monTableau) 
// monTableau.shift(monTableau);
// console.log(monTableau);

let monTableau2D = [
     ['Mark', 'Jeff', 'Bill'],
     ['Zuckerberg', 'Bezos', 'Gates']
];

// monTableau2D[1].unshift('test');
// monTableau2D[0].shift();
// console.log(monTableau2D);

let monTableauAssociatif = { 
     'prenom'  : 'Mark',
     'nom'     : 'Zuckerberg',
     'poste'   : 'PDG de Facebook'
};

// monTableauAssociatif['nationalité'] = 'Américaine';
delete(monTableauAssociatif.poste);
console.log(monTableauAssociatif);
