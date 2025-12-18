
const animals = ["cat","dog","alligator"];

//Adicionando elementos ao final do array (push)
animals.push("capybara");

//Adicionando elementos ao início da array (unshift)
animals.unshift("badge","lion");

/* Adicionando elementos a partir de um index (splice)
O primeiro argumento é o index, o segundo é o número de elementos
que serão apagados. O terceiro são os elementos adicionados*/
animals.splice(3,0,"turtle","bear")

// node ./array/array.js

animals.sort(); //Põe em ordem alfabética
console.log(animals);
