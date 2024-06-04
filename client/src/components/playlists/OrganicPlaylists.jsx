import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EyeFill } from 'react-bootstrap-icons'
import YouTube from 'react-youtube'

const OrganicPlaylists = () => {
    const navigate = useNavigate()
    const [organicPlayLists, setOrganicPlayLists] = useState([])
    const fetchOrganicPlayList = async () => {
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/playlist/category/2`)
            const data = await response.json()
            setOrganicPlayLists(data)
        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchOrganicPlayList();
    },[])
    console.log(organicPlayLists)
  return (
    <div className="blog dark:bg-gray-800 ease-linear duration-200">
      <div className="container mx-auto">
        <div className="text-center py-5">
          <h2 className="font-bold text-2xl dark:text-white text-sky-500">
            Without AI Tools
          </h2>
          <div className="">
            {
                organicPlayLists.map((playlist) => (
                  <div key={playlist.id} className='border-b-2 gap-5 py-10 grid md:grid-cols-3'>
                  <div>
                    <YouTube opts={
                      {
                        height: '200',
                        width: '100%',
                        playerVars: {
                          listType: 'playlist',
                          list: playlist?.playlistID,
                        },
                      }

                    } />
                  </div>                        <div className='md:col-span-2 flex gap-y-4 flex-col'>
                    <h2 className="text-lg text-left dark:text-white">{playlist.title.length > 40 ? playlist.title.substring(0, 40) + '...' : playlist.title}</h2>
                    <h2 className="text-sm text-left dark:text-white">{playlist.description.length > 400 ? playlist.description.substring(0, 400) + '...' : playlist.description}</h2>
                    <div className="text-left mt-2">
                      <button onClick={() => navigate(`/playlist/organic/${playlist.playlistID}`)} className='bg-sky-400 md:py-1 md:px-2 flex items-center gap-3 py-1 px-2 rounded my-3 text-white dark:bg-gray-950 dark:hover:bg-white dark:hover:text-black ease-linear duration-200'>View <EyeFill /></button>

                    </div>
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

export default OrganicPlaylists