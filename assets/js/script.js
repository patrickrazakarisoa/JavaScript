let dateActuelle = new Date(); // Date(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number)

console.log(dateActuelle.getFullYear());
console.log(dateActuelle.getDay()); // jour de la semaine (commence à partir de dimanche à l'index 0)
console.log(dateActuelle.getDate()); // jour d'aujourd'hui

console.log(dateActuelle.getUTCDay());


dateActuelle.setFullYear(2750)
console.log(dateActuelle.getFullYear());