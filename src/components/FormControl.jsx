import React, { useState, useEffect, useRef } from 'react'

function FormControl(props) {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

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
        
        <form onSubmit={handleSubmit} className='flex flex-row' >
            <input type='text' placeholder='Add a todo'
                value={input}
                name='text'
                onChange={handleChange}
                ref={inputRef}
                autoComplete='off'
                className="bg-gray-50 !outline-none border-2 border-violet-900  text-gray-900 text-sm rounded block  p-1.5 capitalize"
            ></input>
            <button className='p-1.5 text-white bg-violet-900 hover:bg-violet-500'>Add button</button>
        </form>


    )
}

export default FormControl