import "./add-todo-input.css"
import { TodoContext } from "../TodoContext";
import React from "react";

function AddTodoInput(){
  const{
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }


  const onCancel = (event) => {
    setOpenModal(false)
  }

  const onChange = (event) =>{
    setNewTodoValue (event.target.value);
  }
    return (
      // <input placeholder="Añade algo para hacer" className="todo-input"/>
      <form onSubmit={onSubmit}>
        <label>Añade algo para hacer</label>
        <textarea placeholder = "algoss"
          value = {newTodoValue}
          onChange = {onChange}
        ></textarea>
        <div className="TodoForm-buttonContainer">
          <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
          <button type="button" className="TodoForm-button TodoForm-button--add" onClick={onSubmit}>Añadir</button>
        </div>
      </form>
    );
  }

export {AddTodoInput};