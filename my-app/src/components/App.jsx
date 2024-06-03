import React, { useState } from "react";
import InputArea from "./InputArea";
import Todos from "./Todos";

function App() {
    const [listofDos, setList] =  useState([]);

    function addItems(todo) {
        setList(preList => {
            return [...preList, todo]
        })
    }

    function deleteItem(id) {
        setList(prevList => {
            return listofDos.filter((item, index) => {
                return index !== id;
            })
        })
    }


    return (
        <div className="container">
            <div className="heading">
                <h1>THINGS TO DO</h1>
            </div>
            <InputArea onAdd={addItems}/>
            <ul>
                <div>
                    {listofDos.map((item, index) => {
                        return <Todos 
                        key={index}
                        id={index}
                        text={item}
                        onChecked={deleteItem}
                        />
                    })}
                </div>
            </ul>
        </div>
    )
}

export default App;