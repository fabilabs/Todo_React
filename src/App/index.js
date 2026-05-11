//import logo from './logo.svg';
import React from 'react';
import './App.css';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList'; 
import { TodoItem } from '../TodoItem';  
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';


// const defaultTodos = [  
//   {  text: 'leer 5 pag diarias', completed: true },
//   {  text: 'Estudiar React 30 min al dia', completed: false },
//   {  text: 'Hacer ejercicio antes de las 10 am', completed: false },
//   {  text: 'Entrenar TT', completed: true },
//   {  text: 'Chambiar', completed: false }
// ];


// const stringifiedTodos = JSON.stringify(defaultTodos)
// localStorage.setItem('TODOS_V1',stringifiedTodos)

// localStorage.removeItem('TODOS_V1');  
// localStorage.setItem('TODOS_V1', defaultTodos);


function App() {
 
  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(
    todos => !!todos.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );




  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos); 
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  //console.log('Los usuarios estan buscando Todos de ' + searchValue);

  return (
    <React.Fragment>

      <TodoCounter 
        completed ={completedTodos} 
        total={totalTodos} 
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() =>completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
        ))} 
      </TodoList>
      <CreateTodoButton />

    </React.Fragment>
  );
}


export default App;
