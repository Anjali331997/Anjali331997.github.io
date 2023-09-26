import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import myImg from "../Assets/my-avatar.jpg";
import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Anjali_A_P from '../resume/Anjali_A_P.pdf'
// import "../Components/Footer/Footer"
import './Home.css'
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";



function Home() {
  const x = window.matchMedia("(max-width:1000px)")

  function rel(x) {
    if (x.matches) { // If media query matches
      let a = document.getElementById("tgl");
      a.click();
    }
  }
  return (
    <section id="home">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={5} className="home-profile" style={{ paddingBottom: 20 }}>
              <img src={myImg} alt="home pic" className="img-fluid home-img" />
            </Col>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name ">
                I'M
                <strong className="main-name br" id="user-detail-name"> Anjali</strong>
              </h1>

              <div style={{ textAlign: "left" }}>
                <TypeWriter />
              </div>


            </Col>

          </Row>
        </Container>

      </Container>



      <SelfIntro />
      <div className="about-buttons-div">
 <h1>
  Click below to view my works
 </h1>
        <Button
          width="max-content"
          id="resume-button-2"
          className="about-buttons"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1SAvapziRKxPJhMHzhugs64t4ME929Rso/view?usp=drive_link",
              "_blank"
            );
          }}
        >
          <a
            id="resume-link-2"
            href={Anjali_A_P}
            target="_blank"
            rel="noreferrer"
            download="Anjali_A_P.pdf" style={{ color: "white", textDecoration: "none" }}
          >
            Resume
          </a>
        </Button>

        <Link to="projects">
          <Button onClick={() => { rel(x) }}
            target="_blank"
            className="projects about-buttons"
          >
            Projects
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Home;