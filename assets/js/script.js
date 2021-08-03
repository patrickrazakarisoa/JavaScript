let btn   = document.querySelector('button');
let div  = document.querySelector('div');

div.style.display = "none";

let hidden = true;

btn.addEventListener('click', () => {
     if(hidden) {
          btn.textContent = "Cacher";
          div.style.display = "block";
          div.style.marginLeft = "30px";
          hidden = false;
     } else {
          btn.textContent = "Afficher";
          div.style.display = "none";
          hidden = true;
     }
})









    








