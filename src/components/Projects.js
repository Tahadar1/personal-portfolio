import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/music library.jpg";
import projImg2 from "../assets/img/learn-to-code.jpg";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Music Library",
      description: (
        <span>
          This is the backend for the Music Library Web Application that will store and play music online for free.
          This Backend RestAPI's are Developed Using Spring Boot Framework.
          <br></br>
          <h5>
            <a href="https://github.com/Tahadar1/MusicLibraryFinal" className="link">
              Click to open Repository
            </a>
          </h5>
        </span>

      ),
      imgUrl: projImg1,
    },
    {
      id:2,
      title: "Interactive Coding Learning System",
      description: "",
      description: (
        <span>
          Web Application for Online Learning with a Slight Twist that will help Learn Code faster.
          This web application is bases on ReactJS for Frontend and Flask Python for Backend
          <br></br>
          <h5>
            <a href="https://github.com/Tahadar1/Interactive-Coding-Learning-System" className="link">
              Click to open Repository
            </a>
          </h5>
        </span>

      ),
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>These are some of the projects I have done using diferent frameworks and technologiee. They are updated on Github you can go and see the work there.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  )
}
