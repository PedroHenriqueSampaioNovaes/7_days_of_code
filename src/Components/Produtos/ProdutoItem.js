import React from 'react';

import styles from './ProdutoItem.module.css';

const ProdutoItem = ({ produto }) => {
  return (
    <li className={styles.produto}>
      <img src={produto.img} alt={`Foto da Planta ${produto.name}`} />

      <div className={styles.descricao}>
        <h3 className={styles.name}>{produto.name}</h3>
        <p className={styles.preco}>R$ {produto.price.toFixed(2)}</p>
        <a className={styles.comprar} href="/">
          Comprar
        </a>
      </div>
    </li>
  );
};

export default ProdutoItem;
