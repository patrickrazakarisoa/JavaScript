let dateActuelle = new Date(); // mode anglais par défaut

// toLocaleDateString = jour, mois, l'année
// toLocaleTimeString = l'heure
// toLocaleString     = jour, mois, l'année, l'heure
// ON CHOISI LES OPTIONS QU'ON VEUT

// console.log(navigator.language);

let dateLocate = dateActuelle.toLocaleString(navigator.language, {
     weekday: 'long', // short ( 3 première lettres), narrow (première lettre), long (toutes les lettres)
     year: 'numeric', // numeric (xxxx), 2-digit (xx)
     month: 'long',   // short ( 3 première lettres), narrow (première lettre), long (toutes les lettres), numeric (xx)
     day: 'numeric',  // numeric, 2-digit
     // hour: 'numeric', //...
     // minute: 'numeric',
     // second: 'numeric'
});

console.log(dateLocate);