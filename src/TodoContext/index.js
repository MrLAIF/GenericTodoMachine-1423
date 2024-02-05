import React, { Children } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();
    

function TodoProvider({children}){

    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
        const completedTodos = todos.filter(todo=>
        !!todo.completed
        ).length;

        const totalTodos = todos.length;



    const [searchValue, setSearchValue] = React.useState('');
        console.log(searchValue);
        
    const searchedTodos = todos.filter(
        
        (todo)=>{
        const todoText = todo.text.toLocaleLowerCase();
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
        }
    );

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        });
        saveTodos(newTodos);
    };

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo=>todo.text === text);
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo=>todo.text === text);
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    

    const [openModal, setOpenModal] = React.useState(false);

    return(
        <TodoContext.Provider value = {{
            loading,
            error,
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   {text: "AAAAAA", completed: false},
//   {text: "lol", completed: true},
//   {text: "mas lol", completed: false},
//   {text: "hola", completed: false},
//   {text: "djaosidjo", completed: false},
//   {text: "AAAAAAAAAA", completed: true},
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));