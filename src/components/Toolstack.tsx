import React from 'react';
import style from '../styles/toolstack.module.scss';
import Planet from './Planet';
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGooglechrome,
  SiQt,
  SiGit,
  SiApple,
  SiGitlab
} from 'react-icons/si';

const icons = [
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiGooglechrome,
  SiQt,
  SiGit,
  SiApple,
  SiGitlab
];

function Toolstack() {
  return (
    <Planet planet="uranus" planetSize={100}>
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

export default Toolstack;
