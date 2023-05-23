import React from "react";
import { GetRepoData } from "./GetRepoData";
import style from "../../styles/projects.module.scss";

function Projects() {
  return (
    <div className={style.container}>
      <h1 className="project-heading" style={{ margin: "auto" }}>
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p
        style={{ color: "white", margin: "auto" }}
      >{`Here are a few projects I've worked on recently.`}</p>
      <GetRepoData
        showStars={true}
        numOfrepos={10}
        userName={"EnricoBonato-web"}
        showLanguage={false}
      />
    </div>
  );
}
export default Projects;
