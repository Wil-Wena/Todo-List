import React, { useState } from 'react'

function FormControl(props) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }
   
   
    const handleSubmit = e => {
        e.preventDefault();
        //id Generator
        props.onSubmit({
            id: Math.floor(Math.random()* 100000),
            text: input
        })

        setInput('')
    }



    return (
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Add a todo'
                value={input}
                name='text'
                onChange={handleChange}
            ></input>
            <button>Add button</button>
        </form>


    )
}

export default FormControl