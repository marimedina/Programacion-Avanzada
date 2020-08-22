//estructura basica de una promesa

//pueden devlver dos valores
//resolve => ejecuta el llamado a la promesa, siempre y cuando el llamado
//sea correcto
//reject => cuando hay un error


const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true;

        if (descuento) {
            resolve('Descuento aplicado')
        }
        else {
            reject('No se puedo aplicar descuento')
        }
    }, 3000)
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})
//console.log(aplicarDescuento);

//en este ejemplo si es False entonces devuelve el resolve, si en True
//devuelve reject

