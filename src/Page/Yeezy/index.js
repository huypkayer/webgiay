import React from 'react';
import ProductList from '../../components/ProductList';
import Search from '../../components/Search';

const Yeezy = () => {
  return (
    <div>
      <Search />
      <ProductList categoryName="Yeezy" />
      <p>Yeezy</p>
    </div>
  );
};

export default Yeezy;
