import React from "react";

function Todos(props) {

    return (
        <div className="todos">
            <input type="checkbox" className="checkbox" onClick={() => {
                props.onChecked(props.id)
            }}/>
            <li>{props.text}</li>
        </div>    
    )
}

export default Todos;