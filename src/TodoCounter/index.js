import React from "react";
import "./todo-counter.css"
import { TodoContext } from "../TodoContext";

function TodoCounter({total, completed}){
  const {
    completedTodos,
    totalTodos,
    loading
  } = React.useContext(TodoContext)

    return (
      <p className="completado">
        {loading ?
        "Cargando TODOs"
        : completedTodos===totalTodos
          ? "Felicidades, haz completado todos tus TODOs"
          : `Haz completado ${completedTodos} de ${totalTodos} TODOs`}
      </p>
    );
  }

export {TodoCounter};