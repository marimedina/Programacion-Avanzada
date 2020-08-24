
//dado un arreglo, devuelve un nuevo arreglo con los elementos 
//que cumplen con cierta condicion dada

let lenguajes = ['JS', 'PHP', 'PY'];

console.log(lenguajes.filter(lenguajes => lenguajes.length == 2));
console.log(lenguajes.filter(lenguajes => lenguajes.length > 2));


let numeros = [2, 25, 80, 100, 5, 35, 0];
let result = numeros.filter(numeros => numeros > 20);
console.log(result);


