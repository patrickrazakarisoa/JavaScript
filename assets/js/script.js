class Personnage {
     constructor(pseudo, classe, sante, attaque) {
          this.pseudo  = pseudo;
          this.classe  = classe;
          this.sante   = sante;
          this.attaque = attaque;
          this.niveau  = 1;
     }

     get informations() {
          return this.pseudo + "(" + this.classe + ") a " + this.sante + " points de vie et est au niveau " + this.niveau + ".";
     }

     evoluer() {
          this.niveau++;
          console.log(this.pseudo + " passe au niveau " + this.niveau + " !");
     }

     verfierSante() {
          if(this.sante <= 0) {
               this.sante == 0;
               console.log(this.pseudo + " a perdu !")
          } 
     }
    
}

class Magicien extends Personnage {
     constructor(pseudo) {
          super(pseudo, "magicien", 170, 90);
     }

     attaquer(personnage) {
          personnage.sante -= this.attaque;
          console.log(this.pseudo + " attaque " + personnage.pseudo + " en lançant une sort (" + this.attaque + " dégâts).");
          this.evoluer();
          personnage.verfierSante();    
     }

     coupSpecial(personnage) {
          personnage.sante -= this.attaque * 5;
          console.log( this.pseudo + " attaque avec une coup spécial puissance des arcanes " + personnage.pseudo + " (" + (this.attaque * 5) + " dégâts)");
          this.evoluer();
          personnage.verfierSante();
     }
}
class Guerrier extends Personnage {
     constructor(pseudo) {
          super(pseudo, "Guerrier", 350, 50);
     }

     attaquer(personnage) {
          console.log(this.pseudo + " attaque " + personnage.pseudo + " avec son épée (" + this.attaque + " dégâts).");
          personnage.sante -= this.attaque;
          this.evoluer();
          personnage.verfierSante();       
     }

     coupSpecial(personnage) {
          console.log( this.pseudo + " attaque avec une coup spécial haches de guerre " + personnage.pseudo + " (" + (this.attaque * 5) + " dégâts)");
          personnage.sante -= this.attaque * 5;
          this.evoluer();
          personnage.verfierSante();
     }
}

var thor    = new Guerrier('Thor');
var gandalf = new Magicien('Gandalf');
console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
gandalf.coupSpecial(thor);

