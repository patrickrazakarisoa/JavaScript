try {
     // Erreur ?
     // alert(hello);
     let recompense = prompt("Choisissez une récompense : épée, arc, haches");

     switch(recompense){
          case "épée":
               degats = 40;
               break;
          case "arc":
               degats = 30;
               break;
          case "haches":
               degats = 20
               break;
          default:
               throw new Error("Vous ne pouvez pas tricher!!");
     }

     alert("Vous avez choisi: " + recompense + " (" + degats + " de dégats).");
} catch(error) {
     // Erreur !
     alert(error);
     // alert(error.name); // filter : error name only 
     // alert(error.message); // filter : error message only
     // alert(error.stack); // filter : display everything from the error
     // alert("La variable Hello n'existe pas !"); // 
     // console.error(error.stack) // error de base que JavaScript montre dans Console si il y a erreur.
} finally {
     alert("Fin du programme");
}