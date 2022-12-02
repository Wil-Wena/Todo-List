import React, {useState} from 'react'
import FormControl from './FormControl'

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = t =>{
      if(!t.text || /^\s*$/.test(t.text)){
        return;
      }

      const newTodos = [t,...todos];
      setTodos(newTodos);
      console.log(...todos);
    }

    

  return (
    <div>
        <h2>What's popping?</h2>
        <FormControl onSubmit={addTodo} />
    </div>
  )
}

export default TodoList