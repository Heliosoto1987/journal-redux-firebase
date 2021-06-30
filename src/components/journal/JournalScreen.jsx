//vendor
import React from 'react';
//components
import { NoteScreen } from './notes/NoteScreen';
import { Sidebar } from './Sidebar';
// import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
    return (
        <div className="jourlnal__main-conent">
    
            <Sidebar/>
                <main>
                    {/* <NothingSelected/> */}
                    <NoteScreen/>
                </main>
        </div>
    )
}
