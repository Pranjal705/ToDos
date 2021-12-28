import React from 'react'
import {TodoItem} from './TodoItem'

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "50px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="text-center my-3">Todos list</h3>
            {/* <TodoItem todo={props.todos[0]}/> */}
            {props.todos.length===0? "No todos to display":
            props.todos.map((todo)=> {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}
        </div>
    )
}
