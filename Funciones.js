 /*Funcion

function esPar(n){
   
   return n % 2 == 0;
}

console.log(esPar())

Funciones Flecha

let saludar = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';

Callback

let suma = (num1, num2) => 
num1 + num2;
let resta = (num1, num2) => 
num1 - num2;
let division = (num1, num2) => 
num1 / num2;
let multiplicacion = (num1, num2) => num1 * num2;

function calculadora (num1, num2,callback){
    return callback(num1, num2)
} 

 Funciones 

function agregarHttp(url) {
    return "http://" + url
}
function procesar ( unArray , callback){
    let sitiosWeb = [];
    for(let i = 0;i < unArray.length;i++){
        sitiosWeb.push(callback(unArray[i]));
    }
    return sitiosWeb
}

let paginaWeb = (unArray, callback) => procesar (unArray, callback);

console.log(paginaWeb(["www.google.com","www.yahoo.com"], agregarHttp))