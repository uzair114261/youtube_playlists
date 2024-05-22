import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeFill } from 'react-bootstrap-icons'

const AIPlaylists = () => {
    const navigate = useNavigate()
    const [aiPlayLists, setAiPlayLists] = useState([])
    const fetchAIPlayList = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}playlist/category/1`)
            const data = await response.json()
            setAiPlayLists(data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchAIPlayList();
    },[])
  return (
    <div className="blog dark:bg-gray-800 ease-linear duration-200">
      <div className="container mx-auto">
        <div className="text-center py-5">
          <h2 className="font-bold text-2xl dark:text-white text-sky-500">
            AI Playlists
          </h2>
          <div className="flex flex-wrap py-10 px-4 gap-3 justify-center">
            {
                aiPlayLists.map((playlist) => (
                    <div key={playlist.id} className='rounded-lg border border-solid border-gray-300 p-2'>
                        <h2 className="text-lg dark:text-white">{playlist.title.length > 25 ? playlist.title.substring(0,25)+'...' : playlist.title}</h2>
                        <div className="text-left mt-2">
                        <button onClick={()=> navigate(`/playlist/ai/${playlist.playlistID}`)} className='bg-sky-400 md:py-1 md:px-2 flex items-center gap-3 py-1 px-2 rounded my-3 text-white dark:bg-gray-950 dark:hover:bg-white dark:hover:text-black ease-linear duration-200'>View <EyeFill /></button>

                        </div>
                    </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIPlaylists