import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Enrico Bonato </span>
            from <span className="purple"> Castelfranco Veneto Tv, Italy.</span>
            <br />I am a software specialis at Accenture.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;


/*
<p style={{ color: "rgb(155 126 172)" }}>
"Strive to build things that make a difference!"{" "}
</p>
<footer className="blockquote-footer">Soumyajit</footer>
*/