import React, { useState } from 'react'
import FormControl from './FormControl'
import {BiMessageAltEdit} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'


function Todo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value =>{
        updateTodo(edit.id,value)
        setEdit({
            id: null,
            value:''
        })
    }

    if(edit.id){
        return <FormControl edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div key={index}
            className={todo.isComplete ?
                <div></div> : <div></div>
            }>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='flex flex-row'>
                <AiOutlineCloseCircle onClick={()=>removeTodo(todo.id)}/>
                <BiMessageAltEdit onClick={()=> setEdit({id: todo.id, value: todo.text})}/>
            </div>
        </div>
    ))
}

export default Todo