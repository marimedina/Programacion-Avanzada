import React from 'react';
import {heroes} from '../../Data/Heroes';
import HeroCard from '../Heroes/HeroCard';

const SearchScreen = () => {

    const heroesFiltered =  heroes;

    return ( 
        <div>
            <h1>Search Screen</h1>
            <hr/>

           
            <div className="row">
                <div className="col-4">

                </div>

                <div className="col-8">

                </div>
            </div>

            <div className="row">
                <div className="col-5">

                    <h4>Search Form</h4>
                    <hr/>

                    <form>
                        <input type="submit" placeholder="Buscar un Heroe" className="form-control"/>
                        <button type="submit" className="btn m-1 btn-block btn-outline-primary">Buscar ...</button>
                    </form>

                </div>
                
                <div className="col-7">
                    <h4> Resultado</h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    );
}
 
export default SearchScreen;