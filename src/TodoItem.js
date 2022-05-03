import React from "react";

class TodoItem extends React.Component {
  // Create a state with properties: id, text, completed.

  render() {
    return (
      <div className="todo-item">
        <input type="checkbox" />
        <label></label>
      </div>
    );
  }
}

export default TodoItem;
