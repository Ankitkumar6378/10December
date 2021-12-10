import React from 'react';
import noteContext from './noteContext';
const NoteContext = (props) => {
    const state = {
        "name": "Rahul",
        "class": "5c"
    }
    return (
        <NoteContext.Provider value={ state }>

            {props.children}
        </NoteContext.Provider>
    )

}
export default NoteState;
