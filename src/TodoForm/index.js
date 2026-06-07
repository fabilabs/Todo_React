import React from "react";
import { TodoContext } from '../TodoContex';
import './TodoForm.css';

function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) => {
            event.preventDefault();
            addTodo(newTodoValue);
            setOpenModal(false);
        };

    const onCancel = () => {
            setOpenModal(false);
        };

    const onChange = (event) => {
            setNewTodoValue(event.target.value);
        };


    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Agregar una tarea aqui"    
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoFrom-buttomContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                    >Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>    
        </form>
    );
}

export {TodoForm };