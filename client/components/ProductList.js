import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import Product from './Product';

const ProductList = () => {
  const { products, cart, addCart } = useContext(UserContext);
  const [selectedId, setSelectedId] = useState();

  const list = products.map(product => (
    <Product
      key={product._id} 
      product={product}
    />
  ));
  return (
    <div className="productlist-container">
      <h1> Product List </h1>
      <ul className="product-list">
        {list}
      </ul>
      <button
        floated="right"
        icon
        labelPosition="left"
        color="red"
        size="small"
        disabled={!selectedId}
      />
    </div>
  );
}
 
export default ProductList;