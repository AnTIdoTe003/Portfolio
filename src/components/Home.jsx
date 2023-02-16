import React from 'react'
import '../styles/home.scss'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
const Home = () => {
  return (
    <div className="home_wrapper">
        <div className="nav_wrapper">
            <div className="navbar_content">
                <div className="nav_logo">
                    <p>Debmalya</p>
                </div>
                <div className="nav_menu">
                    <button className='btn'>Home</button>
                    <button className='btn'>Projects</button>
                    <button className='btn'>About Me</button>
                </div>
                <div className="nav_socials">
                        <img src={facebook} alt="" />
                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={github} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home