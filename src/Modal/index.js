import React from "react";
import { createPortal } from "react-dom";
import { AddTodoInput } from '../AddTodoinput';
import "./Modal.css"

function Modal({ children }){
    return createPortal (
        <div className = "Modal">
            <AddTodoInput />
        </div>,
        document.getElementById("modal")
    )
}

export { Modal };