const url = "https://blockchain.info/ticker";

function euroBitCoin() { 
     // Créer une requête
     let requete = new XMLHttpRequest(); // Créer un objet
     requete.open('GET', url); // Premeir paramètre GET / POST, deuxième paramètre : url
     requete.responseType = 'json'; // Nous attendons du JSON
     requete.send(); // Nous envoyons notre requête

     // Dès qu'on reçoit une reponse, cette fonction est executée
     requete.onload = function() {
          if (requete.readyState === XMLHttpRequest.DONE) {
               if (requete.status === 200) {
                    let reponse = requete.response; // on stock la réponse
                    let prixEnEuros = reponse.EUR.last;
                    // console.log(prixEnEuros);
                    document.querySelector('#price_label').textContent = prixEnEuros;             
               } else {
                    alert("Un problème est intervenu, merci de revenir plus tard.");
               }
          }
     }
     console.log('prix actualisé');
} 

setInterval(euroBitCoin, 1000);