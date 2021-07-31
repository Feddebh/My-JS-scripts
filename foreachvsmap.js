const numeros = [1, 3, 5, 7, 9];

//forEach()
const ejemplo = numeros.forEach(x => x);
console.log(ejemplo); // output: undefined 
// No nos permite almacenar el nuevo arreglo con las operaciones en una nueva variable.

//map()
const ejemploDos = numeros.map(x => x *100);
console.log(ejemploDos); // output: [100, 300, 500, 700, 900] 
// regresa de respuesta un arreglo nuevo con las operaciones aplicadas. 