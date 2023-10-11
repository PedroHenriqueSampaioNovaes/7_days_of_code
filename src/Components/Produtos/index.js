import React from 'react';

import styles from './Produtos.module.css';

/* Componentes */
import ProdutoItem from './ProdutoItem';

const Produtos = ({ filter }) => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch(
        'https://gist.githubusercontent.com/lucianosants/cd3c8761fad5d441185cfa7365553e4b/raw/',
      );
      const json = await response.json();

      setProdutos(json);
    }
    fetchProdutos();
  }, []);

  const produtosFiltrados = filtrarProdutos(produtos, filter);

  return (
    <ul className={styles.produtos}>
      {produtosFiltrados.length > 0 ? (
        produtosFiltrados.map((produto, i) => (
          <ProdutoItem key={i} produto={produto} />
        ))
      ) : (
        <p className={styles.semProduto}>
          Nenhum produto encontrado com este filtro. Experimente alterá-lo.
        </p>
      )}
    </ul>
  );
};

const filtrarProdutos = (produtos, filtro) => {
  const { price, order } = filtro;

  return produtos
    .filter(filtrarPreco(Number(price)))
    .sort(ordenarProdutos(order));
};

const filtrarPreco = (price) => (produto) => !price || produto.price <= price;

const ordenarProdutos = (order) => (a, b) => {
  if (order === 'preco') {
    if (a.price < b.price) {
      return -1;
    } else {
      return true;
    }
  } else if (order === 'nome') {
    if (a.name < b.name) {
      return -1;
    } else {
      return true;
    }
  }
  return 0;
};

export default Produtos;
