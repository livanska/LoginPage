import React, { useReducer, useState } from 'react';
import cartContext from './cartContext';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
import { reducer } from './Reducer';
import { ProductsRecord } from './product';

const init: ProductsRecord[] = [];

export const Wrapper = () => {
  const [cart, dispatch] = useReducer(reducer, init);
  return (
    <div>
      <cartContext.Provider value={{ cart, dispatch }}>
        <Products />
        <Cart />
      </cartContext.Provider>
    </div>
  );
};
