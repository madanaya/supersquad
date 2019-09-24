import React, {Component} from 'react'
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';

import '../styles/index.css'

class App extends Component{
    constructor(){
        super();
    }

    render(){
        return ( 
            <div className = "App">
                <h1>Superhero team builder</h1>
                <br></br>
                <div className="row">
                    <div className="col-md-4">
                        <CharacterList></CharacterList>
                    </div>
                    <div className="col-md-4">
                        <HeroList></HeroList>
                    </div>
                    <div className="col-md-4">
                        <SquadStats></SquadStats>
                    </div>
                </div>
            </div> 
        )
    }
}

export default App;