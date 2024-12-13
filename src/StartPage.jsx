import React, { useState } from "react";
import "./App.css";
import StackIcon from "./StackIcon";


function StartPage() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState(""); 
  const [showPopup, setShowPopup] = useState(false); 
  const [currentStack, setCurrentStack] = useState([]); 

  const handleAddItem = () => {
    if (newItem.trim() === "") return;
    setCurrentStack([...currentStack, newItem]);
    setNewItem("");
  };

  const handleSaveStack = () => {
    if (currentStack.length === 0) return;
    setData([...data, { items: currentStack, visible: false }]); 
    setCurrentStack([]); 
    setShowPopup(false); 
  };

  const handleDeleteItem = (index, stackIndex) => {

    const updatedStack = data[stackIndex].items.filter((_, i) => i !== index);
    const updatedData = [...data];


    if (updatedStack.length === 0) {
      updatedData.splice(stackIndex, 1); 
    } else {
      updatedData[stackIndex].items = updatedStack; 
    }

    setData(updatedData);
  };

  const toggleStackVisibility = (stackIndex) => {

    const updatedData = [...data];
    updatedData[stackIndex].visible = !updatedData[stackIndex].visible;
    setData(updatedData);
  };

  return (
    <div className="App">
      <StackIcon size={200} />
      <h1></h1>
      <button onClick={() => setShowPopup(true)} className="add-btn">
        Add New Stack
      </button>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Create a New Stack</h2>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Enter item"
            />
            <button onClick={handleAddItem} className="popup-btn">
              Add Item
            </button>
            <button onClick={handleSaveStack} className="popup-btn-save">
              Save Stack
            </button>
            <button
              onClick={() => setShowPopup(false)}
              className="popup-btn-del"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="stacks-container">
        {data.map((stack, stackIndex) => (
          <div key={stackIndex} className="stack">
            <button
              className="stack-btn"
              onClick={() => toggleStackVisibility(stackIndex)}
            >
              View Stack {stackIndex + 1}
            </button>

            {stack.visible && (
              <ul>
                {stack.items.map((item, index) => (
                  <li key={index} className="list-item">
                    {item}
                    <button
                      onClick={() => handleDeleteItem(index, stackIndex)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default StartPage;