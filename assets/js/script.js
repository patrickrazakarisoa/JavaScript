// Les promesses
// En cours / Honorée / Rompue
// Exemple Discord(), discuter en ligne par micro (ou par video)

// const promesse = new Promise((resolve, reject) => {
//      // Tâches asynchrones

//      // Promesse honorée : resolve()

//      // Promesse rompue : reject()
// });

function chargerScript(script) {
     return new Promise((resolve, reject) => {

          // Créer un élément
          let element = document.createElement('script');
          element.src = script;
          document.head.append(element);

          // Deux possibilitées : resolve()
          element.onload = () => resolve('Ficher ' + script + ' a été chargé.');

          // reject()
          element.onerror = () => reject(new Error('Opération impossible pour le script ' + script));
     })
}

// const promesse = chargerScript('assets/js/test.js');

// promesse.then(
//      function(result) {
//           console.log(result);
//      },
//      function(error) {
//           console.log(error);
//      }
// );

chargerScript('assets/js/test.js').catch(console.log)