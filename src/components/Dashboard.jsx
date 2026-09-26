import { useState } from "react";

import CharacterCard from "./CharacterCard"
import CharacterDetails from "./CharacterDetails"

function Dashboard({ characters, characterData }) {
    const [selectedCharacter, selectCharacter] = useState(null);
    const selectedCharacterData = characters.find(c => c.name === selectedCharacter);

    return (
        <div id="dashboardSection">
            <h2>Characters</h2>
            { characters.map(character => (
                <CharacterCard 
                    key={character.name}
                    character={character} 
                    setSelectedCharacter={selectCharacter}
                    characters={characters}
                    characterData={characterData}
                />
            ))}
            { selectedCharacterData === undefined ? (
                <p>No character selected.</p>
            ) : (
                <CharacterDetails character={selectedCharacterData} characters={characters} characterData={characterData}/>
            )}
        </div>
    )
}

export default Dashboard
