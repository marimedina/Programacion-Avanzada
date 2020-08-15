//manera de escribir funciones con un nuevo
//standar

let viajando = function(destino){
    return `Viajando a la ciudad de: ${destino}`
}

let viaje = viajando('Paris')
console.log(viaje);
//otra opcion
 let viaj;
 viaj = viajando('London')
 viaj = viajando('Rusia')
 console.log(viaj);

 //Arrow function
 let viajando1 = (destino, duracion) => {
    return `Viajando a la ciudad de: ${destino}, ${duracion}`
 }
 let viaje1 = viajando1('China', '20 dias')
 console.log(viaje1);

 //otra opcion
 //let viajando1 = (destino) => return `Viajando a la ciudad de: ${destino}`