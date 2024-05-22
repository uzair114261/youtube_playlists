import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import YouTube from 'react-youtube'

const AIPlaylistView = () => {
    const [playlistData, setPlayListData] = useState()
    const { playlist_id } = useParams()
    const fetchPlayList = async () => {
        const respone = await fetch(`${process.env.REACT_APP_BACKEND_URL}/playlist/playlist/${playlist_id}`)
        const data = await respone.json()
        setPlayListData(data)
    }
    useEffect(() => {
        fetchPlayList()
    }, [])
    console.log(playlistData);
    const opts = {
        height: '500',
        width: '100%',
        playerVars: {
          listType: 'playlist',
          list: playlistData?.playlistID,
        },
        
      };
    return (
        <div className='p-2 dark:bg-gray-800'>
            <YouTube opts={opts} />
            <div className='py-2 px-2 dark:text-white'>
                <h2 className='text-xl font-bold'>{playlistData?.title}</h2>
                <div className='bg-sky-50 p-4 rounded-lg my-4 text-sm dark:bg-gray-700 dark:text-white'>{playlistData?.description}</div>
            </div>
        </div>
    )
}

export default AIPlaylistView