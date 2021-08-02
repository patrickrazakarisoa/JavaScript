// 1ère méthode : Ecrit juste une texte
// document.write('test');

// 2ème méthode : Ajouter une élément brut
// let h1 = document.querySelector('h1');
// h1.append(' test')

// 3ème méthode : ( celle pour les objets)
// Créer une élément
let helloWorld = document.createElement('div');

// Le personnaliser
helloWorld.innerHTML = "<div style='font-weight: normal; font-size: 50px; color: steelblue; text-align: center; padding: 20px;'>Hello World !</div>";

// L'ajouter à notre page
// document.body.append(helloWorld);
// document.body.appendChild(helloWorld);

// document.body.insertBefore(helloWorld, document.querySelector('.container'));

// document.querySelector('.container').prepend(helloWorld);
