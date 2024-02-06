// Ciando uma função

function sayMayName(name)
{
   console.log('Your Name Is: ' + name);
}

// Chamando uma função
sayMayName('Welton');

// Agora outro exemplo. Aqui eu multipliquei dois valores e retonei o resultado.

 function quadrado(valor)
 {
    return valor * valor;
 }

// Armazenei o valor (que minha função retornou) na variável quadradoDeDez
 const quadradoDeDez = quadrado(10);
 console.log(quadradoDeDez);
