import characters_json from "../data/characters.json";

export function createCharacter(id){
    let character = characters_json.find(ch => ch.id === id);
    return character;
}