//como implementar la promesa haciendo una consulta a una URl

const descargarUsuarios = cantidad => new Promise((res, rej) => {
    //pasar cantidad a la API

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`

    //llamado a ajax
     const xhr = new XMLHttpRequest();

     //peticion asincrona, entonces debo abrir la conexion
    xhr.open('GET', api, true);

    //se debe hacer un on load (devuelve estado de la conexion)
    xhr.onload = () => {
        i+(xhr.status == 200) {
            res(JSON.parse(xhr.responseText).results)
        }

        else {
            //una vez que finalizo, tengo que tener una resp
            rej(Error(xhr.statusText));
        }
    }

    xhr.send()
}); 

//JSON

console.log(descargarUsuarios(10));

descargarUsuarios(10)
then (
    miembros => imprimirHTML(miembros),
    error => console.log(
        new error('Hubo un error' + error)
    )
);

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach( usuario => {
        htmñ += `
        <li>
            nombre: ${usuario.name.first} ${usuario.name.last}
            pais: ${usuario.nat} 
            imagen:
                <img src="${usuario.picture.medium}"/>
        </li>
        `;
    })
};

const contenedorApp = document.querySelector(#app);
contenedorApp.innerHTML = html;
