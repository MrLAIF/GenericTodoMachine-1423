import "./todo-item.css"
import check from "./check-icon.png"
import deleteI from "./delete-icon.png"

function TodoItem(props){
    return (
      <li className="todo-item">
        {/* <span>V {props.completed}</span> */}
        <button className="check-button" onClick={props.onComplete}> <img src={check} alt="lol"/> </button> 
        <p className={`todo-text ${props.completed && "todo-text--completed"}`}>{props.text}</p>
        <button className="delete-button" onClick={props.onDelete}> <img src={deleteI} alt="lol"/> </button> 
      </li>
    );
  }

export {TodoItem};
  