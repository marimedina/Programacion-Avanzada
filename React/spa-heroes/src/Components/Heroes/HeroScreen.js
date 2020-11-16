import React from 'react';
import {Redirect, useParams} from 'react-router-dom';
import {getHeroById} from '../../Selectors/getHeroById';

const HeroScreen = () => {
    
    const heroeId = useParams;
    
    const hero = getHeroById(heroeId)
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters

    } = hero;

    if (!hero) {
        return <Redirect to='/'/>
    }
/*
    const handleReturn = () => {
        History.goBack();
    }
    */

    return (
        <div className="row-mt-5">
            <div className="col-4">
                <img className="img-thumbnail animate__animated animate__fadeInLeft"
                    src={`../Assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                />
            </div>
            
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
                    <li className="list-group-item"><b>First_appearance:</b>{first_appearance}</li>
                </ul>
                <br />

                <h5>Characters</h5>
                <p>{characters}</p>

                <button className="btn btn-outline-info" //onClick={handleReturn}
                >Return</button>
            </div>

        </div>
    );
}
 
export default HeroScreen;