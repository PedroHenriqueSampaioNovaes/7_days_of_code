import React from 'react';

/* Componentes */
import Menu from '../Menu';
import AssinaturaNewsletter from '../AssinaturaNewsletter';
import MinhaPlanta from '../MinhaPlanta';
import NossasPlantas from '../NossasPlantas';

const HomePage = () => {
  return (
    <>
      <Menu />
      <AssinaturaNewsletter />
      <MinhaPlanta />
      <NossasPlantas />
    </>
  );
};

export default HomePage;
