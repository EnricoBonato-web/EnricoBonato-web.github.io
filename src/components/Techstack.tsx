import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiNodejs, DiJava } from "react-icons/di";
import style from "../styles/techstack.module.scss"
import {
  SiReact,
  SiVuedotjs,
  SiCss3,
  SiCsharp,
  SiHtml5,
  SiSass,
} from "react-icons/si";
const icons = [
  SiReact,
  SiVuedotjs,
  SiCss3,
  SiCsharp,
  SiHtml5,
  SiSass,
  DiJavascript1,
  DiNodejs,
  DiJava,
  CgCPlusPlus,
];
function Techstack() {
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

export default Techstack;
