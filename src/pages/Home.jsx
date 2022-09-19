import React, {useEffect, useState} from 'react';
import Form from "../components/Form";
import Notes from "../components/Notes";
import {NoteService} from "../Services/NoteService";

const Home = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes()
    }, [])

    async function fetchNotes() {
        const notes = await NoteService.getAllNotes()
        setNotes(notes)
    }

    const deleteNote = async (noteId) => {
        NoteService.deleteNote(noteId)
        const notes = await NoteService.getAllNotes()
        setNotes(notes)
    }

    const addNote = async () => {
        const notes = await NoteService.getAllNotes()
        setNotes(notes)
    }

    return (
        <React.Fragment>
            <Form addNote={addNote}/>
            <hr/>
            {notes.length !== 0
                ? <Notes notes={notes} deleteNote={deleteNote} />
                : <div>Запланированные задачи отсутсвуют</div>
            }
        </React.Fragment>
    );
};

export default Home;