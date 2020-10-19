import React, { Fragment, useState } from 'react';

//sfc funcional component
const Formulario = ({busqueda, guardarBusqueda, guardarConsulta}) => {

    const [error, guardarError] = useState(false)

    const {ciudad, pais} = busqueda;

    //funcion que coloque los elem en el state
    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    //cuando el user de submit al formulario
    const  handleSubmit = e => {
        e.preventDefault()

        //validar los campos
        if (ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true)
            return;
        }
        guardarError(false)
        guardarConsulta(true)

        //pasarlo al componente principal
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <p className="red darken-4">Todos los campos son obligatorios</p>: null}
           <div className="input-field col s12">
               <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
               />
                <label htmlFor="ciudad"> Ciudad: </label>
            </div> 

            <div className="input-field col s12">
                <select 
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                    >
                    <option value=""> --Seleccione un pais--</option>
                    <option value="US"> Estados Unidos</option>
                    <option value="AR"> Argentina</option>
                    <option value="MS"> Mexico </option>
                    <option value="UR"> Uruguay </option>
                </select>
                <label htmlFor="pais"> Pais: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>


        </form>
     );
}
 
export default Formulario;