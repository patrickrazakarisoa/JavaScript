// id supprimer
document.querySelector("#a-supprimer").remove();

// création header
let header     = document.createElement('header');
let menu       = document.createElement('div');
let paragraphe = document.createElement('p');

// Les personnaliser
header.textContent            = "Bienvenue";
header.style.backgroundColor  = "#e3b04b";
header.style.textAlign        = "center"; 
header.style.padding          = "20px";
header.style.fontSize         = "3em";
header.style.fontFamily       = "arial";
header.style.color            = "white";

menu.innerHTML                = "<a style='text-decoration: none; padding: 15px' href='#'>Acceuil</a>  <a style='text-decoration: none;padding: 15px' href='#'>Une autre page</a>";
menu.style.backgroundColor    = "#f1d6ab";
menu.style.padding            = "15px";

paragraphe.textContent        = "Ceci est un paragraphe créé avec JavaScript";
paragraphe.style.margin       = "30px";

// Les ajouter
document.body.append(header, menu, paragraphe);


