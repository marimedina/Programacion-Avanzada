import React from 'react';
import styled from '@emotion/styled';


const ContendorFrase = styled.div`
    padding:0.1rem;
    border-radius: .5rem;
    background-color: #fff;
    max_width: 800px;

    @media (min-width:992px) {
        margin-top: 10rem;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-aling: center;
        position: relative;
        padding-left: 4rem;
    }

    p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
        font-weight: bold;
        text-aling: right;
        color: #666;
        margin-top: 7rem;
    }
`




const Frase = ({frase}) => {
    return (
        <ContendorFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </ContendorFrase>
    )
}

export default Frase;