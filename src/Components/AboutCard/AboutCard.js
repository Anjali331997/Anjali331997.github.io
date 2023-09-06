import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm Anjali A P, MERN stack developer based in Thrissur, Kerala,
            curious to learn more about developing scalable distributed systems, love problem-solving, and
            care about writing readable as well as maintainable code.
            <br /><br /> I have extensive experience in various technologies such as Mongo DB, Express, React,
            and Node. I firmly believe that collaboration is the cornerstone of building great things, and I
            am always eager to work with others to create something truly amazing.
          </p>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;