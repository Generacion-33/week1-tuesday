//COERCION DE TIPOS

//Tenemos dos tipos de coercion, implicita y explicita

//implicita
console.log('1' + '2');// 12
console.log(1 + 2);//3
console.log('24' / '2');//12
console.log('30' - '20'); //10

console.log('hola' * 2); //NaN

//Coercion explicita

console.log(String(3) + String(3)); //33
console.log(Number('12') + Number('12')); //24

console.log(Number(true)); //1
console.log(Number(false)); //0

//valores truthy
console.log(Boolean(true)); //true
console.log(Boolean(1)); //true
console.log(Boolean(3)); //true
console.log(Boolean('0')); //true
console.log(Boolean(-3)); //true
console.log(Boolean([]));//true
console.log(Boolean({}));//true

//valores falsy
console.log(Boolean(false)); //false
console.log(Boolean(0)); //false
console.log(Boolean('')); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false

