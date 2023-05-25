import React, { FC } from 'react';
import styles from '../styles/hero.module.scss';
import Planet from './Planet';

interface HeroProps {
  f: () => void;
}

const Hero: FC<HeroProps> = ({ f }) => {
  return (
    <section className={styles.hero}>
      <Planet planet="mercury" planetSize={100}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Welcome to My Website</h1>
          <p className={styles.heroText}>
            Italian developer with a bachelor`s degree in computer science, a passion for Web
            Developing, and a great desire to learn.
          </p>
          <button className={styles.ctaButton} onClick={f}>
            contact me
          </button>
        </div>
      </Planet>
    </section>
  );
};

export default Hero;
