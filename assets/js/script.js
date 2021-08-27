// LocalStorage   = Stocké dans le navigateur même après qu'il soit fermé.
// SessionStorage = Sacké dans le navigateur pendant la session.

// Et les cookies ?

// setItem([clé], [valeur]) / getItem[clé] / removeItem[clé]
// clear() : supprimer tout
// key([index]) : obtenir la clef située à l'index donnée
// length : obtenir le nombre d'éléments stockés


function elementDiv() {
     let element = document.createElement('div');
     element.style.textAlign = "center";
     element.style.marginTop = "15%";
     element.style.fontSize  = "35px";
     element.style.fontWeight= "500";
     element.textContent     = 'Bonjour ' + localStorage.getItem('prenom');
     document.body.append(element);
}

if(localStorage.getItem('prenom')){  
     elementDiv();
} else {
     let prenom = prompt("Quel est votre prenom?");
     localStorage.setItem('prenom', prenom);  
     elementDiv();  
}

// localStorage.clear()