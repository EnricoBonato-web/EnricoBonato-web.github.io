import React, { FC } from 'react';
import style from '../styles/about.module.scss';
import Planet from './Planet';

const About: FC = () => (
  <div className={style.container}>
    <Planet planet="venus" planetSize={100}>
      <h1> Something about me</h1>
      <p>I am a frontend developer with a passion for crafting intuitive user interfaces. </p>
      <p>
        Throughout my career, I have honed my skills in HTML, CSS, and JavaScript to create visually
        appealing and functional websites.
      </p>
      <p>
        {' '}
        My experience includes working on various projects, from online stores to enterprise
        resource planning systems.{' '}
      </p>
      <p>I am detail-oriented, driven, and always eager to learn and improve my craft.</p>
    </Planet>
  </div>
);

export default About;
