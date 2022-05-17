import React from 'react';
import { sortByMostRecentDate } from '../helper/sortByMostRecentDate';
import { arrayToLength } from '../helper/arrayToLength';
import { Col } from 'react-bootstrap';
import ProjectCards from './ProjectCards';

function DisplaySortedRepoData({ repoData, numOfrepos, showStars, showLanguage }) {
  console.log('sorted' + repoData);
  const text = (
    <Col md={4} className="project-card">
      {repoData.map(repo => {
        return (
          <ProjectCards
            key={repo.id}
            title={repo.name}
            description={repo.description}
            link={repo.html_url}
          ></ProjectCards>
        );
      })}
    </Col>
  );

  return text;
}
export default DisplaySortedRepoData;
