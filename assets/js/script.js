// let mark = {
//      prenom: "Mark", // propriété
//      nom: "Zuckerberg",
//      email: "mark@facebook.com",

//      // à l'ancienne
//      sePresenter: function(){
//           console.log("Bonjour, je m'appelle " + this.prenom);
//      }
// }

// On crée une fonction constructeur pour nos utilisateurs
function Utilisateur(prenom, nom, email) {
     this.prenom = prenom;
     this.nom    = nom;
     this.email  = email;

     this.sePresenter = () => {
          console.log("Bonjour, je m'appelle " + this.prenom + " " + this.nom + " et vous pouvez me contacter à l'adresse email " + this.email);
     }
}

// On crée un objet
var mark = new Utilisateur("Mark", "Zeckerberg", "mark@facebook.com");
var bill = new Utilisateur("Bill", "Gates", "bill@gatesnotes.com");

// console.log(mark.prenom);
// console.log(bill.prenom);

// bill.sePresenter();
// console.log(bill);

mark.poste = "PDG de Facebook";
// console.log(mark);

function Logement(type, annee, placeDeParking, proprietaire) {
     this.type           = type;
     this.annee          = annee;
     this.placeDeParking = placeDeParking;
     this.proprietaire   = proprietaire;
}

var appartementA = new Logement('Appartement', 2014, true, mark);// Mark est un objet
// console.log(appartementA.proprietaire.nom);
console.log(appartementA);



