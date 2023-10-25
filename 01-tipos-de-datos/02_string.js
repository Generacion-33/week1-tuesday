//TIPOS DE DATOS - 02-STRING

/**
 * Podemos escribir un string usando comillas simples ('  ') o dobles ("  ")
 * `` -> contenido dinamico y multilinea
 */

const nombre = 'Yonatan'
const apellido = 'Llanto'

console.log(nombre + apellido); //YonatanLlanto
console.log(nombre + ' ' + apellido); //Yonatan Llanto

console.log(`${nombre} ${apellido}`);//Yonatan Llanto


const cadenaDeTexto = 'Hola como estas'

// H  o  l  a   c  o  m  o   e  s  t  a  s
// 0  1  2  3 4 5  6  7  8 9 10 11 12 13 14

console.log(cadenaDeTexto[0]); //H
console.log(cadenaDeTexto[14]); //s
console.log(cadenaDeTexto.length);//15


