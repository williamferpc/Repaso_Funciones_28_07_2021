


// Callbacks Ejemplo Practico
const fAfirmativo = function (num) {
    return `El numero ${num} es el correcto de la condicion`;
}
const fError = function (num) {
    return `El numero ${num} no cumple con la condicion`;
}
const fEjecutar = function (callbakA, callbackE) {
    const num = Math.trunc(Math.random() * 10);
    return (num >= 4 && num <=8)
        ?(console.log(callbakA(num)),true)
        :(console.error(callbackE(num)),false);
    
}


console.warn(
        (fEjecutar(fAfirmativo, fError))
        ?`Se ejecuto el callback fAfirmativo`
        :`Se ejecuto el callback fError`
    );









// Callbacks 
// const saludar = function () {
//     return `Hola Mundo`;
// }
// const ejecutar = function(callback) {
//     return callback();
// }
// console.log(ejecutar(saludar));







// function saludar() {
//     return `Hola Mundo`;
// }


// const saludar2 = function () {
//     return `Hola Mundo`;
// }

// Funciones anónimas 
// const saludar3 = new Function('return "Hola Mundo";');

// console.log(saludar);
// console.log(saludar2);
// console.log(saludar3);







// Crea una función mediante un constructor de objeto.
// let saludarObjeto = new Function('return `Hola Mundo`;');
// console.log(saludarObjeto());




// Crea una función mediante expresión.
// const saludarExpresión = function (){
//     return `Hola Mundo`;
// }
// console.log(saludarExpresión());




// Crea una función mediante declaración.
// function saludarDeclaración(){
//     return `Hola Como estas`;
// }
// console.log(saludarDeclaración());