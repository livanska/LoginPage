import React, { useContext, useMemo, useReducer } from 'react';
import { products, ProductsRecord } from '../product';
import { reducer } from '../Reducer';
import ProductsContext from '../cartContext';

export const Cart = () => {
  const { cart, dispatch } = useContext(ProductsContext);

  const final = useMemo(() => {
    console.log(cart);
    return cart.reduce((res: number, prod: ProductsRecord) => res + prod.amount * prod.price, 0);
  }, [cart]);

  return (
    <div>
      <p>MY CART</p>
      <p>Total: {final}$</p>
      <table>
        {cart.map((prod: ProductsRecord) => (
          <tr>
            <td>{prod.name}</td>
            <td>{prod.price}$</td>
            <td>{prod.amount} el.</td>
            <td>
              <button onClick={() => dispatch({ type: 'REMOVE', payload: prod })}>-</button>
            </td>
            <td>{prod.price * prod.amount}$</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
