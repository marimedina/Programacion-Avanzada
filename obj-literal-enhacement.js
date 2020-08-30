//La inversa a obj restructuring

const banda = 'Metalica';
const genero = 'Heave metal';
const canciones = ['Master', 'Seeek','Enter Sandman']

//forma anterior

const metalica = {
    banda: banda,
    genero: genero,
    canciones: canciones
}

console.log(metalica);

//forma nueva

constmetalica = {banda, genero, canciones};
console.log(metalica);
