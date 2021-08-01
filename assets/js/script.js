// let h1 = document.querySelector('h1');
// h1.textContent = "Hello World";
// h1.innerHTML = "<div style='font-weight: normal; color: steelblue'>Hello World !</div>";

// console.log(h1);

// si on utilise document.getElementsByTagName !!! Au lieu de querySelector
let h1 = document.getElementsByTagName('h1')[0];
// h1.textContent = "Hello World";
h1.innerHTML = "<div style='font-weight: normal; color: steelblue'>Hello World !</div>";

// En une seule ligne
// let h1 = document.getElementsByTagName('h1')[0].innerHTML = "<div style='font-weight: normal; color: steelblue; text-align: center; padding: 20px;'>Hello World !</div>";

console.log(h1);