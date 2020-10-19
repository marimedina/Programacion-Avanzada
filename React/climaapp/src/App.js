import React, { Fragment, useEffect, useState } from 'react';
import Formulario from './Componentes/Formulario';
import Header from './Componentes/Header';
import Clima from './Componentes/Clima'


function App() {

  //state del formulario
  const [busqueda, guardarBusqueda] = useState({
    ciudad:'',
    pais:''
  });

  const [consultar, guardarConsulta] = useState(false)

  const [resultado, guardarResultado] = useState({})

  const {ciudad, pais} = busqueda



  useEffect(() => {

    const consultarAPI = async() => {
      const appId = 'cd26d0807b3428b974f1657ca3329966'
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}, ${pais}&appid=${appId}`
      
      const respuesta = await fetch(url);
      const resultado = await respuesta.json()

      guardarResultado(resultado);
    
    }


    consultarAPI()
  }, [consultar])


  return (
    <Fragment>
      <Header titulo='Clima App'/>

      <div className="contenedor-form">
        <div className="container">
          <div className="row">

            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsulta={guardarConsulta}
              />
            </div>

            <div className="col m6 s12">
              <Clima
                resultado={resultado}
              />
            </div>

          </div>

          
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
