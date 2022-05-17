import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Particle from '../Particle';
import { GetRepoData } from './GetRepoData';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <GetRepoData
            showStars={true}
            numOfrepos={10}
            userName={'EnricoBonato-web'}
            showLanguage={false}
          />
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
