import React, { useContext, useMemo } from 'react';
import ProductsContext from '../cartContext';
import { ProductsRecord } from '../product';

export const Cart = () => {
  const cont = useContext(ProductsContext);
  const cart = cont.cart;

  const final = useMemo(() => {
    return cart.reduce((res: number, prod: ProductsRecord) => res + prod.amount * prod.price, 0);
  }, [cart]);

  const deleteProduct = (item: ProductsRecord) => {
    if (item.amount > 1) {
      const newCart = cart.map((prod: any) => {
        if (prod.id === item.id) {
          prod.amount--;
        }
        return prod;
      });
      cont.setCart(newCart);
    } else cont.setCart(cart.filter((prod: ProductsRecord) => prod.id !== item.id));
  };

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
              <button onClick={() => deleteProduct(prod)}>-</button>
            </td>
            <td>{prod.price * prod.amount}$</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
