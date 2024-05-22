import React from 'react'
import ReactPlayer from 'react-player'

const Home = () => {
  return (
    <div className=''>
      <div className="hero">
        <div className="text-center py-5 md:py-10  md:w-6/12 mx-auto">
          <h1 className="text-xl md:text-5xl font-bold text-white">How You can grow yourself by organically and through AI</h1>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap md:justify-between items-center gap-2 px-4">
          <div className="px-2 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
          <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
            url="https://www.youtube.com/embed/videoseries?si=Qk8HL_rJy9it_KzG&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
          />
          </div>
          <div className="px-2 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
          <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
            url="https://www.youtube.com/embed/videoseries?si=Qk8HL_rJy9it_KzG&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
          />
          </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
