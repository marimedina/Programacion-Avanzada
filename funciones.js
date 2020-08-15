//funciones
function saludar(nombre) {
    console.log('Bienvenida '+nombre);
}

//invocarla
saludar('Maria')

//funciones expresivas
const cliente = function(nombre){
    console.log(`Mostrando datos del cliente ${nombre}`);
}
cliente('Maria medina');

function actividad(nombre, profesion){
    console.log(`La persona ${nombre}, tiene como prof ${profesion}`);
}

actividad('Maria', 'Estudiante')

//Los parametros puede ser:
//objetos
//variables primitivas
//o inclusive otras funciones

actividad('pedro','diseñador')
actividad()