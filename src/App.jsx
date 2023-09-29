import { BiSolidMessageRoundedDots } from "react-icons/bi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import ScrollingImages from "./components/ScrollingImages";
import Projects from "./components/Projects";
import { useState } from "react";
import ChatCard from "./chat-frontend/ChatCard";

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    console.log("toggle");
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="app">
        <Header />
        <MainContent />
        <div>
          <button className="message-icon" onClick={toggleChat}>
            {isChatOpen ? (
              <span className="close-icon">x</span>
            ) : (
              <span className="open-icon">
                <BiSolidMessageRoundedDots />
              </span>
            )}
          </button>
          {isChatOpen && <ChatCard toggleChat={toggleChat} />}
        </div>
        <Projects />
        <ScrollingImages />
        <Footer />
      </div>
    </>
  );
}

export default App;
