import React, {useState} from "react";
import ALiImage from "../images/ali.png";
import { TypeAnimation } from "react-type-animation";
import { GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import ReactInputMask from "react-input-mask";


const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [messageData, setMessageData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const handleMessageSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(messageData)
    }
  const names = [
    "RockStar",
    1000,
    "Hero",
    1000,
    "Acha Bacha",
    1000,
    "Over Smart",
    1000,
  ];

  return (
    <div>
      <div className=" dark:bg-gray-900 md:h-[500px]">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="p-5 md:w-[50%]">
              <div className="dark:text-white h-full w-full flex items-center">
                <div>
                  <h1 className="md:text-[30px]">Meet With</h1>
                  <h1 className="md:text-[40px]">Mr. Ali Farhat</h1>
                  <h1 className="md:text-[35px]">
                    The One & Only{" "}
                    <span className="font-bold">
                      <TypeAnimation sequence={names} repeat={Infinity} />
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img src={ALiImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#002639]">
        <div className="container mx-auto">
          <div className="py-10 md:py-20 px-5  text-white md:w-[500px]">
            <h1 className="text-2xl font-bold dark:text-white">OUR MISSION</h1>
            <p className="text-justify">
              At our startup, we are committed to revolutionizing the way
              technology enhances lives and businesses. Our mission is to craft
              cutting-edge solutions that solve real-world problems, empower
              individuals and organizations with transformative tools, and pave
              the way for a future where technology serves as a catalyst for
              progress.
            </p>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-900">
      <div className=" md:rounded-lg mx-auto container">
        <div className="flex gap-3 md:h-[400px] flex-wrap">
          <div className="p-5 w-full ">
            <div>
              <h1 className="text-2xl mb-2 dark:text-white">SEND MESSAGE</h1>
            </div>
            <div>
              <form action="" onSubmit={handleMessageSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 dark:text-white">
                  <div className="truncate">
                    <div className="mb-3">
                      <label htmlFor="name" className="block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        onChange={(e) => setMessageData({...messageData, name: e.target.value})}
                        className="dark:bg-gray-700 dark:text-white dark:outline-none p-2 border-2 border-solid rounded-lg w-full  outline-blue-500"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="block mb-2">
                        Your Email
                      </label>
                      <input
                      name="email"
                        type="email"
                        onChange={(e)=> setMessageData({...messageData, email: e.target.value})}
                        className="dark:bg-gray-700 dark:text-white dark:outline-none p-2 border-2 border-solid rounded-lg  outline-blue-500 w-full"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="" className="block mb-2">
                        Your Phone
                      </label>
                      <ReactInputMask
                      name= 'phone'
                      onChange={(e) => setMessageData({...messageData, phone: e.target.value})}
                        mask='0399-9999999'
                        className="dark:bg-gray-700 dark:text-white dark:outline-none p-2 border-2 border-solid rounded-lg w-full  outline-blue-500"
                      ></ReactInputMask>
                    </div>
                  </div>
                  <div className=" relative">
                    <div className="mb-3">
                      <label htmlFor="" className="block mb-2">
                        Message
                      </label>
                      <textarea
                      onChange={(e) => setMessageData({...messageData, message: e.target.value})}
                        type="number"
                        rows={5}
                        className="dark:bg-gray-700 dark:text-white dark:outline-none p-2 border-2 border-solid rounded-lg w-full  outline-blue-500 resize-none"
                      ></textarea>
                    </div>
                    <button type="submit" className=" bg-yellow-600 md:w-[100px] mt-5 rounded py-2 h-[45px] text-white flex items-center">
                      <span className="mx-auto">Send</span>
                      {/* <div class="loader mx-auto"></div> */}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      </div>
      <div className="bg-yellow-600 py-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-2xl text-white">Contact Information</h1>
          </div>
          <div className="flex flex-wrap justify-between gap-5 md:gap-0 py-5">
            <div className="bg-white md:rounded-lg px-3 md:px-5 py-5 md:py-2 flex justify-center flex-col">
              <div className="flex items-center gap-4 mb-4">
                <button className="grow h-[40px] min-w-[40px] w-[40px] flex items-center justify-center rounded-lg bg-yellow-600">
                  <GeoAltFill className="text-white" />
                </button>
                <p className=" text-sm text-yellow-700">
                  Employement Society opposite Islamia University of Bahawalpur
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button className="h-[40px] w-[40px] flex items-center justify-center rounded-lg bg-yellow-600">
                  <TelephoneFill className="text-white" />
                </button>
                <p className="text-sm text-yellow-700">
                  <a href="tel:+923015080077">+92 301 5080077</a>
                </p>
              </div>
            </div>
            <div className="bg-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                
                className="w-screen md:w-[600px]"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                title="hello"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
