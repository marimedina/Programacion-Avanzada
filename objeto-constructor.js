
const persona = {
    nombre: 'Maria',
    prof: 'estudiante',
    edad: '22'
}
console.log(persona);

//objeto constructor

function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//crear una nueva tarea
const tarea1 = new Tarea('Aprender NJ', 'Urg');
const tarea2 = new Tarea('Aprender PY', 'No Urg');
const tarea3 = new Tarea('Aprender java', 'Urg');
const tarea4 = new Tarea('Aprender DB', 'No Urg');
console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);