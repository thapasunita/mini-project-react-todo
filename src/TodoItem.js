import React from "react";

function TodoItem(props) {
  // Create a state with properties: id, text, completed.

  
    return (
      <div className="todo-item"> 
        <input type="checkbox" checked={props.completed}  />
        <label>{props.text}</label>
      </div>
    );
    }
export default TodoItem;
