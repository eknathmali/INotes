import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/noteContext";

function AddNote(props) {
  const context = useContext(NoteContext);
  const {  addNote } = context; // using context to get data
  const[note , setNote]  =useState({title :"" ,description :"" , tag:""})

  const handleaddNote = (e) =>{
    e.preventDefault();
            addNote(note.title , note.description , note.tag);
            setNote({title :"" ,description :"" , tag:""});
            props.showAlert("Added Successfully" , "success");
  }

  const onchange = (e)=>{
      setNote({...note, [e.target.name] :e.target.value})
      console.log(note)
  }
  return (
   <>
         <h2>Add a Note</h2>
      <div className="container my-4">
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
            value={note.title}
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              placeholder="Title"
              onChange={onchange}
              minLength={5}
              required
            />
   
          </div>
          <div className="form-group my-3">
            <label htmlFor="description">Description</label>
            <input
            value={note.description}
              type="text"
              className="form-control"
              id="description"
              name="description"
              placeholder="Description"
              onChange={onchange}
              minLength={5}
              required
            />
          </div>
          <div className="form-group my-3">
            <label htmlFor="desc">tag</label>
            <input
            value={note.tag}
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="tag"
              onChange={onchange}
            />
          </div>
     
          <button  disabled={note.title.length>=5&&note.description.length>=5?false:true}  type="submit" className="btn btn-primary my-2" onClick={handleaddNote}>
            Add Note
          </button>
        </form>
      </div>

   </>
  )
}

export default AddNote