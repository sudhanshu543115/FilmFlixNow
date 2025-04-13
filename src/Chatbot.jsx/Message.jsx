import  { useState } from "react";
import { Link } from "react-router-dom";

const MessageBox = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [message, setMessage] = useState("");

  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 w-64">
      {/* Message Box */}
      {!isOpen && (
        <div className="bg-white shadow-lg p-3 rounded-lg border border-gray-300">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Chat with Us</h3>
            <button onClick={toggleBox} className="text-gray-500">✖</button>
          </div>
          <textarea
            className="w-full mt-2 p-2 border rounded-md"
            rows="3"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Link to ="../Chatbot.jsx/Chatbot.jsx">
          <button className="w-full mt-2 bg-blue-500 text-white p-2 rounded-md">
            Send
          </button>
          </Link>
        </div>
      )}

      {/* Open Button */}
      {isOpen && (
        <button
          //onClick={toggleBox}
          className="bg-pink-500 text-white p-3 rounded-full shadow-lg"
        >
          💬
        </button>
      )}
    </div>
  );
};

export default MessageBox;
