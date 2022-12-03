import React, { useState } from 'react'
import FormControl from './FormControl'
import Todo from './Todo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = t => {
    if (!t.text || /^\s*$/.test(t.text)) {
      return;
    }

    const newTodos = [t, ...todos];
    setTodos(newTodos);
    // console.log(...todos);
  }

  //Removes a todo
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id)

    setTodos(removeArr);
  }

  //Updates the todo entered when it is edited
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
    );

  }





  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='flex bg-purple-400'>
      <div className='flex flex-col p-6 mt-20 mx-auto justify-center items-center max-w-sm shadow-md shadow-indigo-800 bg-violet-800'>
        <h2 className='text-white p-2'>What's on your mind today?</h2>
        <FormControl onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
      </div>
    </div>

  )
}

export default TodoList