let num = 10;
let str = "Esto es un texto";
let bol = true

let obj = {
    numero: 10,
    texto: "Nuevo texto",  ///propiedades del objeto |
    pasajes: 'Air',         /// nomenclatura de Parens

    objHijo:{
        numero: 20,
        nombre: 'Maria'
    }
}

console.log(obj);
console.log(obj.texto); //para traer solo un campo

//Notacion por punto

let persona = {
    nombre: 'Maria',
    apellido: 'Medina',
    edad: 20,

    direccion: {
        domicilio: '9 de julio',
        ciudad: 'cdelu',
        pais: 'arg',
        edificio: {
            nombre: 'fd',
            telefono: '25452'
        }
    }
}

console.log(persona);
console.log(persona.apellido);

persona.direccion.zipcode = 3260
console.log(persona.direccion);

//Notacion por referencia
let edificio = persona.direccion.edificio;
edificio.piso = '8Piso';

console.log(persona);

