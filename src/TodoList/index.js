import "./todo-list.css"

function TodoList(props){
    return (
      <ul className="todo-list">
        {props.children}
      </ul>
    );
  }

export {TodoList};