import { useState } from "react";
import Message from "./Message";

function CreateCharacter({ characters, characterData }) {
    const [msgText, setMsgText] = useState("");

    const newCharacter = {
        name: "",
        maxHealth: 0,
        currentHealth: 0,
        lowHealth: false,
        inventory: [],
    };

    function addHealth(health) {
        newCharacter.maxHealth = health;
        newCharacter.currentHealth = health;
    }

    function addCharacter() {
        let characterFound = false;

        characters.forEach(character => {
            if (character.name === newCharacter.name) {
                characterFound = true;
            }
        });

        setMsgText("");

        if (characterFound) {
            setMsgText("Character already exists.");
        } else {
            characterData([...characters, newCharacter]);
        }
    }
    
    return (
        <div id="createCharacter">
            <input 
                type="text" 
                id="characterNameInput" 
                placeholder="Enter character name" 
                required 
                onChange={(event) => newCharacter.name = event.target.value}
            />
            <input 
                type="text" 
                id="characterHealthInput" 
                placeholder="Enter character's max health"
                required 
                onChange={(event) => addHealth(event.target.value)}
            />
            <button className="lightBtn" onClick={addCharacter}>Add</button>
            <Message text={msgText} />
        </div>
    )
}

export default CreateCharacter
