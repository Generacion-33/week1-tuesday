//TIPOS DE DATOS -> 1- number
// El tipo de dato numerico, representa tanto los numeros enteros como de  puntos flotantes

//Numero enteros
23
10
4
5

//Numeros de puntos flotantes
3.5
4.3
4.1235

//Declaracion de numeros enteros y de puntos fotantes

const entero = 10
const decimal = 10.5
console.log(entero); //10

// Tamben puedo declarar numeros negativos (ENTEROS y PUNTOS FLOTANTES)

const enteroNegativo = -10
const flotanteNegativo = -10.5

const numString = '10'
console.log(numString); //10

//typeof
console.log(typeof (entero)); //number
console.log(typeof (numString)); //string

//Convertir string a numero
const numberString = parseInt('10px') //10
console.log(numberString); //10
console.log(typeof (numberString)); //number

const num2 = Number('10px') //para hacer esto, no debo tener letras, porque si no obtengo NaN
console.log(num2);

const num3 = Number('10') //10
console.log(typeof (num3));//number
console.log(num3);

//infinito
console.log(1 / 0);//Infinity
console.log(-1 / 0);//-Infinity

const infinito = Infinity
console.log(infinito);



//NaN
console.log('Hola' * 10); //NaN

//coerción de tipos
console.log('10' + '2'); //102
console.log('10' + 2); //102




