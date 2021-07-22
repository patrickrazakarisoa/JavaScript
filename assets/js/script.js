function prevoirAge(){

     let age = prompt("Quel âge avez-vous ?"); // stock en chaîne de caractère // "30" + 1 = 301 et non 30+1
     // age = parseInt(age); // "30" = 30 
     age = parseFloat(age);
     // age = Number(age);

     // nombre = 45;
     // nombreEnString = nombre + ""; // barbare
     // nombreEnString = nombre.toString(); // mettre un nombre en chaîne de caractrère déjà implémenter dans JavaScript
     alert("Bientôt vous aurez " + (age + 1) +  " ans.");
}

prevoirAge();
