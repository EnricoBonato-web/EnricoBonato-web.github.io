import React from "react";
import ProjectCards from "./ProjectCards";
import style from "../../styles/projects.module.scss"

type RepoData = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string;
};

type DisplaySortedRepoDataProps = {
  repoData: RepoData[];
  numOfrepos: number;
  showStars: boolean;
  showLanguage: boolean;
};

function DisplaySortedRepoData({
  repoData,
  numOfrepos,
  showStars,
  showLanguage,
}: DisplaySortedRepoDataProps) {
  const text = (
    <div className={style.projects}>
      <div className="project-card" key={0}>
        <ProjectCards
          key={0}
          title={"SWEDesigner-source"}
          description={
            "Website that allows users to draw UML diagrams and get the Java and Javascript source code."
          }
          link={"https://github.com/KaleidosCodeTeam/SWEDesigner-source"}
          imgPath={"Nodejs"}
        ></ProjectCards>
      </div>
      {repoData
        .sort((a, b) => (a.id < b.id ? 1 : -1))
        .map((repo) => {
          if (repo.description !== null) {
            return (
              <div className="project-card" key={repo.id}>
                <ProjectCards
                  key={repo.id}
                  title={repo.name}
                  description={repo.description}
                  link={repo.html_url}
                  imgPath={repo.language}
                ></ProjectCards>
              </div>
            );
          }
          else
          return null;
        })}
    </div>
  );

  return text;
}
export default DisplaySortedRepoData;
