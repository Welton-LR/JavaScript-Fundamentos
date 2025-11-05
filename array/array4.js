//Removendo elewmentos de uma array

const tartarugasNinjas = ["Rafael","Leonardo","Miquelângelo","Donatelo"];
console.log(tartarugasNinjas);
tartarugasNinjas.pop(); // Removendo o último elemento
console.log(tartarugasNinjas);
tartarugasNinjas.shift(); //Removendo o primeiro elemento
console.log(tartarugasNinjas);
tartarugasNinjas.splice(1,0, "Splinter");
console.log(tartarugasNinjas);