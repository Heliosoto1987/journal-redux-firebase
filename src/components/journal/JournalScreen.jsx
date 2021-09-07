//vendor
import React from 'react';
import { useSelector } from 'react-redux';
//components
import { NoteScreen } from './notes/NoteScreen';
import { Sidebar } from './Sidebar';
import { NothingSelected } from './NothingSelected';

export const JournalScreen = () => {
    const {active} = useSelector(state => state.notes    )

    return (
        <div className="jourlnal__main-conent">
    
            <Sidebar/>
                <main>
                    {
                        (active)
                        ? <NoteScreen/>
                        : <NothingSelected/> 
                         
                        
                    }
                </main>
        </div>
    )
}
