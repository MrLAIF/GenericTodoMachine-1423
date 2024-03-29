import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { AddTodoInput } from '../AddTodoinput';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal'
import "../app-container.css"
import React from 'react';
 
function AppUI(){
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext)

    return (
        <div className='app-container'>
          <div className='left-side'>
              <TodoSearch/>
            {/* {loading ? <TodosLoading />
              : <TodoCounter/>
            } */}
            <TodoCounter/>
          </div>
    
          <div className='right-side'>
              <TodoList className="todo-list">
              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!loading && searchedTodos.length == 0) && <EmptyTodos />}

              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={()=>completeTodo(todo.text)}
                  onDelete={()=>deleteTodo(todo.text)}
                  />
              ))}
              </TodoList>
          </div>
          <CreateTodoButton />

          {openModal && ( 
          <Modal>
          </Modal>
          )}

        </div>
      );
}

export { AppUI }