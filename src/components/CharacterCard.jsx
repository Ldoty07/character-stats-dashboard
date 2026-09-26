function CharacterCard({ character, setSelectedCharacter, characters, characterData }) {
    return (
        <div className="characterCard" onClick={() => setSelectedCharacter(character.name)}>
            <h3>{character.name}</h3>
            <p>Max Health: {character.maxHealth}</p>
            <p>Current Health: {character.currentHealth}</p>
            { character.lowHealth ? <p className="warning">Low Health!</p> : <p></p> }
            <button
                className="darkBtn"
                onClick={() =>
                    characterData(characters.filter(c => c.name != character.name))
                }>
            Delete
            </button>
        </div>
    )
}

export default CharacterCard
