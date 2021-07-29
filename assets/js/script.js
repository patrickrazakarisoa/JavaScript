let panier = ['fraise', 'banane', 'poire'];

for (const fruit in panier) {
     console.log(panier[fruit]);
     // panier[fruit] = 'pomme';     
}

for (const fruit of panier) { // le plus utilisé en Javascript !!
     console.log(panier.indexOf(fruit));
     // panier[fruit] = 'pomme';     
}

// console.log(panier);

