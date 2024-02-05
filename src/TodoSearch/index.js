import React from "react";
import "./todo-search.css"
import { TodoContext } from "../TodoContext";

function TodoSearch(){

  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  
  return (
  
    <input placeholder="Busca un TODO" className="todo-search-input" 
    value = {searchValue}

    onChange={(event)=>{
      setSearchValue(event.target.value)
    }}/>
  );
}

export {TodoSearch};