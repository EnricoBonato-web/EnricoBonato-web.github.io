import React from 'react';
import { GetRepoData } from './GetRepoData';
import style from '../../styles/projects.module.scss';
import Planet from '../Planet';

function Projects() {
  return (
    <div className={style.container}>
      <Planet planet="uranus" planetSize={300}>
        <h1 className={style.heading} style={{ margin: 'auto' }}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className={style.text}>{`Here are a few projects I've worked on recently.`}</p>
        <GetRepoData
          showStars={true}
          numOfrepos={10}
          userName={'EnricoBonato-web'}
          showLanguage={false}
        />
      </Planet>
    </div>
  );
}
export default Projects;
