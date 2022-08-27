import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-solid fa-trash-can mx-4"
            style={{ color: "red", fontSize: "25px" }}
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Note Deleted Successfully!!", "success");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-4"
            style={{ color: "blue", fontSize: "25px" }}
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
