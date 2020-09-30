import React from 'react';

//la parte de logica se declara fuera del return
/*
//Ejemplo1
function Header() {

    const edad = 11
    let mensaje;
    if(edad >= 18) {
        mensaje = 'Eres mayor de edad'
    }
    else {
        mensaje = 'No eres mayor de edad'
    }

    return (
        <h1>{mensaje}</h1>
    )
}
*/

function Header({titulo}) {

    //console.log(props);

    return (
    <h1 className='encabezado'>{titulo}</h1>
    )
}

export default Header;