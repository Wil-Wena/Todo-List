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
        <form onSubmit={handleSubmit} className='flex flex-row h-screen justify-center items-center' >
            <input type='text' placeholder='Add a todo'
                value={input}
                name='text'
                onChange={handleChange}
                ref={inputRef}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 capitalize"
            ></input>
            <button className='px-4 py-2 ml-5 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white'>Add button</button>
        </form>


    )
}

export default FormControl