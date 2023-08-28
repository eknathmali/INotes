
import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
function Noteitem(props) {
  const { note , updateNote} = props;
  const context = useContext(NoteContext);
  const {deleteNote} = context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
            <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          <i className="fa-regular fa-trash-can mx-2" onClick={ ()=>{ deleteNote(note._id); props.showAlert("Deleted Successfully" , "success")}}></i>
          <i className="fa-regular fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
            </div>
          <p className="card-text">{note.description}</p>
          <p  className="btn btn-primary">
            {note.date?new Date(note.date).toLocaleString():""}
          </p> 
      
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
