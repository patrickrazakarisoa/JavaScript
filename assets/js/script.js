// Les closures permettent de garder en mémoire les variables de fonction parente.

function bonjour(prenom){
     let resultat = "Bonjour " + prenom; // variable locale
     let maClosure = () => console.log(resultat);
     return maClosure;
}

let maFonction = bonjour('Evan');
maFonction();

function timer() {
     let secondes = 0;

     let maClosure = () => {
          return ++secondes;
     }
     return maClosure;
}

let monTimer = timer();
console.log(monTimer());
console.log(monTimer());

let monDeuxiemeTimer = timer();
console.log(monDeuxiemeTimer());

console.log(monTimer());


