// NAMP / WAMP / LAMP / XAMP => les cookies marche seulement avec un serveur ou un serveur local.

// Créer un cookie
document.cookie = "prenom=John";

// Afficher tous les cookies
// alert(document.cookie);

// Modifier un cookie
document.cookie = "prenom=Mark";

// Supprimer un cookie
document.cookie = "prenom=";

// Options

document.cookie = "prenom=John; path=/admin";
document.cookie = "prenom=John; path=/admin; domain=beleivemy.com";

let date = new Date(Date.now() + 31536000000);
date = date.toUTCString();
document.cookie = "prenom=John; path=/admin; domain=beleivemy.com; expires=" + date;

document.cookie = "prenom=John; path=/admin; domain=beleivemy.com; max-age=31536000000";

document.cookie = "prenom=John; path=/admin; domain=beleivemy.com; max-age=31536000000; secure";