let consommable = "cholocat";

switch(consommable) {

     case "carotte":
     case "courgette":
     case "pomme de terre":
          console.log("Ceci est un légume");
          break;

     case "banane":
          console.log("Ceci est un fruit");
          break;
     
     default:
          console.log('Ceci n\'est ni un fruit ni un légume');
}