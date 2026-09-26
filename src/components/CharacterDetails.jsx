import { useState } from "react";
import Message from "./Message";

function CharacterDetails({ character, characters, characterData }) {
    const [newInventoryItem, setNewInventoryItem] = useState("");
    const [msgText, setMsgText] = useState("");

    function addInventoryItem(name) {
        const newCharacterList = characters.map((character) => {
            if (name === character.name) {
                const newCharacter = {
                    name: character.name,
                    maxHealth: character.maxHealth,
                    currentHealth: character.currentHealth,
                    lowHealth: character.lowHealth,
                    inventory: [...character.inventory, newInventoryItem],
                };

                return newCharacter;
            } else {
                return character;
            }
        });

        characterData(newCharacterList);
        setNewInventoryItem("");
    }

    function modifyHealth(name, health) {
        const newCharacterList = characters.map((character) => {
            if (name === character.name) {
                setMsgText("");

                if (health < 0) {
                    setMsgText("Health cannot be below 0.");
                    return character;
                } else if (health > character.maxHealth) {
                    setMsgText("Health cannot exceed the character's max health.")
                    return character;
                } else {
                    let isLow = false;

                    if (health / character.maxHealth <= 0.25) {
                        isLow = true;
                    }
                    const newCharacter = {
                        name: character.name,
                        maxHealth: character.maxHealth,
                        currentHealth: health,
                        lowHealth: isLow,
                        inventory: character.inventory,
                    };

                    return newCharacter;
                }
            } else {
                return character;
            }
        });

        characterData(newCharacterList);
    }

    return (
        <>
            { character === null ? (
                <p></p>
            ) : (
                <div id="characterDetails">
                <h4>{character.name}</h4>
                <p>Max Health: {character.maxHealth}</p>
                <p>Current Health: {character.currentHealth}</p>
                <div id="healthModifiers">
                    <button className="darkBtn" onClick={() => modifyHealth(character.name, character.currentHealth - 15)}>Damage (-15)</button>
                    <button className="darkBtn" onClick={() => modifyHealth(character.name, character.currentHealth + 10)}>Heal (+10)</button>
                </div>
                { character.lowHealth ? <p className="warning">Warning! Low Health</p> : <p></p>}
                <Message text={msgText} />
                <p>Inventory</p>
                <ul>
                { character.inventory.map(item =>
                    <li key={item}>
                        {item}
                    </li>
                )}
                </ul>
                <input 
                    type="text" 
                    id="inventoryItemInput"
                    placeholder="Enter new item"
                    onChange={(event) => setNewInventoryItem(event.target.value)}
                />
                <button className="darkBtn" onClick={() => addInventoryItem(character.name)}>Add</button>
                </div>
            )}
        </>
    )
}

export default CharacterDetails
