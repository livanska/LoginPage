import React, { useContext } from 'react';
import ProductsContext from '../cartContext';
import { Product, products, ProductsRecord } from '../product';

export const Products = () => {
  const cont = useContext(ProductsContext);
  const cart = cont.cart;
  const addProduct = (item: Product) => {
    const isProductInCart = cart.some((e: ProductsRecord) => e.id === item.id);
    if (isProductInCart) {
      const newCart = cart.map((prod: ProductsRecord) => {
        if (prod.id === item.id) {
          prod.amount++;
        }
        return prod;
      });
      cont.setCart(newCart);
    } else cont.setCart([...cart, { ...item, amount: 1 } as ProductsRecord]);
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
