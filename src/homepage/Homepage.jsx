import { Link, useNavigate } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import orbitalImg from "../assets/orbital.png";
import botImg from "../assets/bot.png";
import human1Img from "../assets/human1.jpeg";
import human2Img from "../assets/human2.jpeg";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  const navigate = useNavigate();

  const handleAccessChatBot = () => {
    navigate("/app"); // Redirects to the chat application page
  };

  return (
    <div className="homepage">
      <img src={orbitalImg} alt="Orbital decoration" className="orbital" />
      <div className="left">
        <h1>EmergiChatBot</h1>
        <h2>Your AI Assistant for Emergency Preparedness and Response</h2>
        <h3>
          Get instant guidance on fire, police, and medical emergencies.
          EmergiChatBot is here to help you stay safe and informed.
        </h3>
        <button onClick={handleAccessChatBot} className="access-chatbot-button">
          Access ChatBot
        </button>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src={botImg} alt="EmergiChatBot" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? human1Img
                  : typingStatus === "human2"
                  ? human2Img
                  : botImg
              }
              alt="Chat Participant"
            />
            <TypeAnimation
              sequence={[
                "User: I smell gas in my kitchen, what should I do?",
                2000,
                () => setTypingStatus("bot"),
                "EmergiChatBot: Open windows and doors to ventilate. Avoid using electrical devices and leave the area.",
                2000,
                () => setTypingStatus("human2"),
                "User2: What’s the best way to report a fire emergency?",
                2000,
                () => setTypingStatus("bot"),
                "EmergiChatBot: Call 911 immediately, and if safe, use a fire extinguisher if the fire is small and manageable.",
                2000,
                () => setTypingStatus("human1"),
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
