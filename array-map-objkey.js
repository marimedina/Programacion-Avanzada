//ver porque no anda

//arreglos y map
const carrito = ['Prod 1', 'Prod 2', 'Prod 3'];

/*console.log(carrito);

const appContenedor = document.querySelector('#app');

let html = '';
carrito.forEach(produc => {
    html += `<li>${produc}</li>`
})
//cuando implementas una funcion hay que vincularlo al html
appContenedor.innerHTML = html;
*/


//utilizando el map
carrito.map(producto => {
    return `El producto es ${producto}`
})




//otro ej con object key
const persona = {
    nombre: 'juan',
    prof: 'desarrollador',
    edad: 23
}

console.log(Object.keys(persona));