//se utilizan para hacer llamados asincronos en JS, por ejemplo el consumo de una api
//(llamos externos que se puede hacer en nuestro programa hacia otras funciones)

//estructura basica de una promesa
//pueden devolver dos valores:
//resolve => ejecuta el llamado a la promesa, siempre y cuando el llamado sea correcto
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

console.log(aplicarDescuento);

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
})


//en este ejemplo si es False entonces devuelve el resolve, si en True
//devuelve reject

