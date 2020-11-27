import React, { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Tarea from './components/Tarea';


function App() {

  //tareas en local storage
  let tareasIniciales = localStorage.getItem('tareas')
  if(!tareasIniciales) {
    tareasIniciales = []
  }

  const [tareas, guardarTareas] = useState(tareasIniciales)

  //useeffect para realizar ciertas operaciones cunado cambia el state
  useEffect( () => {
    if(tareasIniciales){
      localStorage.setItem('tareas', JSON.stringify(tareas))
    }else {
      localStorage.setItem('tareas', JSON.stringify([]))
    }
  },[tareas]);

  //funcion que tome las tareas actuales y agregue nuevas
  const crearTarea = tarea => {
    guardarTareas([
      ...tareas,
      tarea
    ]);
  };

  //Funcion para eliminar una tarea
  const eliminarTarea = id =>{
    const nuevaTarea = tareas.filter(tarea => tarea.id !== id)
    guardarTareas(nuevaTarea)
  }

  //mensaje condicional
  const titulo = tareas.length === 0 ? 'No hay tareas' : 'Administra tus tareas'

  return (
    <>
      <h1>Administrador de tareas</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
              <Formulario 
                crearTarea={crearTarea}
              />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {tareas.map(tarea => (
              <Tarea 
                key={tarea.id}
                tarea={tarea}
                eliminarTarea = {eliminarTarea}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
