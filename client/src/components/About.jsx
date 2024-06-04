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
                  <h1 className=" font-medium text-3xl underline ">
                  Welcome to Mastering in Vlogging 
                  </h1>
                  <p className="text-normal text-justify py-5 font-[400]">
                    Hi there! I'm Ali Muhammad, a passionate vlogger dedicated
                    to bringing you the best of travelling, tech, lifestyle
                    content. <br />
                    With a camera in hand and a thirst for adventure, I
                    set out to explore, document, and share the incredible
                    stories and experiences that the world has to offer.
                  </p>
                </div>
                <div className="text-justify mt-4">
                  <h2 className="text-xl font-medium py-1">Our Mission</h2>
                  <p className=" font-[400]">
                  At Mastering in Vlogging, our mission is to empower aspiring vloggers and content creators by providing comprehensive guidance, resources, and tools. We believe that whether you embrace cutting-edge AI technology or prefer traditional methods, you can achieve extraordinary results and build a successful YouTube channel.
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
                <h1 className="text-xl md:text-3xl font-bold  text-sky-400 py-2 ">What We Offer</h1>
                <p className="text-justify text-sm">
                1-Expert Guides and Tutorials <br />
                2-AI and Non-AI Approaches <br />
                3-Tool Recommendations <br />
                4-Success Stories and Case Studies <br />
                5-Community Support

                </p>
              </div>
              <div className="bg-white p-2 md:p-5 rounded-lg border border-gray-300 dark:bg-gray-600 dark:text-white cursor-pointer hover:bg-gray-100 ease-linear duration-200 dark:hover:bg-white dark:hover:text-black">
              <h1 className="text-xl md:text-2xl font-bold  text-sky-400 py-2 ">Why Choose Us</h1>
                <p className="text-justify text-sm">
                Comprehensive Learning: We offer a balanced approach, catering to both tech-savvy creators looking to leverage AI and those who prefer hands-on, traditional methods. <br />
                Expert Insights: Learn from industry experts and experienced vloggers who share practical tips, tricks, and insider knowledge. <br />
                Ongoing Updates: Stay ahead of the curve with our regular updates on the latest trends, tools, and techniques in the vlogging world. <br />
                </p>
              </div>
              <div className="bg-white p-2 md:p-5 rounded-lg border border-gray-300 dark:bg-gray-600 dark:text-white cursor-pointer hover:bg-gray-100 ease-linear duration-200 dark:hover:bg-white dark:hover:text-black">
              <h1 className="text-xl md:text-2xl font-bold  text-sky-400 py-2 ">Join the Community</h1>
                <p className="text-justify text-sm">
                Ready to take your vlogging skills to the next level? 
                Explore our resources, engage with our community, 
                and start your journey to YouTube success today. 
                At Mastering in Vlogging, we’re committed to helping 
                you achieve your goals and create content that captivates and inspires. <br />

                Welcome to the community. Let’s create, grow, and succeed together!






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
