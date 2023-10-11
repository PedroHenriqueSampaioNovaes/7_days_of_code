import React from 'react';

import styles from './NossasPlantas.module.css';

/* Componentes */
import Produtos from '../Produtos';
import Input from '../Form/Input';
import Select from '../Form/Select';

const NossasPlantas = () => {
  const [filter, setFiltered] = React.useState({ order: '', price: '' });

  function changeFilter({ target }) {
    const name = target.name;
    const value = target.value;

    setFiltered({ ...filter, [name]: value });
  }

  return (
    <section>
      <div className={styles.introSecao}>
        <p className={styles.subtitulo}>Conheça nossas</p>
        <h2 className={styles.titulo}>Nossas plantas</h2>
      </div>
      <div className={styles.groupFilter}>
        <Select
          label="Ordenar por:"
          value={filter.order}
          name="order"
          onChange={changeFilter}
        />
        <Input
          type="number"
          label="Mostrar produtos de até R$"
          name="price"
          placeholder="Digite um valor"
          value={filter.price}
          onChange={changeFilter}
          min="0"
        />
      </div>
      <Produtos filter={filter} />
    </section>
  );
};

export default NossasPlantas;
