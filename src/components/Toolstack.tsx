import React from "react";
import style from "../styles/toolstack.module.scss";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGooglechrome,
  SiQt,
  SiGit,
  SiApple,
  SiGitlab,
} from "react-icons/si";

const icons = [
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGooglechrome,
  SiQt,
  SiGit,
  SiApple,
  SiGitlab,
];

function Toolstack() {
  return (
    <div className={style.container}>
      {icons.map((icon) => {
        return (
          <div className={style.icons}>
            {React.createElement(icon, {
              style: {},
              className: style.icon,
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Toolstack;
