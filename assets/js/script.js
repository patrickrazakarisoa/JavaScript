let monTableauAssociatif = {
     'prenom'  : 'Marc',
     'nom'     : 'Zeckerberg',
     'poste'   : 'PDG de Facebook'
};

let monTableauAssociatif2 = {
     'prenom'  : 'Bill',
     'nom'     : 'Gates',
     'poste'   : 'PDG de Microsoft'
};


function concatener(tableau) {  

     let chaine = '';
     for (const valeur in tableau) { 
          chaine += (valeur + ' : ' + tableau[valeur] + '\n');
     }
     console.log(chaine);

}

concatener(monTableauAssociatif);
concatener(monTableauAssociatif2);