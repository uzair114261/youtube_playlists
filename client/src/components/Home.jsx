import React from 'react'
import ReactPlayer from 'react-player'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

const Home = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const slider = useRef(null)
  return (
    <div className=''>
      <div className="hero flex items-center">
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
          </div>
        </div>
      </div>
      <div className='px-5 bg-gray-100'>
        <div className="text-center py-3">
          <h1 className="text-2xl font-[600]">Feature Videos</h1>
        </div>
        <div className="py-2 slider-container relative">
          <Slider {...settings} ref={slider} className='py-3'>
            {/* Slide 1 */}
            <div className="px-2 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
              <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
                url="https://www.youtube.com/embed/videoseries?si=Qk8HL_rJy9it_KzG&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
              />
            </div>
            {/* Slide 2 */}
            <div className="px-2 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
              <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
                url="https://www.youtube.com/embed/videoseries?si=Qk8HL_rJy9it_KzG&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
              />
            </div>
            {/* Slide 3 */}
            <div className="px-2 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
              <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
                url="https://www.youtube.com/embed/videoseries?si=Qk8HL_rJy9it_KzG&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
              />
            </div>
            {/* Slide 4 */}
            <div className="px-2 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
              <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
                url="https://www.youtube.com/embed/videoseries?si=Qk8HL_rJy9it_KzG&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
              />
            </div>
            {/* Slide 5 */}
            <div className="px-2 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
              <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
                url="https://www.youtube.com/embed/videoseries?si=Qk8HL_rJy9it_KzG&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
              />
            </div>
            {/* Slide 6 */}
            <div className="px-2 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
              <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
                url="https://www.youtube.com/embed/videoseries?si=Qk8HL_rJy9it_KzG&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
              />
            </div>
            {/* Slide 7 */}
            <div className="px-2 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
              <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
                url="https://www.youtube.com/embed/videoseries?si=Qk8HL_rJy9it_KzG&amp;list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
              />
            </div>
          </Slider>
          <div className="flex justify-center gap-3">
            <button onClick={() => slider?.current?.slickPrev()} className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center'><ChevronLeft size={20}/></button>
            <button onClick={() => slider?.current?.slickNext()} className='w-[40px] h-[40px] rounded-full bg-white flex items-center justify-center'><ChevronRight size={20}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
