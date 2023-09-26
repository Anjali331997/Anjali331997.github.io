import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Anjali_A_P from '../../resume/Anjali_A_P.pdf'
import Button from "react-bootstrap/Button";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section section container-fluid" id="about">
      <Container>
        <Row>
          <Col md={16} className="home-about-description about section container-fluid">
            <h1 style={{ fontSize: "2.8em" }}>
              About
            </h1>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" id="user-detail-intro">
              Hi, I'm Anjali A P, MERN stack developer based in Thrissur, Kerala,
              curious to learn more about developing scalable distributed systems, love problem-solving, and
              care about writing readable as well as maintainable code.
              <br /><br /> I have extensive experience in various technologies such as Mongo DB, Express, React,
              and Node. I firmly believe that collaboration is the cornerstone of building great things, and I
              am always eager to work with others to create something truly amazing. </p>
          </Col>

        </Row>
        <Row>
        </Row>
      </Container>
    </Container>
  );
}
export default SelfIntro;
