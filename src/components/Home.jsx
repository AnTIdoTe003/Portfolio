import React from "react";
import "../styles/home.scss";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import instagram from "../assets/instagram.png";
import welcome from "../assets/welcome.gif";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="home_wrapper">
      <div className="nav_wrapper">
        <div className="navbar_content">
          <div className="nav_logo">
            <p>Debmalya</p>
          </div>
          <div className="nav_menu">
            <button className="btn">Home</button>
            <button className="btn">Projects</button>
            <button className="btn">About Me</button>
          </div>
          <div className="nav_socials">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={github} alt="" />
          </div>
        </div>
      </div>
      <div className="hero_wrapper">
        <div className="hero_content">
            <div className="hero_text">
            <TypeAnimation
              sequence={[
                "Hii all I am Debmalya Biswas", 
                1000, 
                "Hii all I am a FrontEnd Developer", 
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="type_animation"
            />
            <p>A passionate FrontEnd Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs  and some other cool libraries and frameworks.</p>
            <div className="hero_buttons">
                <button id="contact">Contact Me</button>
                <button id="resume">My Resume</button>
            </div>
          </div>
          <div className="hero_img">
            <img src={welcome} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
