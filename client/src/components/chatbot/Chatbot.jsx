import React, { useState } from 'react'
import { ChevronUp, SendFill, X } from 'react-bootstrap-icons'

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message: "Hello",
      type: 'question'
    },
    {
      id: 2,
      message: "Hi, how can I help you?",
      type: 'answer'
    },
    {
      id: 3,
      message: "Grow organically or through AI",
      type: 'question'
    },
    {
      id: 4,
      message: "Yes, sure for now",
      type: 'question'
    }
  ])
  const [collapse, setCollapse] = useState(false)
  return (
    <div className={`min-w-[300px] max-w-[500px] ${collapse && 'h-[400px]'} bg-sky-100 fixed bottom-2 right-2 rounded-lg text-sm dark:bg-gray-700`}>
      <div className={`bg-sky-400 rounded-t-lg ${!collapse && 'rounded-b-lg'} text-white h-[30px] px-2 flex items-center justify-between dark:bg-gray-900`}>
        <p>ask me anything...</p>
        <button onClick={() => setCollapse(!collapse)}>
          {collapse ? <X size={18} /> : <ChevronUp size={18} />}
        </button>
      </div>
      <div className={`${collapse ? 'block' : 'hidden'} flex justify-between  flex-col h-[calc(400px-30px)] bg-blue-200 w-full overflow-y-auto rounded-b-lg`}>
        <div className='flex flex-col gap-2 p-2'>

          {messages.map(message => (
            <div key={message.id} className={`rounded-lg text-xs ${message.type === 'question' ? 'bg-gray-100 self-end' : 'bg-sky-200 self-start'}`}>
              <p className="p-2">{message.message}</p>
            </div>
          ))}
        </div>
        <div className='bg-gray-100 m-1 rounded-lg p-2 flex items-center justify-between'>
          <input type="text" className='bg-transparent outline-none text-xs min-w-[200px] md:w-[260px]' placeholder='message' />
          <button><SendFill color='blue' /></button>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
