//import logo from './logo.svg';
import React from 'react';
import './App.css';
import  {AppUI} from './AppUI';
import { TodoProvider } from '../TodoContex';


function App() {

  //console.log('Los usuarios estan buscando Todos de ' + searchValue);

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
