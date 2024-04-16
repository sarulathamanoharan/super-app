import React, { useState, useEffect } from "react";
import style from "./NotesWidget.module.css";

function NotesWidget() {
  const [note, setNote] = useState();

  useEffect(() => {
    setNote(localStorage.getItem("note", note));
  }, []);

  useEffect(() => {
    if (note) {
      localStorage.setItem("note", note.trim()); //removing whitespaces before and after a string
    }
  }, [note]);

  return (
    <div className={style.notesWidget}>
      <h1 className={style.header}>All Notes</h1>
      <textarea
        className={style.input}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        type="text"
      />
    </div>
  );
}

export default NotesWidget;
