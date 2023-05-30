import React, { ReactNode, useEffect, useState } from 'react';
import style from '../styles/planet.module.scss';

const Planet: React.FC<{ children: ReactNode; planet: string; planetSize: number }> = ({
  children,
  planet,
  planetSize = 100
}) => {
  const [diameter, setDiameter] = useState(2000);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const updateDiameter = () => {
      const childElement = document.getElementById(planet);
      const topElement = document.getElementById('top');
      if (childElement && topElement) {
        const newDiameter =
          100 +
          2 *
            ((childElement.getBoundingClientRect().bottom || 0) -
              topElement.getBoundingClientRect().top);
        setDiameter(newDiameter);
        setPosition(
          (childElement.getBoundingClientRect().top +
            childElement.getBoundingClientRect().height / 8 || 0) -
            topElement.getBoundingClientRect().top
        );
      }
    };
    window.addEventListener('resize', updateDiameter);
    updateDiameter();
    return () => {
      window.removeEventListener('resize', updateDiameter);
    };
  }, []);

  const keyframes = `@-webkit-keyframes ${planet} {
    from {
      transform: translate(-${diameter / 2}px, -${diameter / 2 + position}px) rotate(${
    Math.sin(window.innerWidth / diameter) * 90 || 50
  }deg);
    }
    to {
      transform: translate(-${diameter / 2}px, -${diameter / 2 + position}px) rotate(-${
    Math.sin(window.innerWidth / diameter) * 90 || 50
  }deg);
    }
  }`;

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }, [keyframes]);

  return (
    <div className={style.container}>
      <div id={planet} className={style.content}>
        {children}
      </div>
      <div
        className={style.orbit}
        style={{
          width: diameter,
          height: diameter,
          transform: `translate(-${diameter / 2}px, -${diameter / 2 + position}px)`
        }}></div>
      <div
        className={style.planet}
        style={{
          backgroundImage: `url(${planet}.gif)`,
          width: diameter + planetSize,
          height: diameter + planetSize,
          animation: `${planet} 20s infinite linear`,
          margin: `-${planetSize / 2}px`,
          backgroundSize: planetSize
        }}></div>
    </div>
  );
};

export default Planet;
