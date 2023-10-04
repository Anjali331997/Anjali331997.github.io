import React from "react";
// import { section, div, div } from "react-bootstrap";
import "./address.css";

import {BsTelephone} from "react-icons/bs"
import {HiOutlineMailOpen} from "react-icons/hi"
import {AiFillGithub , AiFillLinkedin} from "react-icons/ai"
function Address() {
  return (
    <section className="container" id="contact">
      <h1 className="section__title">Contact
         Me
      </h1>

      <p className="section__subtitle">Whether you want to get in touch, talk about a project divlaboration,
       or just say hi, I'd love to hear from you.</p>

      <div style={{ justifyContent: "center", paddingBottom: "50px" }} className="contacts">
        <div xs={4} md={2} className="tech-icons">
            <BsTelephone/>
            <br/>
            <span id="contact-phone">8078304060</span>
        </div>
        <div xs={4} md={2} className="tech-icons">
            <HiOutlineMailOpen/>
           <br/>
            <a style={{textDecoration: 'none',divor: 'black'}}  href="mailto:anjaliap3march1997@gmail.com" id="contact-email">anjaliap3march1997@gmail.com</a>
        </div>
        <div xs={4} md={2} className="tech-icons">
            <AiFillGithub/>
            <br/>
            <a style={{textDecoration: 'none',divor: 'black'}}  href="https://github.com/Anjali331997" target="_blank" rel="noopener noreferrer" id="contact-github">Github</a>
        </div>
        <div xs={4} md={2} className="tech-icons">
            <AiFillLinkedin/>
            <br/>
            
            <a style={{textDecoration: 'none',divor: 'black'}}  href="https://www.linkedin.com/in/anjali-a-p-3b571b18a/"  target="_blank" rel="noopener noreferrer" id="contact-linkedin">LinkedIn</a>
        </div>
      </div>

     
        </section>
   
  );
}

export default Address;

