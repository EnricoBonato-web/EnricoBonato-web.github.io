import React, { FC } from 'react'
import style from '../styles/contacts.module.scss'
import Planet from './Planet'
import { AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const Contacts: FC = () => (
    <Planet planet="neptune" planetSize={200}>
        <div className={style.container}>
            <h1>How to contact me?</h1>
            <p>
                <small>Phone:</small> +39 3496084343
            </p>
            <p>
                <small>Github:</small>{' '}
                <a
                    href="https://github.com/EnricoBonato-web"
                    style={{ color: 'white' }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    EnricoBonato-web
                </a>
            </p>
            <p>
                <small>Email:</small> enrico.bonato95@gmail.com
            </p>
            <ul className={style.social}>
                <li>
                    <a
                        href="https://github.com/EnricoBonato-web"
                        style={{ color: 'white' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/enrico-bonato-685b7615b"
                        style={{ color: 'white' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/booonnyy/"
                        style={{ color: 'white' }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillInstagram />
                    </a>
                </li>
            </ul>
            <a href="../assets/EnricoBonatoCV.pdf" download="EnricoBonatoCV.pdf" className={style.button}>
                Download CV
            </a>
        </div>
    </Planet>
)

export default Contacts
