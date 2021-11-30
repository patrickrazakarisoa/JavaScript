let apiKey= "a1b6d52affffed92b9c84ab6636fceec";
let ville = "Paris";
recevoirTemperature(ville);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
     ville =  prompt("Entrer le nom de la ville.");
     recevoirTemperature(ville);
})


function recevoirTemperature(ville) { 
     const url= "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=" + apiKey + "&units=metric";

     let requete = new XMLHttpRequest();
     requete.open('GET', url);
     requete.responseType = 'json';
     requete.send();

     requete.onload = function() {
          if(requete.readyState === XMLHttpRequest.DONE) {
               if(requete.status === 200) {
                    let response = requete.response;
                    let responseTemp  = response.main.temp;
                    let responseVille = response.name;

                    document.querySelector('#ville').textContent = responseVille;
                    document.querySelector('#temperature_label').textContent = responseTemp;
               } else {
                    alert("Un problème est intervenu, merci de revenir plus tard.");
               }
          }
     }
}