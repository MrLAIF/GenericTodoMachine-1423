import "./create-todo-button.css"
import { TodoContext } from "../TodoContext";
import addIcon from "./add-icon.png"
import React from "react";

function CreateTodoButton(){
  const {
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);
    return (
        <button className="button" 
        onClick={()=>{
          setOpenModal(!openModal)
          }}><img src={addIcon} alt="lol"/></button>
    );
  }

export {CreateTodoButton};
  