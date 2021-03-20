import React, { useContext, useMemo } from 'react';
import ProductsContext from '../cartContext';
import { ProductsRecord } from '../product';

export const Cart = () => {
  const [cart, setCart] = useContext(ProductsContext);

  const final = useMemo(() => {
    let sum: number = 0;
    if (cart.length > 0)
      sum = cart.reduce((res: number, prod: ProductsRecord) => res + prod.amount * prod.price, 0);
    return sum;
  }, [cart]);

  const deleteProduct = (item: ProductsRecord) => {
    if (item.amount > 1) {
      setCart(
        cart.map((prod: any) => {
          if (prod.id === item.id) {
            prod.amount--;
          }
          return prod;
        })
      );
    } else setCart((prev: ProductsRecord[]) => prev.filter((prod: ProductsRecord) => prod.id !== item.id));
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
