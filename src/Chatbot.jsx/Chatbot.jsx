import  { useState, useEffect, useRef } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Predefined bot responses
  const getBotResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();

    if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
      return "Hello! How can I assist you?";
    } else if (lowerMsg.includes("movie")) {
      return "You can search for movies in the search bar.";
    } else if (lowerMsg.includes("help")) {
      return "Sure! What do you need help with?";
    } else {
      return "I'm still learning! Try asking something else.";
    }
  };

  // Handle user message submission
  const sendMessage = () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botReply = getBotResponse(input);
      setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[400px] w-[300px] border rounded-lg shadow-lg bg-white">
      {/* Header */}
      <div className="bg-pink-500 text-white py-2 text-center font-bold rounded-t-lg">
        Live Chatbot
      </div>

      {/* Messages Container */}
      <div className="flex-1 p-3 overflow-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 my-1 rounded-md ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-black"
            } w-fit max-w-[80%]`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatContainerRef} />
      </div>

      {/* Input & Send Button */}
      <div className="flex border-t p-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-l-md focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-pink-500 text-white px-3 rounded-r-md"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
