import React from "react";

function useLocalStorage(ItemName, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => { 
    setTimeout(() => {
      try{
        const localStorageItem = localStorage.getItem(ItemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(ItemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      }
      catch(error){
        setLoading(false);
        setError(true);
      }
    },2000);
  }, []);



  const saveItem = (newItem) => {
    localStorage.setItem(ItemName, JSON.stringify(newItem));
    setItem(newItem);
  }; 

  return {
    item, 
    saveItem, 
    loading, 
    error
  };
}

export {useLocalStorage};


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

