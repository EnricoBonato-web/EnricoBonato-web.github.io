import React, { useEffect, useRef } from "react";
import style from "../styles/timeline.module.scss";

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timelineElement = timelineRef.current;

    const handleScroll = () => {
      const elements = timelineElement?.querySelectorAll("li");

      if (elements) {
        elements.forEach((element, index) => {
          const elementTop = element.getBoundingClientRect().top;
          const elementHeight = element.getBoundingClientRect().height;
          const windowHeight = window.innerHeight;

          if (
            elementTop > windowHeight / 2 ||
            elementTop < windowHeight / 2 - elementHeight
          ) {
            element.classList.remove(style.fadeIn);
            element.classList.add(style.fadeOut);
            element.style.animationDelay = `${0.5}s`;
          } else {
            element.classList.add(style.fadeIn);
            element.style.animationDelay = `${0.5}s`;
            element.classList.remove(style.fadeOut);
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={timelineRef} className={style.timeline}>
      <ul>
        <li>
          <div className={style.right_content}>
            <h2> ITIS Eugenio Barsant</h2>
            <h3>2009 - 2014</h3>
            <p>Degree in computer science.</p>
          </div>
        </li>
        <li>
          <div className={style.right_content}>
            <h2>University of Padua</h2>
            <h3>2014 – 2018</h3>
            <p>Bachelor’s degree in computer science.</p>
            <p>
              I worked in a group on several school projects, in some even as
              agroup leader, organizing the division of tasks and monitoring
              the quality of work and the achievement of objectives.
            </p>
          </div>
        </li>
        <li>
          <div className={style.right_content}>
            <h2>Software Developer</h2>
            <h3>Retail Solutions S.R.L</h3>
            <h3>18/09/2017–11/11/2017</h3>
            <p>
              Creation of a website using ASP.NET that analyzed the
              ticketing system used by the company and showed various information
              withgraphs and tables.
            </p>
          </div>
        </li>
        <li>
          <div className={style.right_content}>
            <h2>Production support</h2>
            <h3>Accenture Italy</h3>
            <h3> 2018 – 2022</h3>
            <p>
              Project: Generali life insurances<br/> Assisted clients with a
              diagnosis of software issues and concerns.<br/>
              Collaborated with
              software developers to fix problems andimplement new
              functionality.<br/> Backend and Frontend software debugging (Cobol and
              Java withProprietary software) with extensive use of Oracle SQL
            </p>
          </div>
        </li>
        <li>
          <div className={style.right_content}>
            <h2>User Interface Developer</h2>
            <h3>onrooby GmbH</h3>
            <h3> 15/08/2022 - 30/04/2023</h3>
            <p>
              Designed and implemented user interfaces for online stores.
              <br />
              Further developed the UI/UX of the enterprise resource planning
              system.
              <br />
              Conducted user research and testing to improve userexperience.
              <br />
              Created wireframes, mockups, and prototypes to iterate ondesign
              solutions.
              <br />I successfully achieved agreed goals, even under heavy
              workloadsand changing requirements, and always delivered
              high-quality workthat met the company's expectations.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
