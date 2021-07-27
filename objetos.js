//objetos

const mascota = {
    nombre : "Marlboro",
    edad : 25,
    vivo: false,
    comidas: ["carne", "balanceado"]
}

const nombreMascota = mascota.nombre

// DESTRUCTURING OBJECTS
const {edad, vivo} = mascota //De esta manera tambien podemos acceder a una propiedad del objeto simplificando el codigo. 

console.log(edad, vivo)


