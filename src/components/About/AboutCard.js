import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hemant Modi </span>
            from <span className="purple"> Jaipur, India.</span>
            <br /> I am a Third Year student pursuing B.Tech.
            in Computer Science and Engineering from Vellore University of Technology.
            <br />
            Additionally, I am enthusiastic about Machine Learning.
            <br />
            <br />
            Some of my hobbies are 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Programming
            </li>
          </ul>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
