import React from 'react';
import ProductList from '../../components/ProductList';
import Search from '../../components/Search';

const Adidas = () => {
  return (
    <div>
      <Search />
      <ProductList categoryName="Adidas" />
      <p>Adidas</p>
    </div>
  );
};

export default Adidas;
