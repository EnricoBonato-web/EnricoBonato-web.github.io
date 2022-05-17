import React from 'react';
import { sortByMostRecentDate } from '../helper/sortByMostRecentDate';
import { arrayToLength } from '../helper/arrayToLength';
import { Col } from 'react-bootstrap';
import styles from '../styles.module.css';
import ProjectCards from './ProjectCards';

function DisplaySortedRepoData({ repoData, numOfrepos, showStars, showLanguage }) {
  console.log('sorted' + repoData);
  const text = (
      <Col>
    <div className={styles.repoContainer}>
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
    </div>
      </Col>
  );

  return text;
}
export default DisplaySortedRepoData;
