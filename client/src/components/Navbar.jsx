import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { List, X } from 'react-bootstrap-icons'
import DarkModeToggle from '../context/DarkmodeToggle'

const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false)
    return (
        <>
            <div className='p-2 bg-teal-50 dark:bg-gray-950'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        <div className="logo">
                            <h1 className='text-2xl dark:text-white'>M.ALi Farhat</h1>
                        </div>
                        <div className="menu hidden md:block">
                            <ul className='flex gap-4 dark:text-white'>
                                <li><Link to="">Home</Link></li>
                                <li><Link to="playlist">PlayList</Link></li>
                                <li><Link to="about">About</Link></li>
                                <li><Link to="contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="text" placeholder='search' className='p-2 border-[1px] border-solid rounded text-sm outline-blue-500 hidden md:block dark:outline-none dark:bg-gray-800 dark:border-none dark:text-white ' />
                            <div>
                                <DarkModeToggle />

                            </div>
                            <button className='flex md:hidden mr-3' onClick={() => setToggleIcon(!toggleIcon)}>
                                {toggleIcon ? <X size={22} className='dark:text-white' /> : <List size={22} className='dark:text-white' />}
                            </button>

                        </div>
                    </div>
                </div>

            </div>
            {
                toggleIcon && (
                    <div className='h-[calc(100vh-40px)]  fixed bg-blue-50 dark:bg-gray-900 top-[48px] left-0 right-0 bottom-0'>
                        <div className="search-box flex justify-center mt-3 ">
                            <input type="text" placeholder='Search...' className='p-1 px-3 text-sm border-solid border-blue-400 border-[1px] outline-blue-500 dark:bg-gray-700 dark:border-white dark:outline-none dark:text-white rounded-lg w-3/4' />
                        </div>
                        <div className="menu">
                            <ul className='p-3'>
                                <li className='py-2 my-2 bg-teal-200 dark:bg-white dark:text-black rounded text-center text-white cursor-pointer'><Link to="">Home</Link></li>
                                <li className='py-2 my-2 bg-teal-200 dark:bg-white dark:text-black rounded text-center text-white cursor-pointer'><Link to="playlist">PlayList</Link></li>
                                <li className='py-2 my-2 bg-teal-200 dark:bg-white dark:text-black rounded text-center text-white cursor-pointer'><Link to="about">About</Link></li>
                                <li className='py-2 my-2 bg-teal-200 dark:bg-white dark:text-black rounded text-center text-white cursor-pointer'><Link to="contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                )
            }

        </>

    )
}

export default Navbar