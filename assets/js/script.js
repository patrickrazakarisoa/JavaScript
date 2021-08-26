// // Les promesses
// // En cours / Honorée / Rompue
// // Exemple Discord(), discuter en ligne par micro (ou par video)

// // const promesse = new Promise((resolve, reject) => {
// //      // Tâches asynchrones

// //      // Promesse honorée : resolve()

// //      // Promesse rompue : reject()
// // });

function chargerScript(script) {
     return new Promise((resolve, reject) => {

          // Créer un élément
          let element = document.createElement('script');
          element.src = script;
          document.body.append(element);

          // Deux possibilitées : resolve()
          element.onload = () => resolve('Ficher ' + script + ' a été chargé.');

          // reject()
          element.onerror = () => reject(new Error('Opération impossible pour le script ' + script));
     })
}

async function resultat() {
     try {
          const scriptA = await chargerScript('assets/js/test.js');
          console.log(scriptA);
          const scriptB = await chargerScript('assets/js/autre.js');
          console.log(scriptB);
     } catch (error) {
          console.log(error); 
          document.body.lastChild.remove();         
     }
}

resultat();

// Async et Await "sucres syntaxiques"

// async function direBonjour() {
//      const promesse = new Promise((resolve, reject) => {
//           setTimeout(() => resolve('Promesse tenu !'), 3000);

//      });

//      let resultat = await promesse;
//      console.log(resultat);
// }

// direBonjour();