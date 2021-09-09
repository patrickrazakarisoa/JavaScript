// Vérifier que la géolocalisation soit disponible
if( 'geolocation' in navigator) {

     // getCurrentPosition() ou watchPosition()
     // success, error, options

     let options = {
          enableHighAccuracy  : true,
          // maximumAge          : 0,
          setTimeout          : 10000,
     }

     let watch =  
     navigator.geolocation.watchPosition((position) => {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
     }, error, options);

     navigator.geolocation.clearWatch(watch);


     // navigator.geolocation.getCurrentPosition((position) => {
     //      console.log(position.coords.latitude);
     //      console.log(position.coords.longitude);
     // }, error, options);

     function error() {
          alert("Vous avez refusé la géolocalisation.")
     }
} else {
     alert ("La géolocalisation ne peut pas être utilisée.");
}