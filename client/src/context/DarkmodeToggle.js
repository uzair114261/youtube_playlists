import React, { useState, useEffect } from 'react'

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'true') {
          setDarkMode(true);
          document.body.classList.add('dark');
        }
      }, []);
    
      const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        document.body.classList.toggle('dark'); 
      };
    return (
        <div className=''>
            <button onClick={toggleDarkMode}>
                {
                  darkMode ? (
                    <button className='p-1 text-[12px] md:p-2 bg-gray-700 text-white border-[1px] border-solid rounded text-sm'>Light Mode</button>
                  ) : (
                    <button className='p-1 text-[12px] md:p-2 bg-sky-400 text-white rounded text-sm'>Dark Mode</button>
                  )
                }
            </button>
        </div>
    )
}

export default DarkModeToggle