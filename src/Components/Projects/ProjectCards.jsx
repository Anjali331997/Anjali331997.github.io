import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import "./projectcards.css"

function ProjectCards({ imgPath, title, description, tech, techD, link, a }) {
  return (
    <Card className="project-card-view project-card">
      <Card.Img variant="top" src={imgPath} alt="card-img" className="project_image" />
      <Card.Body className="project_body">
        <Card.Title style={{ textAlign: "justify", color: "black" }} className="project-title">{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", color: "black" }} className="project-description">
          {description}
        </Card.Text>
        <Card.Title className="tech-stack-title">{tech}</Card.Title>
        <Card.Text className="project-tech-stack" style={{ textAlign: "justify", color: "black" }}>
          {techD}
        </Card.Text>
        <Button className="project-deployed-link project-buttons" variant="primary" href={link} target="_blank">
          <BiLinkExternal /> &nbsp;
        </Button>
        &nbsp;
        &nbsp;
        <Button className="project-github-link project-buttons" variant="primary" href={a} target="_blank">
          <AiFillGithub /> &nbsp;
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;