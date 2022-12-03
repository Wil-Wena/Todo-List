import React, {useState} from 'react'
import FormControl from './FormControl'
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = t =>{
      if(!t.text || /^\s*$/.test(t.text)){
        return;
      }

      const newTodos = [t,...todos];
      setTodos(newTodos);
      // console.log(...todos);
    }

    //Removes a todo
    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)

      setTodos(removeArr);
    }

    //Updates the todo entered when it is edited
    const updateTodo = (todoId, newValue)=>{
      if(!newValue.text || /^\s*$/.test(newValue.text)){
        return;
      }
      
      setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item))
      );

    }





    const completeTodo = id => {
      let updatedTodos = todos.map(todo =>{
        if(todo.id === id){
          todo.isComplete = !todo.isComplete
        }
        return todo
      })
      setTodos(updatedTodos)
    }

  return (
    <div >
        <h2 className='flex flex-col justify-center items-center'>What's popping?</h2>
        <FormControl onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default TodoList