// Avec JavaScript
document.querySelector('h1').textContent = 'Bonjour avec JavaScript';
// document.querySelector('#monId').className = 'important';
// document.querySelector('#monId').className = ''; // pour supprimer une classe "impossible"
// document.querySelector('h1').style.color = 'steelblue';

// document.querySelectorAll('p').textContent = " Ceci est un paragraphe";
// document.querySelectorAll('p').style.color = "purple"; // impossible
document.querySelector('.maClass').innerHTML = "<p><b>HTML modifié</b></p>";




// Avec JQuery
$('h1').text("Bonjour avec JQuery"); // p, dpnne le sélecteur CSS
$('h1').css('color', 'orange');
$('#monId').addClass('important');
$('#monId').removeClass('important')

// $('p').text("Ceci est un paragraphe");  // on sélectionne tous les paragraphes
$('p').css('color', 'purple');
$('.maClass').html('<p><b>HTML modifié avec Jquery</b></p>');






