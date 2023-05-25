import React, { FC } from 'react';
import style from '../../styles/Skills.module.scss';
import Timeline from './Timeline';
import Planet from './Planet';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface WorkProps {}

const Work: FC<WorkProps> = () => (
  <div>
    <Planet planet="eart" planetSize={100}>
      <Timeline />
    </Planet>
  </div>
);

export default Work;
