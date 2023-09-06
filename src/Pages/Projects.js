import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/Anjali331997/screenshots/main/coffe1.png"
              title="Bialetti clone"
              description="Bialetti Italia is a captivating web application
              that pays homage to the renowned Italian brand, Bialetti, famous for its
              exceptional coffee machines, cookware, and small kitchen appliances. Developed
              as a clone website, this project seamlessly replicates the essence and functionality
              of the original Bialetti Industries website."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | React | Redux | MongoDB | Express"
              link="https://bialetti-new-clone-project.vercel.app/"
              a="https://github.com/Anjali331997/Bialetti_Project"
            />
          </Col>
          <Col md={6} className="project-card" >
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/Anjali331997/screenshots/main/tata1mg.png"
              title="1mg-clone"
              description="Tata 1mg is your trusted online healthcare partner. With a wide range of genuine medicines, reliable diagnostic tests, and convenient home delivery, we ensure your health is our top priority. Explore our comprehensive healthcare services and personalized wellness solutions, empowering you to take charge of your well-being, effortlessly."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css | API "
              link="https://tata-1mg-chi.vercel.app/"
              a="https://github.com/Bharat-Shaw/1mg-clone"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/Anjali331997/screenshots/main/bluefly.png"
              title="Bluefly-Clone"
              description="An e-commerce website for female users where they can explore and buy
              high-end clothes and accessories."
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://bluefly-blue.vercel.app/"
              a="https://github.com/hasbealam/Bluefly"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://raw.githubusercontent.com/Anjali331997/screenshots/main/plant.png"
              title="Green Paradise"
              description="Plant Order Application - the ultimate green companion at your
              fingertips. Browse, select, and order from our wide range of exquisite plants for delivery to
              your doorstep. Embrace nature's beauty and bring it home effortlessly with our user-friendly app
          "
              tech="Tech-Stacks"
              techD="Html | Javascript | Css "
              link="https://plant-order-website.vercel.app/"
              a="https://github.com/saurabhWakde/-Plant_Order_Application"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
