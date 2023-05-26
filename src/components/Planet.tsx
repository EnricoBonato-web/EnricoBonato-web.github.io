import React, { ReactNode, useEffect, useState } from 'react';
import style from '../styles/planet.module.scss';

const Planet: React.FC<{ children: ReactNode; planet: string; planetSize: number }> = ({
  children,
  planet,
  planetSize = 100
}) => {
  const [diameter, setDiameter] = useState(2000);

  useEffect(() => {
    const updateDiameter = () => {
      const childElement = document.getElementById(planet);
      const topElement = document.getElementById('top');
      if (childElement && topElement) {
        const newDiameter =
          300 +
          2 *
            ((childElement.getBoundingClientRect().bottom || 0) -
              topElement.getBoundingClientRect().top);
        setDiameter(newDiameter);
      }
    };

    // Call the updateDiameter function when the window is resized
    window.addEventListener('resize', updateDiameter);

    // Call the updateDiameter function initially
    updateDiameter();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateDiameter);
    };
  }, [planet]);

  const keyframes = `@-webkit-keyframes ${planet} {
    from {
      transform: translate(-${diameter / 2}px, -${diameter / 2 + 200}px) rotate(${
    Math.sin(window.innerWidth / diameter) * 90 || 50
  }deg);
    }
    to {
      transform: translate(-${diameter / 2}px, -${diameter / 2 + 200}px) rotate(-${
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
      <div
        className={style.orbit}
        style={{
          width: diameter,
          height: diameter,
          transform: `translate(-${diameter / 2}px, -${diameter / 2 + 200}px)`
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
      <div id={planet} className={style.content}>
        {children}
      </div>
    </div>
  );
};

export default Planet;
