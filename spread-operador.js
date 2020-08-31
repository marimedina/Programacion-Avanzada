//operador que nos permite combinar dos arreglos diferentes

let lenguajes = ['JS', 'PHP', 'PY'];
let librerias = ['react', 'vueJS', 'django'];

//unir arreglos en 1 solo con funcion concatenar
let comb = lenguajes.concat(librerias);
console.log(comb);



//implementar con el operador dado
let combinacion = [...lenguajes, librerias];
console.log(combinacion);


//me devuelve el ultimo del arreglo
let [ultimo] = [...lenguajes].reverse();
console.log(ultimo);

//ejemplo de .filter
//en react se utiliza para obtener copias de elementos

