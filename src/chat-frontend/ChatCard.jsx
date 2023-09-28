import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { MdNearMe } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

const ChatCard = ({ toggleChat }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(true);

  const closeChat = () => {
    toggleChat();
  };

  const sendMessage = async () => {
    try {
      await axios.post("/api/message", { message });
      setMessage("");
    } catch (error) {
      console.error("Error sending message :", error);
    }
  };

  const fetchMessages = async () => {
    try {
      const response = await axios
        .get("http://localhost:3000/api/messages")
        .then((response) => {
          const messages = response.data;
          setMessages(messages);
        });
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const chatCardStyle = {
    right: isChatOpen ? "0" : "-300px",
  };

  return (
    <div className="chat-card" style={chatCardStyle}>
      <div className="chat-header">
        <div className="chat-profile">
          <img src="dp/dp-pic1.jpg" className="dp" />
          <div className="online-blue">
            <span>simo blues</span>
            <span className="online">online</span>
          </div>
        </div>
      </div>
      <div className="chat-content">
        <a href="/" className="chat-brand">
          <TbBrandBooking />
        </a>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <span className="message-text">{msg.message}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder=" Message Hike "
        />
        <button onClick={sendMessage}>
          <MdNearMe />
        </button>
      </div>
    </div>
  );
};

export default ChatCard;
