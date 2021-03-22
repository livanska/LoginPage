import React from 'react';
import { ProductsRecord } from './product';
export interface ProdCont {
  cart: ProductsRecord[];
  setCart(prod: ProductsRecord[]): void;
}

const context = React.createContext<ProdCont>({ cart: [], setCart: () => {} });
export default context;
