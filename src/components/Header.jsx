import React from 'react'
import AdddedList from './AdddedList'
import Nav from './Nav'

function header() {
    return (
        <div className='min-h-screen bg-gray-200'>
            <div className='container mx-auto px-4 py-2'>
                <nav className='flex flex-row justify-between w-full mt-10 px-4'>
                    <img src='https://cdn-icons-png.flaticon.com/512/5290/5290058.png' className='w-12' alt='Tick' ></img>
                    <img src='https://cdn-icons-png.flaticon.com/512/87/87251.png' className='w-12' alt='Tick' ></img>
                </nav>
                <header className=' mt-10 text-center'>
                    <h1 className='text-center text-4xl border-green-400 border-b-4'>
                        <b>Tasks</b> Lists
                    </h1>
                    <button className=' mt-4 p-5 bg-white m-2 hover:bg-green-300'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1828/1828819.png' alt='Plus Sign' className='w-10'></img>
                    </button>
                    <div className='text-gray-400'>Add Task</div>
                </header>
                <AdddedList />
                {/* <nav className='flex justify-between'>
                    <div className='w-1/3 border text-center hover:bg-blue-400'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1828/1828866.png' alt='Home Icon'
                            className='w-4 block mx-auto p-3 box-border'></img>
                    </div>
                    <div className='w-1/3 border'></div>
                    <div className='w-1/3 border'></div>
                </nav> */}
                <Nav/>
            </div>
        </div>)
}

export default header