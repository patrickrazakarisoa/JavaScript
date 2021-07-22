let crie = "Toujours plus bas !"; // variable globale

function crieDeGuerre() {

     let crie = "Toujours plus fort !"; // si on met "let" dans la fonction, c'est une variable locale
     console.log(crie);
}

crieDeGuerre();
console.log(crie);


