import React, { useState, useEffect } from "react";
import { InfoCircleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const OrganicBlogs = () => {
  const navigate = useNavigate()
  const [organicBlog, setOrganicBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOrganicBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/blogs/category/2`
      );
      const data = await response.json();
      setOrganicBlog(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrganicBlogs();
  }, []);

  const dateTimeConvert = (blogDate) => {
    const date = new Date(blogDate);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    const formattedDate = `${day}/${month}/${year}`;
    return `${formattedDate}`;
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-[500px]">
        <div className="loader"></div>
      </div>
    )
  }
  return (
    <div className="blog dark:bg-gray-800 ease-linear duration-200">
      <div className="container mx-auto">
        <div className="text-center py-5">
          <h2 className="font-bold text-2xl dark:text-white text-sky-500">
            Without AI Blogs
          </h2>
          <div className="block">
            {organicBlog.map((blog) => (
              <div
                key={blog.id}
                className="flex my-3 bg-gray-50 dark:bg-gray-900 border rounded-tl-2xl rounded-tr-2xl rounded-bl-xl rounded-br-xl"
              >
                <div className="min-w-[300px] md:w-[300px] h-[200px] max-w-[500px]">
                  <img
                    src={`${process.env.REACT_APP_BACKEND_URL}${blog.image}`}
                    alt=""
                    className="w-full h-full rounded-tl-2xl rounded-bl-2xl"
                  />
                </div>
                <div className="text-left p-3">
                  <h2 className="font-bold text-lg md:text-xl dark:text-white">
                    {blog.title}
                  </h2>
                  <div className="py-2 text-white">
                    <p>{blog.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button onClick={() => navigate(`/blogs/organic/${blog.slug}`)} className="bg-sky-400 py-1 px-2 flex gap-2 items-center rounded my-3 text-white dark:bg-gray-950 dark:hover:bg-white dark:hover:text-black ease-linear duration-200">
                      Read <InfoCircleFill />
                    </button>
                    <div className="text-gray-500">
                      {dateTimeConvert(blog?.created_at)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicBlogs;
