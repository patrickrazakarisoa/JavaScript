// function addition(nombreA, nombreB){ // function d'addiction classique
//      let resultat = nombreA + nombreB;
//      console.log(resultat);
// }

// addition(5, 6);


function addition(...nombres){ // function avec REST parameter

     let resultat = 0;
     nombres.forEach(nombre => {
          resultat += nombre;
     })
     console.log(resultat);

     // return nombres.reduce((previous, current) => {
     //      return previous + current;
     // });         
}

addition(4, 5, 5, 5, 95, 54, 84, 100);
// console.log(addition(4, 5, 5, 5, 95, 54, 84, 100));

