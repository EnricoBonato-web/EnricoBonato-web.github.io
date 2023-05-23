import React from "react";
import { useRef } from "react";
import styles from "./styles/app.module.scss";
import Hero from "./components/Hero";
import Background from "./components/Background";
import GradientBackground from "./components/GradientBackground";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Work from "./components/Work";
import Projects from "./components/Projects/Projects";
import Particle from "./components/Particle";

const App: React.FC = () => {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);
  const section5Ref = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
        <Particle/>
      <header className={styles.header}>
        <img src="./logo.png" alt="EnricoBonato" className={styles.logo} />
        <ul className={styles.navLinks}>
          <li onClick={() => scrollToSection(section1Ref)}>Section 1</li>
          <li onClick={() => scrollToSection(section2Ref)}>Section 2</li>
          <li onClick={() => scrollToSection(section3Ref)}>Section 3</li>
          <li onClick={() => scrollToSection(section4Ref)}>Section 4</li>
          <li onClick={() => scrollToSection(section5Ref)}>Section 5</li>
        </ul>
      </header>

      <main>
          <div className={styles.sections}>
            <section ref={section1Ref} className={styles.section}>
              <Hero f={() => scrollToSection(section5Ref)} />
            </section>
            <section ref={section2Ref} className={styles.section}>
              <About />
            </section>
            <section ref={section3Ref} className={styles.section}>
              <Work />
            </section>
            <section ref={section3Ref} className={styles.section}>
              <Projects />
            </section>
            <section ref={section4Ref} className={styles.section}>
              <Skills />
            </section>
            <section ref={section5Ref} className={styles.section}>
              <Contacts />
            </section>
          </div>
      </main>
    </div>
  );
};

export default App;
