import React, { FC } from 'react';
import style from '../styles/contacts.module.scss';
import Planet from './Planet';
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Contacts: FC = () => (
  <Planet planet="neptune" planetSize={200}>
    <div className={style.container}>
      Contact:
      <p>Email: enrico.bonato95@gmail.com</p>
      <p>Github: EnricoBonato-web</p>
      <ul className={style.social}>
        <li>
          <a
            href="https://github.com/EnricoBonato-web"
            style={{ color: 'white' }}
            target="_blank"
            rel="noopener noreferrer">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/enrico-bonato-685b7615b"
            style={{ color: 'white' }}
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/booonnyy/"
            style={{ color: 'white' }}
            target="_blank"
            rel="noopener noreferrer">
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  </Planet>
);

export default Contacts;
