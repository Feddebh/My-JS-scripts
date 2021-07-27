//funciones de flecha

const sumarDos = (num1, num2) => (num1 * num2);
const resultado = "El resultado es " + sumarDos(2, 3);
console.log(resultado)

const mensaje = nombre => "Hola soy " + nombre;
const resultadDos = mensaje ("Carolina");
console.log(resultadDos + " y quiero trabajar en Globant.")

const operacionTres = (num = 0) => {
    console.log(num + 3)         
}
operacionTres(15)