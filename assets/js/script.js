const button = document.querySelector("#mode");
const span   = document.querySelector("span");

// button.addEventListener("click", () => {
//      document.body.classList.toggle("dark");
// })

if(localStorage.getItem('theme')) {
     if(localStorage.getItem('theme') == 'sombre') {
          modeSombre();
     }
}

function modeSombre() {
     document.body.className = 'dark';
     span.textContent = "Thème clair";
     localStorage.setItem('theme', 'sombre');
}

button.addEventListener("click", () => {
     if(document.body.classList.contains('dark')) {
          // Mode clair
          document.body.className = '';
          span.textContent = "Thème sombre";
          localStorage.setItem('theme', 'clair');
     } else {
          // Mode sombre
          modeSombre();
     }
})


