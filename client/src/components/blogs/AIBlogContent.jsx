import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const AIBlogContent = () => {
    const { slug } = useParams()
    const [blogData, setBlogData] = useState(null)
    const [loading, setLoading] = useState(false)
    const fetchBlogContent = async () => {
        try {
            setLoading(true)
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/blogs/category/${slug}`)
            const data = await response.json()
            setBlogData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchBlogContent();
    }, [slug])

    const dateTimeConvert = (blogDate) => {
        const date = new Date(blogDate);
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        const formattedDate = `${day}/${month}/${year}`;
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        return `${formattedDate} at ${formattedTime}`;
    }

    if (loading) {
        return (
          <div className="flex items-center justify-center w-screen h-[500px]">
            <div className="loader"></div>
          </div>
        )
      }
      
    return (
        <div>
            {
                loading ? (
                    <div className='w-screen h-screen fixed top-0 left-0 flex items-end justify-center'></div>
                ) : (
                    <div>
                        {
                            <div className='md:px-10 md:py-20'>
                                <div className="px-4 py-5 md:py-0 md:w-[400px] mx-auto">
                                    <img className='rounded-lg' src={`${process.env.REACT_APP_BACKEND_URL}/${blogData?.image}`} alt="" />
                                </div>
                                <div className='px-4 py-5'>
                                    <h2 className="text-xl font-bold py-3">{blogData?.title}</h2>
                                    <p className='text-justify'>{blogData?.content}</p>
                                    <div className="text-gray-500 flex items-center justify-end">
                                        {dateTimeConvert(blogData?.created_at)}
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                )
            }
        </div>
    )
}

export default AIBlogContent