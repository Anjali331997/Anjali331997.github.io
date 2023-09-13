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
import { Button } from "react-bootstrap";



function Home() {
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

              <div>

              </div>

            </Col>

          </Row>
        </Container>
      </Container>
      <SelfIntro />

    </section>
  );
}

export default Home;