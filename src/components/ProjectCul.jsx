import React , { useState } from 'react';

function ProjectCul() {
    const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container ">
      <div className="Projectheading">
        <h1>To-Do List</h1>
      </div>
      <div className="Projectform">
        <input onChange={handleChange} type="text" value={inputText} />
        <button className="Projectbutton" onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li className="Projectli">{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCul;