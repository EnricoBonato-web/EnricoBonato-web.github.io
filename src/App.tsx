import React from 'react';
import { useRef } from 'react';
import styles from './styles/app.module.scss';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import Work from './components/Work';
import Projects from './components/Projects/Projects';
import Particle from './components/Particle';
import HamburgerMenu from './components/Hamburger';

const App: React.FC = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const section5Ref = useRef<HTMLElement>(null);
  const section6Ref = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <header className={styles.header}>
        <HamburgerMenu>
          <li onClick={() => scrollToSection(section1Ref)}>Home</li>
          <li onClick={() => scrollToSection(section2Ref)}>About</li>
          <li onClick={() => scrollToSection(section3Ref)}>Work</li>
          <li onClick={() => scrollToSection(section4Ref)}>Projects</li>
          <li onClick={() => scrollToSection(section5Ref)}>Skills</li>
          <li onClick={() => scrollToSection(section6Ref)}>Contact</li>
        </HamburgerMenu>
      </header>

      <main>
        <div className={styles.sun_container}>
          <span className={styles.sun}></span>
        </div>
        <div id="top"></div>
        <div className={styles.sections}>
          <section ref={section1Ref} className={'section ' + styles.section}>
            <Hero f={() => scrollToSection(section6Ref)} />
          </section>
          <section ref={section2Ref} className={'section ' + styles.section}>
            <About />
          </section>
          <section ref={section3Ref} className={'section ' + styles.section}>
            <Work />
          </section>
          <section ref={section4Ref} className={'section ' + styles.section}>
            <Projects />
          </section>
          <section ref={section5Ref} className={'section ' + styles.section}>
            <Skills />
          </section>
          <section ref={section6Ref} className={'section ' + styles.section}>
            <Contacts />
          </section>
        </div>
        <Particle />
      </main>
    </div>
  );
};

export default App;
