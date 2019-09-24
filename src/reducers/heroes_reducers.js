import {createCharacter} from './helper';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';


/*
    1) When we add a character, add the that to heroes
    2) 
*/
function heroes(state = [], action){
    switch(action.type){
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id)]
            return heroes;
        case REMOVE_CHARACTER:
            let new_heroes = state.filter( hero => hero.id != action.id);
            return new_heroes;
        default: 
            return state;
    }
}

export default heroes;