import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../actions/index';

class CharacterList extends Component{
    render(){
        console.log("Charlist props ", this.props);
        return (
            <div>
                <h4>Characters</h4>
                <ul className="list-group">
                    {
                        this.props.characters.map( character =>
                        {
                            return <li key={character.id} className="list-group-item">
                            <div className="list-item">
                                {character.name}
                            </div>
                            <div className="list-item right-button" onClick={() => this.props.addCharacterById(character.id)}>
                                +
                            </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('Map State ', state);
    return {
        characters: state.characters
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addCharacterById}, dispatch);
}

// The connect() function helps to connect a React component to a Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);