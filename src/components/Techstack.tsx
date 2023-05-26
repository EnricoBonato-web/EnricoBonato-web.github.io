import React from 'react';
import { CgCPlusPlus as Cplusplus } from 'react-icons/cg';
import { DiJavascript1 as Javascript, DiNodejs as Node, DiJava as Java } from 'react-icons/di';
import style from '../styles/techstack.module.scss';
import Planet from './Planet';
import {
  SiReact as Reactjs,
  SiVuedotjs as VueJs,
  SiCss3 as CSS3,
  // SiCsharp as Csharp,
  SiHtml5 as HTML5,
  SiSass as SASS
} from 'react-icons/si';
const icons = [Reactjs, VueJs, CSS3, HTML5, SASS, Node, Java, Cplusplus];
function Techstack() {
  return (
    <Planet planet="saturn" planetSize={100}>
      <div className={style.container}>
        {icons.map((icon) => {
          return (
            <div className={style.icons} key={icon.name}>
              {React.createElement(icon, {
                style: {},
                className: style.icon
              })}
              <p>{icon.name.substring(2)}</p>
            </div>
          );
        })}
      </div>
    </Planet>
  );
}

export default Techstack;
