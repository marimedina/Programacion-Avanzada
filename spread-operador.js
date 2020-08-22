//operador 

let lenguajes = ['JS', 'PHP', 'PY'];
let librerias = ['react', 'vueJS', 'django'];

//unir arreglos en 1 solo con funcion concatenar

/*let combinacion = lenguajes.concat(librerias);
console.log(combinacion);*/



//implementar con el operador dado

let combinacion = [...lenguajes, librerias];
console.log(combinacion);

//me devuelve el ultimo del arreglo
let [ultimo] = [...lenguajes].reverse();
console.log(ultimo);

//ejemplo de .filter


