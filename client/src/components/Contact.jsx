import React, { useContext, useState } from "react";
import ALiImage from "../images/ali.png";
import { TypeAnimation } from "react-type-animation";
import { GeoAltFill, TelephoneFill } from "react-bootstrap-icons";
import ReactInputMask from "react-input-mask";
import { useToast } from "../context/ToastContext";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {notifySuccess} = useToast()
  const [messageData, setMessageData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [faqs, setFaqs] = useState([
    {
      question: "How many programmers does it take to screw a lightbulb?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida. Sed porta id mi sit amet convallis. Etiam iaculis massa sit amet lacus blandit sodales. Nulla ultrices velit a diam placerat congue. Pellentesque iaculis, ipsum quis eleifend dapibus, est dui eleifend ante, quis fermentum mi ligula quis nisl. Ut et ex dui. Integer id venenatis quam.",
      open: false,
    },
    {
      question: "Who is the most awesome person?",
      answer: "You! The viewer!",
      open: false,
    },
    {
      question:
        "How many questions does it take to make a successful FAQ Page?",
      answer: "This many!",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }
        return faq;
      })
    );
  };


  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    try{
      setLoading(true)
      const formData = new FormData();
      formData.append("name", messageData.name)
      formData.append("email", messageData.email)
      formData.append("phone", messageData.phone)
      formData.append("message", messageData.message)
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/message/new_messages`,{
        method: 'POST',
        body: formData
      })
      if(response.ok){
        notifySuccess('Message has been sent')
      }
      console.log(response)
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
      setMessageData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }
  };

  const names = [
    "YouTuber",
    1000,
    "Presentator",
    1000,
    "Developer",
    1000,
    "Tourist",
    1000,
  ];

  return (
    <div>
      <div className="dark:bg-gray-900 md:h-[500px]">
        <div className="">
          <div className="flex justify-between">
            <div className="p-5 md:w-[50%]">
              <div className="dark:text-white h-full w-full flex items-center">
                <div className="px-4">
                  <h1 className="md:text-[30px]">Meet With</h1>
                  <h1 className="md:text-[40px]">Owner of This Website</h1>
                  <h1 className="md:text-[35px]">
                    Ali Muhammad Who is{" "}
                    <span className="font-bold">
                      <TypeAnimation sequence={names} repeat={Infinity} />
                    </span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="text-center">
              <img src={ALiImage} alt="Ali Farhat" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#002639]">
        <div className="container mx-auto">
          <div className="py-10 md:py-20 px-5 text-white md:w-[500px]">
            <h1 className="text-2xl font-bold dark:text-white">Introduction</h1>
            <p className="text-justify">
            Myself Ali Muhammad, the visionary behind Mastering in Vlogging. 
            With over a 5 years of experience in the vlogging world, 
            I honed my craft from the ground up, transitioning from a passionate hobbyist
            to a renowned content creator. My journey is a testament to the power of dedication,
            creativity, and continuous learning.
            My Moto Is
            "Empower Every Creator to Shine"
            </p>
          </div>
        </div>
      </div>
      <div className="dark:bg-gray-900 dark:border-b-white dark:border-b-solid dark:border-b-[1px]">
        <div className="md:rounded-lg mx-auto container">
          <div className="flex gap-3 flex-wrap">
            <div className="p-5 w-full ">
              <div className="text-center py-4">
                <h1 className="text-2xl mb-2 dark:text-white">FAQ</h1>
              </div>
              <div>
                {faqs.map((faq, index) => (
                  <div key={index} className="">
                    <button
                      className="flex justify-between w-full bg-gray-200 dark:bg-gray-800 p-3 rounded-lg mb-1 focus:outline-none"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="dark:text-white">{faq.question}</span>
                      <span className="dark:text-white">
                        {faq.open ? "-" : "+"}
                      </span>
                    </button>
                    <div
                      className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                        faq.open ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <div className="bg-gray-100 dark:text-white dark:bg-gray-700 p-3 rounded-lg">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-yellow-500 dark:bg-gray-800 py-10">
        <div className="container mx-auto px-5">
          <div className="text-center">
            <h1 className="text-2xl text-white">Contact Information</h1>
          </div>
          <div className="flex flex-wrap md:w-[900px] mx-auto justify-center md:justify-between gap-5 md:gap-0 py-5">
            <div className="bg-white dark:bg-gray-950 md:rounded-lg px-3 md:px-5 py-5 md:py-2 flex justify-center flex-col rounded-lg">
              <form onSubmit={handleMessageSubmit} className="dark:text-white">
                <div className="mb-2 mt-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={messageData.name}
                    onChange={(e)=>setMessageData({...messageData, name: e.target.value})}
                    className="w-full dark:outline-none dark:bg-gray-700 outline-blue-500 p-2 border-[1px] border-solid border-gray-200 rounded"
                  />
                </div>
                <div className="mb-2 mt-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={messageData.email}
                    onChange={(e)=>setMessageData({...messageData, email: e.target.value})}
                    className="w-full dark:outline-none dark:bg-gray-700 outline-blue-500 p-2 border-[1px] border-solid border-gray-200 rounded"
                  />
                </div>
                <div className="mb-2 mt-2">
                  <label htmlFor="number">Phone Number</label>
                  <ReactInputMask
                    mask="0399-9999999"
                    maskChar="_"
                    type="text"
                    id="number"
                    name="phone"
                    value={messageData.phone}
                    onChange={(e)=>setMessageData({...messageData, phone: e.target.value})}
                    className="w-full dark:outline-none dark:bg-gray-700 outline-blue-500 p-2 border-[1px] border-solid border-gray-200 rounded"
                  />
                </div>
                <div className="mb-2 mt-2">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    name="message"
                    id="message"
                    value={messageData.message}
                    onChange={(e)=>setMessageData({...messageData, message: e.target.value})}
                    className="w-full dark:outline-none dark:bg-gray-700 resize-none outline-blue-500 p-2 border-[1px] border-solid border-gray-200 rounded"
                  ></textarea>
                </div>
                <div className="mb-2 mt-2">
                  <button className="bg-yellow-500 dark:bg-gray-800 px-4 py-1 rounded text-white">
                    {loading ? <div className="spinner"></div> : "Send"}
                  </button>
                </div>
              </form>
            </div>
            <div className="">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                className="w-[320px] mx-auto rounded-lg md:w-[500px]"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
