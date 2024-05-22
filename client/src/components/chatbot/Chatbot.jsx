import React, { useEffect, useMemo, useState } from "react";
import { ChevronUp, SendFill, X } from "react-bootstrap-icons";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      message:
        "Hi there, I'm Chat Bot, your virtual assistant, and I'll do my best to assist you. What brings you here today?",
      type: "answer",
    },
  ]);
  const [questions, setQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState();
  const [endChat, setEndChat] = useState(false);
  const fetchQuestions = async () => {

    const respone = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/chatbotQuestions/questions`
    );
    const data = await respone.json();
    setQuestions(data);
    setCurrentQuestion(questions);
  };
  const [collapse, setCollapse] = useState(false);
  useMemo(() => {
    fetchQuestions();
  }, [collapse]);
  
  const sendQuestion = (id) => {
    const getQuestionByID = currentQuestion.filter(
      (question) => id === question.id
    );
    setCurrentQuestion(getQuestionByID[0].children);
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        message: getQuestionByID[0].question,
        type: "question",
      },
      {
        id: messages.length + 1,
        message: getQuestionByID[0].answer,
        type: "answer",
      },
    ]);
  };
  return (
    <div
      className={`min-w-[300px] max-w-[500px] ${
        collapse && "h-[400px]"
      } bg-sky-100 fixed bottom-2 right-2 rounded-lg text-sm dark:bg-gray-700`}
    >
      <div
        className={`bg-sky-400 rounded-t-lg ${
          !collapse && "rounded-b-lg"
        } text-white h-[30px] px-2 flex items-center justify-between dark:bg-gray-900`}
      >
        <p>Ask me anything...</p>
        <div>
          {collapse ? (
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                width="18"
                onClick={() => setCollapse(!collapse)}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z"></path>
              </svg>
              <X
                size={18}
                className="cursor-pointer"
                onClick={() => setEndChat(true)}
              />
            </div>
          ) : (
            <ChevronUp
              size={18}
              className="cursor-pointer"
              onClick={() => setCollapse(!collapse)}
            />
          )}
        </div>
      </div>
      <div
        className={`${
          collapse ? "block" : "hidden"
        } flex justify-between  flex-col h-[calc(400px-30px)] bg-white w-full overflow-y-auto rounded-b-lg`}
      >
        <div className="flex flex-col gap-2 p-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`rounded-lg max-w-[200px] px-2 text-xs ${
                message.type === "question"
                  ? "bg-gray-300 self-end"
                  : "bg-sky-200 self-start"
              }`}
            >
              <p className="p-2">{message.message}</p>
            </div>
          ))}

          {currentQuestion?.map((question) => (
            <div
              className="rounded-lg text-xs px-10 py-2 border border-gray-700 cursor-pointer self-start"
              onClick={() => sendQuestion(question.id)}
            >
              {question.question}
            </div>
          ))}
        </div>
        {endChat && (
          <div className="absolute bottom-1 w-[calc(100%-20px)] left-[10px] px-10 py-10 rounded-lg shadow-lg bg-gray-100">
            <p className="text-lg text-center mb-2 font-bold">End Chat</p>
            <p className="text-sm text-center mb-2">
              Are you sure you want to end chat?
            </p>
            <div
              className="rounded-lg text-xs px-10 py-2  bg-red-700 text-white cursor-pointer text-center"
              onClick={() => {
                setCurrentQuestion(questions);
                setMessages([
                  {
                    id: 1,
                    message:
                      "Hi there, I'm Chat Bot, your virtual assistant, and I'll do my best to assist you. What brings you here today?",
                    type: "answer",
                  },
                ]);
                setCollapse(!collapse);
                setEndChat(false)
              }}
            >
              Remove Chat
            </div>
            <div
              className="rounded-lg text-xs px-10 py-2 mt-2  cursor-pointer text-center"
              onClick={() => {
                setEndChat(false);
              }}
            >
              Cancel
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
