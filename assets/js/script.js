// Avec JavaScript
// document.querySelector('h1').addEventListener('click', () => {
//      document.querySelector('h1').style.color= "orange";
// });

// for( let i = 0; i < 2 ; i++) {
//      document.querySelectorAll('p')[i].addEventListener('click', () => {
//           document.querySelector('h1').style.color = 'orange';
//      });
// }

// Avec JQuery
// $('h1').click( () => {
//      $('h1').css('color', 'red');
// });

$('p').click(() => {
     $('h1').css('color', 'orange');
});

$('h1').on('mouseover', () => {
     $('#monId').addClass('important');
})




