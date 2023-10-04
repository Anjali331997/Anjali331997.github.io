import React from 'react'
import './About.css'
import AboutImg from '../../assets/Anjali_image.jpg';
import CV from "../../assets/Anjali_AP_Resume.pdf";
// import Info from './Info';

const About = () => {
    return (

        <section className="about section" id="about">

            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">
                My Introduction
            </span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    {/* <Info /> */}
                    <p className='about__description' id='user-detail-intro'>
                        Hi, I'm Anjali A P, MERN stack developer based in Thrissur, Kerala, curious to learn more about developing scalable distributed systems, love problem-solving, and care about writing readable as well as maintainable code.
<br/><br/>
                        I have extensive experience in various technologies such as Mongo DB, Express, React, and Node. I firmly believe that collaboration is the cornerstone of building great things, and I am always eager to work with others to create something truly amazing.
                    </p>
                    <a download="Anjali_AP_Resume" href={CV} className="button button--flex" id="resume-button-2"  target="_blank"
                      rel="noreferrer" >Download Resume
                        
                    </a>
                </div>

            </div>

        </section>
    )
}

export default About