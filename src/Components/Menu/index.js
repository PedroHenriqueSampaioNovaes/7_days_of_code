import React from 'react';
import styles from './Menu.module.css';

import CasaVerde from '../../Assets/logo.svg';

const Menu = () => {
  return (
    <header className={styles.menu}>
      <a href="/">
        <img src={CasaVerde} alt="Logo CasaVerde" />
      </a>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">Como fazer</a>/
          </li>
          <li>
            <a href="/">Ofertas</a>/
          </li>
          <li>
            <a href="/">Depoimentos</a>/
          </li>
          <li>
            <a href="/">Vídeos</a>/
          </li>
          <li>
            <a href="/">Meu carrinho</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
