import React from 'react';
import { sortByMostRecentDate } from '../helper/sortByMostRecentDate';
import { arrayToLength } from '../helper/arrayToLength';
import { Col } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import { Container, Row } from 'react-bootstrap';

function DisplaySortedRepoData({ repoData, numOfrepos, showStars, showLanguage }) {
  console.log('sorted' + repoData);
  const text = (
    <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
      {repoData.map(repo => {
        return (
          <Col md={4} className="project-card">
            <ProjectCards
              key={repo.id}
              title={repo.name}
              description={repo.description}
              link={repo.html_url}
            ></ProjectCards>
          </Col>
        );
      })}
    </Row>
  );

  return text;
}
export default DisplaySortedRepoData;
