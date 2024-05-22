import React from "react";
import { Facebook, Instagram, Youtube, GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Footer = () => {
  return (
    <div className="py-5 bg-sky-600 dark:bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="p-3">
          <div className="px-5">
            <h2 className="text-2xl text-white">Video Gallery</h2>
            <p className="text-gray-500 dark:text-white py-2">Official Youtube Channel | Ali Muhammad</p>
          </div>
          <div className="px-5 min-w-[300px] md:w-[400px] max-w-[500px] h-[200px]">
          <ReactPlayer className='rounded-lg'
                width='100%'
                height='100%'
            url="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1"
          />
          </div>
        </div>
        <div className="p-3">
          <div className="px-5">
            <h2 className="text-2xl text-white">Quick Links</h2>
          </div>
          <div className="menu">
            <ul className="">
              <li className="py-2 px-5 my-2 text-white">
                <Link to="">Home</Link>
              </li>
              <li className="py-2 px-5 my-2 text-white">
                <Link to="playlist">PlayList</Link>
              </li>
              <li className="py-2 px-5 my-2 text-white">
                <Link to="about">About</Link>
              </li>
              <li className="py-2 px-5 my-2 text-white">
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-3">
          <div className="px-5">
            <h2 className="text-2xl text-white">Subscribe for more </h2>
          </div>
          <div className="px-5 py-2">
            <form action="" className="flex items-center gap-0">
              <input placeholder="Newsletter..." type="text" className="px-2 py-2 bg-white outline-none border-solid border-[1px] border-white rounded-tl-lg rounded-bl-lg"  />
              <input type="submit" className="px-2 py-2 bg-yellow-500 text-white border-solid border-[1px] border-white rounded-tr-lg rounded-br-lg" value="SUBSCRIBE" />
            </form>
            <div className="py-3">
              <div className="flex items-center gap-4 py-3">
                <a href="https://www.facebook.com/Mr.Psychoo420" target="_blank">
                  <Facebook className="text-white" size={25}/>
                </a>
                <a href="https://www.instagram.com/ali_farhat_01/" target="_blank">
                  <Instagram className="text-white" size={25}/>
                </a>
                <a href="https://www.youtube.com" target="_blank">
                  <Youtube className="text-white" size={25}/>
                </a>
              </div>
            </div>
            <div className="">
            <div className="flex items-center gap-4 mb-4">
                <button className="grow h-[40px] min-w-[40px] w-[40px] flex items-center justify-center rounded-lg bg-yellow-500 dark:bg-gray-800">
                  <GeoAltFill className="text-white" />
                </button>
                <p className=" text-sm text-white dark:text-white">
                  Employement Society opposite Islamia University of Bahawalpur
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="h-[40px] w-[40px] flex items-center justify-center rounded-lg bg-yellow-500 dark:bg-gray-800">
                  <TelephoneFill className="text-white" />
                </button>
                <p className="text-sm text-white dark:text-white">
                  <a href="tel:+923015080077">+92 301 5080077</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
