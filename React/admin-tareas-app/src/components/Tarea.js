import React from 'react';

const Tarea = ({tarea, eliminarTarea}) => (
    <div className="tarea">
        <p>Nombre de la tarea: <span>{tarea.nombretarea}</span></p>
        <p>Tipo de tarea: <span>{tarea.tipotarea}</span></p>
        <p>Fecha: <span>{tarea.fecha}</span></p>
        <p>Hora: <span>{tarea.hora}</span></p>
        <p>Detalle: <span>{tarea.detalle}</span></p>

        <button className="button eliminar u-full-width"
            onClick={() => eliminarTarea(tarea.id)}
        >
            Eliminar
        </button>
    </div>
)
 
export default Tarea;