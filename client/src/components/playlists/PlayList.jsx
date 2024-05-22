import React from 'react'
import AI from '../../images/AI.jpg'
import Organic from '../../images/organic.jpg'
import LazyLoad from 'react-lazyload'
import { useNavigate } from 'react-router-dom'
import { InfoCircleFill } from 'react-bootstrap-icons'

const PlayList = () => {
  const navigate = useNavigate()
  return (
    <div className='blog dark:bg-gray-800 ease-linear duration-200'>
            <div className="text-center py-5">
                <h2 className="font-bold text-2xl dark:text-white text-sky-500">
                    Playlists
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 py-10 place-items-center px-4 gap-3">
                    <div className="block bg-gray-50 dark:bg-gray-900 border rounded-tl-2xl rounded-tr-2xl rounded-bl-xl rounded-br-xl">
                        <div className="min-w-[300px] md:w-[350px] max-w-[500px]">
                            <LazyLoad height={200} offset={100} placeholder={<div className="bg-gray-300 w-full h-full rounded-tl-2xl rounded-tr-2xl"></div>}>
                                <img src={AI} alt="AI" className='w-full h-full rounded-tl-2xl rounded-tr-2xl' />
                            </LazyLoad>                        </div>
                        <div className="text-left p-3">
                            <h2 className="font-bold text-lg md:text-2xl dark:text-white">Playlist related to AI</h2>
                            <button onClick={() => navigate('/playlist/ai')} className='bg-sky-400 md:py-1 md:px-2 flex items-center gap-3 py-1 px-2 rounded my-3 text-white dark:bg-gray-950 dark:hover:bg-white dark:hover:text-black ease-linear duration-200'>Read <InfoCircleFill/></button>
                        </div>
                    </div>
                    <div className="block bg-gray-50 border dark:bg-gray-900 rounded-tl-2xl rounded-tr-2xl rounded-bl-xl rounded-br-xl">
                        <div className="min-w-[300px] md:w-[350px] max-w-[500px]">
                            <LazyLoad height={200} offset={100} placeholder={<div className="bg-gray-300 w-full h-full rounded-tl-2xl rounded-tr-2xl"></div>}>
                                <img src={Organic} alt="organic" className='w-full h-full rounded-tl-2xl rounded-tr-2xl' />
                            </LazyLoad>                        </div>
                        <div className="text-left p-3">
                            <h2 className="font-bold text-lg md:text-2xl dark:text-white">Organic PlayLists</h2>
                            <button onClick={() => navigate('/playlist/organic')} className='bg-sky-400 md:py-1 md:px-2 flex items-center gap-3 py-1 px-2 rounded my-3 text-white dark:bg-gray-950 dark:hover:bg-white dark:hover:text-black ease-linear duration-200'>Read <InfoCircleFill/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default PlayList