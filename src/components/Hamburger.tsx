import React, { ReactNode, useState } from 'react';
import style from '../styles/hamburger.module.scss';

const HamburgerMenu: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${style['menu']} ${isOpen ? style.open : ''}`}>
      <div className={style['icon']} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={style.items + ' ' + style.navLinks} onClick={toggleMenu}>
        {children}
      </ul>
    </div>
  );
};

export default HamburgerMenu;
