import React, { useState } from 'react'
import FormControl from './FormControl'
import {BiMessageAltEdit,AiOutlineAntCloud} from 'react-icons'

function Todo() {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
        <div key={index}
            className={todo.isComplete ?
                <div></div> : <div></div>
            }>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div>
                <AiOutlineAntCloud/>
                <BiMessageAltEdit/>
            </div>
        </div>
    ))
}

export default Todo