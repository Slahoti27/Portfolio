import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotify from "../../Assets/Projects/spotify.png";
import news from "../../Assets/Projects/news.jpg";
import ML from "../../Assets/Projects/ML.jpeg";
import ACM from "../../Assets/Projects/ACM.jpeg";
import TDL from "../../Assets/Projects/TDL.jpeg";
import TicTacToe from "../../Assets/Projects/TicTacToe.png";
import ecw from "../../Assets/Projects/ecw.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ACM}
              isBlog={false}
              title="ACM"
              description="This is the ACM Student chapter website build in HTML, CSS and JS."
              ghLink="https://github.com/Slahoti27/ACM-website-2022-2023"
              demoLink="https://slahoti27.github.io/ACM-website-2022-2023/"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={news}
            isBlog={false}
            title="Sky News"
            description="This is the news app. You can see the current news differentiated on the basis of categories like business, education, technology, etc. "
            ghLink="https://github.com/Slahoti27/Sky-News/tree/master"
            demoLink="#"      
          />
        </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TicTacToe}
              isBlog={false}
              title="Tic Tac Toe Game"
              description="My simple java code for making TicTacToe game."
              ghLink="https://github.com/Slahoti27/TicTacToe-Game"
              // demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecw}
              isBlog={false}
              title="E-Commerce Website"
              description="This is the E-commerce website built in php for multiple products along with admin panel. Admin can control the website by Admin panel."
              ghLink="https://github.com/Slahoti27/E-Commerce/tree/master"
              demoLink="#"      
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TDL}
              isBlog={false}
              title="To Do List"
              description="This is To Do List. You can add the task to be done also delete the task completed with a user-friendly user-interface. It is built in HTML, CSS, JavaScript."
              ghLink="https://github.com/Slahoti27/ToDoList"
              demoLink="https://slahoti27.github.io/ToDoList/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotify}
              isBlog={false}
              title="Spotify Clone"
              description="This is the clone of spotify built in HTML, CSS, JavaScript "
              ghLink="https://github.com/Slahoti27/Spotify_Clone/tree/master"
              demoLink="https://slahoti27.github.io/Spotify_Clone/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ML}
              isBlog={false}
              title="House Price Prediction"
              description="This is Data Science project using Linear Regression Algorithm. This project helps to predict house prices using previous data from dataset taken from kaggle."
              ghLink="#"
                            
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
