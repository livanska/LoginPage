import React, { Provider, useContext } from 'react';
import ProductsContext from '../cartContext';
import { Product, products, ProductsRecord } from '../product';

export const Products = () => {
  const [cart, setCart] = useContext(ProductsContext);
  const addProduct = (item: Product) => {
    if (cart.some((e: ProductsRecord) => e.id === item.id)) {
      setCart(
        cart.map((prod: ProductsRecord) => {
          if (prod.id === item.id) {
            prod.amount++;
          }
          return prod;
        })
      );
    } else setCart([...cart, { ...item, amount: 1 } as ProductsRecord]);
    console.log(cart);
  };
  return (
    <div>
      <p>ALL PRODUCTS</p>
      <table>
        {products.map(prod => (
          <tr>
            <td>{prod.name}</td>
            <td>{prod.price}$</td>
            <td>
              <button onClick={() => addProduct(prod)}>+</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
