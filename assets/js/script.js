let a = document.querySelector('a');
let button = document.querySelector('button');

// a.onclick = function() {
//      if(confirm('Etes-vous sûr?')) {
//           location.href="https://www.google.com"
//      }
// }

a.onclick = () => {
     if(confirm('Etes-vous sûr?')) {
          location.href="https://www.google.com"
     }
}

button.onmouseover  = () => { document.body.style.backgroundColor="orange" }
button.onmouseout   = () => { document.body.style.backgroundColor="white" }