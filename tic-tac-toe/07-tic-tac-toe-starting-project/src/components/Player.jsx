import { useState } from "react"

export default function Player({ name, symbol }) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit(name) {
        setIsEditing(!isEditing);
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>

    if (isEditing) {
        editablePlayerName = (
            <input type="text" required value={playerName} onChange={handleChange} />
        )
    }
    return (<li>
        <span className="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
        </span>
    </li>);
}