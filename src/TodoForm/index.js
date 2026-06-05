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
                    type=""
                    className="TodoForm-buttom--cancel">Cancelar</button>
                <button 
                    type="submit"
                    lassName="TodoForm-buttom--cancel">Añadir</button>
            </div>    
        </form>
    );
}

export {TodoForm };