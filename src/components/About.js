import React, { Component } from 'react'
import '../style/About.css';
import aboutPic from '../assets/aboutPic.png'
import resume from '../assets/MaiDang2020.pdf'
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";


class About extends Component {
    render() {
        return (
            <div className="About">
              <div className="About-content" id="about">
                <img id="profileImage" src={aboutPic} alt="Profile" border="1px" height="auto"/>
                <div className="rightContent">
                    <h1 id="aboutTitle">
                        about me
                    </h1>
                    <p id="aboutDescription">
                        Hi! I'm Mai. I recently graduated from the <span style={{color: "#4d79cb", fontWeight: 'bold'}}>University of Southern California</span> with a B.S in Computer Science. 
                        This summer I'll start as an engineer at <span style={{color: "#4d79cb", fontWeight: 'bold'}}>Flexport</span>. Previously, I interned as a software engineering intern on 
                        Flexport's Ocean team. Before that, I spent two summers at <span style={{color: "#4d79cb", fontWeight: 'bold'}}>Microsoft</span> as an explore intern and a software engineering 
                        intern on Azure IoT. I've been able to get experience as full stack developer, although my favorite projects have been more user-facing. I'm passionate about 
                        contributing to meaningful products and teams :) 
                    </p>
                    <p>
                        I have a lot of interests outside of tech- feel free to reach out to talk about anything. Some things that make me happy: coffee shops, dancing, good food, 
                        Community (the tv show, and the actual thing heh), and icebreaker mints.
                    </p>
                    <p>contact me:  <a className="link" href="mailto:elysemai3@gmail.com">elysemai3@gmail.com</a></p>
                    <p>resume:  <a className="link" target="blank" href={resume}>here</a></p>
                    <div>
                        <a style={{color: '#4d79cb', fontSize: '30px', paddingRight: '20px'}} target="blank" href="https://github.com/Mai-Nhien"><FaGithub/></a>
                        <a style={{color: '#4d79cb', fontSize: '30px', paddingRight: '20px'}} target="blank" href="https://www.linkedin.com/in/mai-nhiendang/"><FaLinkedin/></a>
                        <a style={{color: '#4d79cb', fontSize: '30px', paddingRight: '20px'}} target="blank" href="https://www.instagram.com/maii.dang/?hl=en"><FaInstagramSquare/></a>
                    </div>
                </div>
              </div>
            </div>
          );
    }
}

export default About
