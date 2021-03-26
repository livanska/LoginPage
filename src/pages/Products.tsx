import React, { useContext } from 'react';
import ProductsContext from '../cartContext';
import { Product, products, ProductsRecord } from '../product';

export const Products = () => {
  const { cart, dispatch } = useContext(ProductsContext);
  // const cart = cont.cart;

  return (
    <div>
      <p>ALL PRODUCTS</p>
      <table>
        {products.map(prod => (
          <tr>
            <td>{prod.name}</td>
            <td>{prod.price}$</td>
            <td>
              <button onClick={() => dispatch({ type: 'ADD', payload: prod })}>+</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
