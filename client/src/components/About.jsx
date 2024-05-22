import React from "react";
import aboutImg from "../images/about.jpg";

const About = () => {
  return (
    <div>
      <div className="md:h-[500px] dark:bg-gray-700">
        <div className="container mx-auto">
          <div className="flex md:gap-[200px] md:h-[400px] justify-center items-center flex-wrap-reverse">
            <div className="p-5 md:w-[50%]">
              <div className="dark:text-white">
                <div>
                  <h1 className="font-bold">ABOUT US</h1>
                  <h1 className=" font-medium text-3xl">
                    Welcome to Ali Muhammad's Vlogging World!
                  </h1>
                  <p className="text-sm text-justify">
                    Hi there! I'm Ali Muhammad, a passionate vlogger dedicated
                    to bringing you the best of travelling, tech, lifestyle
                    content. With a camera in hand and a thirst for adventure, I
                    set out to explore, document, and share the incredible
                    stories and experiences that the world has to offer.
                  </p>
                </div>
                <div className="text-justify mt-4">
                  <h2 className="text-xl font-medium">My Journey</h2>
                  <p className="text-sm">
                    My vlogging journey began in [Year], fueled by a love for
                    storytelling and a desire to connect with people from all
                    walks of life. What started as a simple hobby quickly turned
                    into a full-fledged passion, and I haven't looked back
                    since. Through my YouTube channel, I've had the privilege of
                    reaching a diverse and amazing audience, and I'm grateful
                    for every single one of you who tunes in to watch my videos.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[250px] h-[250px] mb-20 md:mb-10 mt-10">
              <img
                src={aboutImg}
                style={{ borderRadius: "30% 70% 70% 30% / 54% 59% 41% 46% " }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
          <div className="p-5 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="bg-white p-2 md:p-5 rounded-lg border border-gray-300 dark:bg-gray-600 dark:text-white cursor-pointer hover:bg-gray-100 ease-linear duration-200 dark:hover:bg-white dark:hover:text-black">
                <h1 className="text-xl md:text-3xl font-bold  text-sky-400 py-2 ">The Tech Enthusiast</h1>
                <p className="text-justify text-sm">
                While my heart belongs to the open road and the thrill of new adventures, I am equally captivated by the ever-evolving world of technology. Whether it's unboxing the latest gadgets, reviewing cutting-edge tech, or sharing tips and tricks to make your life easier, I am always on the lookout for innovations that can enhance our journeys and everyday lives.
                </p>
              </div>
              <div className="bg-white p-2 md:p-5 rounded-lg border border-gray-300 dark:bg-gray-600 dark:text-white cursor-pointer hover:bg-gray-100 ease-linear duration-200 dark:hover:bg-white dark:hover:text-black">
              <h1 className="text-xl md:text-2xl font-bold  text-sky-400 py-2 ">Why Follow My Adventures?</h1>
                <p className="text-justify text-sm">
                On my YouTube channel, you’ll find a blend of travel vlogs, tech reviews, and practical guides to help you navigate both your travels and the digital world. My goal is to inspire and inform, providing you with authentic experiences and honest insights. Whether you're a fellow traveler, a tech geek, or someone who enjoys a good story, there's something here for everyone.
                </p>
              </div>
              <div className="bg-white p-2 md:p-5 rounded-lg border border-gray-300 dark:bg-gray-600 dark:text-white cursor-pointer hover:bg-gray-100 ease-linear duration-200 dark:hover:bg-white dark:hover:text-black">
              <h1 className="text-xl md:text-2xl font-bold  text-sky-400 py-2 ">Join the Community</h1>
                <p className="text-justify text-sm">
                Let's embark on this incredible journey together! Subscribe to my channel, follow me on social media, and become part of a community that celebrates curiosity, adventure, and the endless possibilities of technology. Your support and engagement mean the world to me, and I look forward to sharing many more adventures with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
