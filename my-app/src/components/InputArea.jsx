import React, { useState } from "react";

function InputArea(props) {
    const [todo, setTodo] =  useState("");

    function handleChange(event) {
        const newTodo = event.target.value;
        setTodo(newTodo)
    }

    function handleClick() {
        props.onAdd(todo);
        setTodo("");
    }


    return (
        <div  className="input">
            <input name="Items" placeholder="Add new" value={todo} onChange={handleChange}/>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
export default InputArea;