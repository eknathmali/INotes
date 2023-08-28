import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const initialnotes = [];

  const [notes, setNotes] = useState(initialnotes);

  // Get alll a note
  const getNotes = async ( ) => {
    // TODO : API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    });
    const res =  await response.json();
        // console.log(res);
      if(res) setNotes(res);
  };



  // Add a note
  const addNote = async (title, description, tag ) => {
    // TODO : API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag:!tag?"genere":tag }),
    });
    const note = await response.json();

    // console.log("Adding a new Note");
    // const note = {
    //   _id: "64db24e21001f2e095c1c0ff3",
    //   user: "64d9d16d70cdb27a144b40f1",
    //   title: title,
    //   description: description,
    //   tag: tag,
    //   date: "2023-08-15T07:10:26.516Z",
    //   __v: 0,
    // };
    setNotes([note, ...notes]);
  };



  // Delete a note
  const deleteNote = async(id) => {

    // let response =  await fetch(`${host}/api/notes/deletenote/${id}`, {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
    
    });

    // const res =  await response.json();
    const newNote = notes.filter((note) => {     // onyl for client side
      return note._id !== id;
    });
    // getNotes();
    setNotes(newNote);
  };

  // edit a note

  const editNote = async (id, title, description, tag = "General") => {
    // API CALL

    // const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          localStorage.getItem('token'),
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const res =  await response.json();

    let newNote = JSON.parse(JSON.stringify(notes))

    // logic to edit in client
    for (let i = 0; i < newNote.length; i++) {
      if (newNote[i]._id === id) {
        newNote[i].title = title;
        newNote[i].description = description;
        newNote[i].tag = tag;
        break;
      }
    }
    setNotes(newNote);
    // getNotes();
  };

  return (
    <NoteContext.Provider value={{ notes,getNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
