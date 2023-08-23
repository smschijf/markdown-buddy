"use client";

import { useState } from "react";

import { saveNote } from "../../page.js";

const NoteContainer = () => {
  const [editMode, setEditMode] = useState(false);
  const [noteText, setNoteText] = useState("");

  const handleSwitchEdit = () => {
    setEditMode(!editMode);
    if (editMode) {
      saveNote(noteText);
    }
  };

  const handleNoteInputChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleSaveNote = () => {
    saveNote(noteText);
  };

  return (
    <div id="noteContainer">
      {editMode ? (
        <textarea
          id="noteInput"
          rows="10"
          cols="50"
          value={noteText}
          onChange={handleNoteInputChange}
        ></textarea>
      ) : (
        <div id="preview">
          {noteText}
          {/* <button onClick={handleSaveNote}>Save</button> */}
        </div>
      )}
      <button id="switchEditButton" onClick={handleSwitchEdit}>
        {editMode ? "Preview" : "Edit"}
      </button>
    </div>
  );
};

export default NoteContainer;
