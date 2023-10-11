import React from 'react';

import styles from './MinhaPlanta.module.css';

import MinhaPlantaImg from '../../Assets/minha-planta.png';

/* SVGs */
import { ReactComponent as Cursor } from '../../Assets/icons/mouse.svg';
import { ReactComponent as Cart } from '../../Assets/icons/cart.svg';
import { ReactComponent as Truck } from '../../Assets/icons/truck.svg';

const MinhaPlanta = () => {
  return (
    <section className={styles.minhaPlanta}>
      <img src={MinhaPlantaImg} alt="Imagem de fundo de uma planta" />

      <div className={styles.comoConseguir}>
        <p>Como conseguir</p>
        <h2>minha planta</h2>

        <ul className={styles.lista}>
          <li>
            <div>
              <Cursor />
            </div>
            <p>Escolha suas plantas</p>
          </li>
          <li>
            <div>
              <Cart />
            </div>
            <p>Faça seu pedido</p>
          </li>
          <li>
            <div>
              <Truck />
            </div>
            <p>Aguarde na sua casa</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MinhaPlanta;
