import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.js";
import datas from "./todo-data";


function App() {
  let todoEle = [];
    for (const data of datas) {
      todoEle.push(<TodoItem  key={data.id} text={data.text} completed={data.completed}/>)
    }
  
    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
      {todoEle}
      </div>
    );
  
}

export default App;
