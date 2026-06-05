import './CreateTodoButtom.css';

function CreateTodoButton({ setOpenModal }){
  return(
    <button 
      className="CreateTodoButtom"
      onClick = {
        () => {
          setOpenModal(state => !state);
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };