import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions'
import {createCharacter} from './helper';

/*
    1) When we select a hero, we need to remove it from the list
    2) When we remove a hero, we need to add it to characterList 
*/

function characters(state = characters_json, action){
    switch(action.type){
        case ADD_CHARACTER:
            let characters = state.filter( item => item.id !== action.id);
            return characters;
        case REMOVE_CHARACTER:
            let new_characters = [...state, createCharacter(action.id)]
            return new_characters;
        default: 
            return state;
    }
}

export default characters;