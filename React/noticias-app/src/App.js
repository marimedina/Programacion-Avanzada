import React, { useEffect, useState } from 'react';
import Formulario from './Components/Formulario';
import Header from './Components/Header';
import ListadoNoticia from './Components/ListadoNoticias';

function App() {
  const [categoria, guardarCategoria] = useState(''); 
  const [noticias, guardarNoticias] = useState([]);

  useEffect( () =>{
    const consultarAPI = async () => {
      const url=`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6fdedb88f7804e9c9567c0182d274e47`
      
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      
      
      guardarNoticias(noticias.articles);
    }

    consultarAPI();
  }, [categoria])

  return (
    <>
      <Header
        titulo= 'Buscador de noticias'
      />

      <div className=" container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticia 
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
