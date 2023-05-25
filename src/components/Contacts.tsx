import React, { FC } from 'react';
import style from '../styles/contacts.module.scss';
import Planet from './Planet';

const Contacts: FC = () => (
  <Planet planet="neptune" planetSize={200}>
    <div className={style.container}>
      Contact:
      <p>Email: john.doe@email.com</p>
      <p>Phone: +1234567890</p>
      <p>LinkedIn: linkedin.com/in/johndoe</p>
    </div>
  </Planet>
);

export default Contacts;
