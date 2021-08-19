// Etape 1 - Sélectionner nos éléments
let input        = document.querySelector('#prix');
let error        = document.querySelector('small');
let formulaire   = document.querySelector('#formulaire');

// Etape 2 - Cacher l'erreur
error.style.display = "none";

// Etape 3 - Générer un nombre aléatoire

// function entierAleatoire(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
// let nombreAleatoire = entierAleatoire(0, 1000);

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coups           = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier

function verifier(nombre) {

     let instruction = document.createElement('div');

     if(nombre < nombreAleatoire) {
          // C'est plus
          // Ajouter  un contenu '#1 (4) c'est plus !'
          instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est plus !";
          // Ajouter les classes instruction et plus
          instruction.className = "instruction plus";
     } else if (nombre > nombreAleatoire) {
          // C'est moins
           // Ajouter  un contenu '#1 (4) c'est moins !'
           instruction.textContent = "#" + coups + " ( " + nombre + " ) C'est moins !";
           // Ajouter les classes instruction et moins
           instruction.className = "instruction moins";

     } else {
          // féliciitation vous avez trouvé le juste prix !
          // Ajouter un contenue '#1 (4) féliciitation vous avez trouvé le juste prix !'
          instruction.textContent = "#" + coups + " ( " + nombre + " ) félicitation vous avez trouvé le juste prix !";
          // AJouter les classes instruction et fini
          instruction.className = "instruction fini";
          input.disabled = true;
     }

     // Ajouter l'élément devant les autres.
     document.querySelector('#instructions').prepend(instruction);

}

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup', () => {
     if(isNaN(input.value)) {
          // Afficher le message d'erreur
          error.style.display = "inline";

     } else {
          // Cacher le message d'erreur
          error.style.display = "none";
     }
});

// Etape 5 - Agir à l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
     e.preventDefault();

     if( isNaN(input.value) || input.value == '' ) {
          // Mettre notre bordure de formulaire en roughe (red)
          input.style.border = "2px solid red";
     } else {
          // Mettre notre bordure de formulaire en gris (silver)
          coups++;
          input.style.border = "2px solid silver";
          nombreChoisi = input.value;
          input.value = '';
          verifier(nombreChoisi);
     }
});

