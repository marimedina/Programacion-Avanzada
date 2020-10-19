import React from 'react';

const Clima = ({resultado}) => {
    //extraer los valores
    const {name, main} = resultado
    
    if (!name) return null;

    return ( 
        <div className="card-panel white col 12">
            <div className="black-test">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    {main.temp}
                </p>
            </div>
        </div>
     );
}
 
export default Clima;