import React, { useState } from "react";
import KeeperHeader from "./KeeperHeader";
import KeeperNote from "./KeeperNote";
import KeeperCreateArea from "./KeeperCreateArea";

function KeeperApp() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="Keeperbody">
      <KeeperHeader />
      <KeeperCreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <KeeperNote
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
     
    </div>
  );
}

export default KeeperApp;
