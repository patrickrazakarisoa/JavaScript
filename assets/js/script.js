// JavaScript Ajax
// let apiKey= "a1b6d52affffed92b9c84ab6636fceec";
// let ville = "Paris";
// recevoirTemperature(ville);

// let changerDeVille = document.querySelector('#changer');
// changerDeVille.addEventListener('click', () => {
//      ville =  prompt("Entrer le nom de la ville.");
//      recevoirTemperature(ville);
// })

// function recevoirTemperature(ville) { 
//      const url= "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=" + apiKey + "&units=metric";

//      let requete = new XMLHttpRequest();
//      requete.open('GET', url);
//      requete.responseType = 'json';
//      requete.send();

//      requete.onload = function() {
//           if(requete.readyState === XMLHttpRequest.DONE) {
//                if(requete.status === 200) {
//                     let response = requete.response;
//                     let responseTemp  = response.main.temp;
//                     let responseVille = response.name;

//                     document.querySelector('#ville').textContent = responseVille;
//                     document.querySelector('#temperature_label').textContent = responseTemp;
//                } else {
//                     alert("Un problème est intervenu, merci de revenir plus tard.");
//                }
//           }
//      }
// }

// JQuery Ajax
// let apiKey= "a1b6d52affffed92b9c84ab6636fceec";
// let ville = "Paris";
// recevoirTemperature(ville);

// $('#changer').click(() => {
//      ville = prompt("Entrer le nom de la ville");
//      recevoirTemperature(ville);
// })

// function recevoirTemperature(ville) { 
//      $.ajax({
//           url: "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=" + apiKey + "&units=metric",
//           type: 'GET',
//           dataType: 'json',
//           success: (data) => {
//                // console.log(data)
//                $("#ville").text(data.name);
//                $("#temperature_label").text(data.main.temp);

//           },
//           error: () => {
//                alert("Un problème est intervenu, merci de revenir plus tard.");
//           }
//      })
// }


// JavaScript Ajax
// const url = "https://blockchain.info/ticker";

// function euroBitCoin() { 
//      // Créer une requête
//      let requete = new XMLHttpRequest(); // Créer un objet
//      requete.open('GET', url); // Premeir paramètre GET / POST, deuxième paramètre : url
//      requete.responseType = 'json'; // Nous attendons du JSON
//      requete.send(); // Nous envoyons notre requête

//      // Dès qu'on reçoit une reponse, cette fonction est executée
//      requete.onload = function() {
//           if (requete.readyState === XMLHttpRequest.DONE) {
//                if (requete.status === 200) {
//                     let reponse = requete.response; // on stock la réponse
//                     let prixEnEuros = reponse.EUR.last;
//                     // console.log(prixEnEuros);
//                     document.querySelector('#price_label').textContent = prixEnEuros;             
//                } else {
//                     alert("Un problème est intervenu, merci de revenir plus tard.");
//                }
//           }
//      }
//      console.log('prix actualisé');
// } 


// JQuery Ajax
const url = 'https://blockchain.info/ticker';

function euroBitCoin() { 
     $.ajax({
          url: url,
          type: 'GET',
          dataType: 'json',
          success: (data) => {
               // console.log(data)
               $("#price_label").text(data.EUR.last + ' €');
          },
          error: () => {
               alert('Merci de revenir plus tard.');
          }
     })
}

setInterval(euroBitCoin, 1000);

const url_bis = 'https://lesoublisdelinfo.com/api.php';

$.ajax({
     url: url_bis,
     type: 'POST',
     data: 'prenom=John',
     dataType: 'json',
     success: (data) => {
          $('h1').text(data.resultat);
     },
     error: () => {
          alert('Merci de revenir plus tard.')
     }
})

