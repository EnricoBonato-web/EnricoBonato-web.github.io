import React from 'react';
import { removeDash } from '../helper/removeDash';
import { sortByMostRecentDate } from '../helper/sortByMostRecentDate';
import { convertToHours } from '../helper/convertToHours';
import { arrayToLength } from '../helper/arrayToLength';
import { getRemainingSeconds } from '../helper/getRemainingSeconds';
import styles from '../styles.module.css';
import Star from '../helper/IMG/githubStar.png';
import ProjectCards from './ProjectCards';

function DisplaySortedRepoData({ repoData, numOfrepos, showStars, showLanguage }) {
  const sortedRepos = sortByMostRecentDate(repoData);
  const sortedAndReducedRepos = arrayToLength(sortedRepos, numOfrepos);
  console.log('sorted' + sortedAndReducedRepos);
  return (
    <div className={styles.repoContainer}>
      {sortedAndReducedRepos
        ? sortedAndReducedRepos.map(repo => (
            <ProjectCards
              key={repo.id}
              title={repo.name}
              description={repo.description}
              link={repo.url}
            />
          ))
        : null}
      {console.log('prova')}
      <ProjectCards key="123" title="prova" description="prova" link="prova" />
    </div>
  );
}
export default DisplaySortedRepoData;
