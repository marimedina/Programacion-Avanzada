import React, { useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Frase from './Componentes/Frase'


//revisar aca con la grabacion
const Contenedor = styled.div`
display: flex;
aling-items: center;
padding-top: 5rem;
flex-direction: column;
`

const Boton = styled.button`
background: --webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
background-size: 300px;
color: #fff;
margin-top: 3rem;
padding: 1rem 3 rem;
font-size: 2rem;
border: 2px solid black
`;

//.then devuelve una promesa
//para que no devuelve las llaves con los ... pongo [0]

function App() {

  //state de las frases
  const [ frase, guardarFrase ] = useState({})

  //cargar la frase por defecto
  useEffect( () => { 
    consultarApi()
  }, []);

  const consultarApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const frase = await api.json()
    guardarFrase(frase[0]);
  }

  return (
    <Contenedor>
      <Frase
        frase = {frase}
      />
      <Boton
        onClick={consultarApi}>
        Obtener frase
      </Boton>
    </Contenedor>
  );
}

export default App;
