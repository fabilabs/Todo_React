import React, { useState } from 'react';
import { TodoContext } from '../TodoContex';
import './TodoSearch.css';

function TodoSearch(){
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

  return(
      <input 
        placeholder="Buscar TODO..." 
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      /> 
  );
}

export { TodoSearch}; 
