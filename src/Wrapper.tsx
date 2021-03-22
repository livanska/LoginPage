import React, { useState } from 'react';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import cartContext from './cartContext';
import { ProductsRecord } from './product';

export const Wrapper = () => {
  const [cart, setCart] = useState<ProductsRecord[]>([]);
  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <Products />
      <Cart />
    </cartContext.Provider>
  );
};
