import './CreateTodoButtom.css';

function CreateTodoButton(){
  return(
    <button 
      className="CreateTodoButtom"
      onClick = {
        (event) => console.log('Click en el boton')
      }
    >+</button>
  );
}

export { CreateTodoButton };