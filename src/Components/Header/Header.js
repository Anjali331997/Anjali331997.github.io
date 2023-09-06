import React, { useState } from "react";
import "./header.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from "react-scroll"
import Button from "react-bootstrap/Button";
import Anjali_A_P from '../../resume/Anjali_A_P.pdf'


function Header() {
  
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  const  x = window.matchMedia("(max-width:1000px)")

  function rel(x) {
    if (x.matches) { // If media query matches
      let a= document.getElementById("tgl");
      a.click();
    } 
  }
  

  return (
    <Navbar
     id="nav-menu"
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
        <Navbar.Toggle id="tgl"
          aria-controls="responsive-navbar-nav">
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="ml-auto" defaultActiveKey="#home">

          <Nav.Item className="fork-btn">
          <Link to="home">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Home
          </Button>
          </Link>
          </Nav.Item>

           <Nav.Item className="fork-btn">
          <Link to="about">
          <Button onClick={()=>{rel(x)}} 
                target="_blank"
                className="fork-btn-inner"
              >
                About
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
          <Link to="skills">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Skills
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
          <Link to="projects">
          <Button onClick={()=>{rel(x)}}
                target="_blank"
                className="fork-btn-inner"
              >
                Projects
          </Button>
          </Link>
          </Nav.Item>

          <Nav.Item className="fork-btn">
          <Link to="contact">
          <Button onClick={rel}
                target="_blank"
                className="fork-btn-inner "
              >
                Contact
          </Button>
          </Link>
          </Nav.Item>
     
            <Nav.Item className="fork-btn">


            <Button
              width="max-content"
              id="resume-button-1"
              
              className="nav-link resume fork-btn-inner"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1SAvapziRKxPJhMHzhugs64t4ME929Rso/view?usp=drive_link",
                  "_blank"
                );
              }}
            >
              <a
                id="resume-link-1"
                href={Anjali_A_P}
                target="_blank"
                rel="noreferrer"
                download="Anjali_A_P.pdf"
                className="fork-btn-inner"
              >
                Resume
              </a>
              {/* <Text as="span" ml={"2"}>
                <AiOutlineDownload fontSize={"1.2rem"} />
              </Text> */}
            </Button>

          




            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;