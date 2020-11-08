import React from 'react';

import styles from './Formulario.module.css';
import useSelect from '../Hooks/useSelect';


const Formulario = ({guardarCategoria}) => {

    const Opciones = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sport', label: 'Deportes'},
        {value: 'tecnology', label: 'Tecnologia'},   
    ]
    
    const [categoria, SelectNoticias] = useSelect('general', Opciones)

    //submit al formulario para categorias a app.js
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria); 
    }

    return (
        <div className={`${styles.buscador} row `}>
            <div className="col s12 m8 offest-m2">
                <form
                onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Buscar noticias por categorias</h2>
                    <SelectNoticias  />
                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2 `}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default Formulario;