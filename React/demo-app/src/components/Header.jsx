import React from 'react';

//la parte de logica se declara fuera del return

function Header() {

    const edad = 18
    let mensaje;
    if(edad >= 18 ) {
        mensaje = 'Eres mayor de edad'
    }
    else {
        mensaje = 'No eres mayor de edad'
    }

    return (
        <div className= 'App'>
            <h1>{edad}</h1>
            <Header />
        </div>
        
    )
}

export default Header;