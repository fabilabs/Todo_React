import React from "react";
import './TodoForm.css';

function TodoForm(){
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Agregar una tarea aqui"    
            />
            <div className="TodoFrom-buttomContainer">
                <button 
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
                <button 
                    type="submit"
                    className="TodoForm-button TodoForm-button--add">Añadir</button>
            </div>    
        </form>
    );
}

export {TodoForm };