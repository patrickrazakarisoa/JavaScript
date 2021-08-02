let a = document.querySelector('a');
let button = document.querySelector('button');

a.addEventListener('click', (event) => {
     if(confirm('Etes-vous sûr?')) {
          location.href = "https://google.com";
     }
     // console.log(event);
});

// button.addEventListener('mouseout',  () => { document.body.style.backgroundColor="orange"});




button.addEventListener('mouseover',  () => { document.body.style.backgroundColor="orange"});

function backgroundWhite() {
     document.body.style.backgroundColor="white";
}

button.addEventListener('mouseout', backgroundWhite );
button.addEventListener('mouseout',  () => { document.body.style.fontFamily="arial"});

button.removeEventListener('mouseout', backgroundWhite );




