import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCharacterById } from '../actions/index';

class HeroList extends Component{
    render(){
        return (
            <div>
                <h4>Selected Heroes</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map( hero =>
                        {
                            return <li key={hero.id} className="list-group-item">
                                <div className="list-item">
                                    {hero.name}
                                </div>
                                <div className="list-item right-button" onClick={() => this.props.removeCharacterById(hero.id)}>
                                    -
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
        heroes: state.heroes
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({removeCharacterById},dispatch);
}

// The connect() function helps to connect a React component to a Redux store.
export default connect(mapStateToProps, mapDispatchToProps)(HeroList);