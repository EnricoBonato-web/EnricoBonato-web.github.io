import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import style from '../styles/particel.module.scss';

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Particles
      id={style.tsparticles}
      init={particlesInit}
      loaded={particlesLoaded}
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          line_linked: {
            enable: false,
            opacity: 0.03
          },
          move: {
            direction: 'right',
            enable: true,
            random: false,
            speed: 0.3,
            straight: false
          },
          size: {
            value: 1
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05
            }
          }
        },
        retina_detect: true
      }}
    />
  );
};

export default Particle;
