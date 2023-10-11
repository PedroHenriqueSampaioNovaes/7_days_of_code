import React from 'react';

const Select = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        <option value="">Ordenação padrão</option>
        <option value="nome">Nome</option>
        <option value="preco">Preço</option>
      </select>
    </div>
  );
};

export default Select;
