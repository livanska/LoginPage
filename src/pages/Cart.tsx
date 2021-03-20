import React, { useContext, useMemo, useReducer } from 'react';
import { products, ProductsRecord } from '../product';
import { reducer } from '../Reducer';

export const Cart = () => {
  const [cart, dispatch] = useReducer(reducer, []);

  const final = useMemo(() => {
    let sum: number = 0;
    console.log(cart);
    if (cart.length > 0)
      sum = cart.reduce((res: number, prod: ProductsRecord) => res + prod.amount * prod.price, 0);
    return sum;
  }, [cart]);

  return (
    <div>
      <div>
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
        <p>MY CART</p>
        <p>Total: {final}$</p>
        {console.log(cart)}
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
    </div>
  );
};
