import React from 'react';
import { ProductsRecord } from './product';
export interface ProdCont {
  cart: ProductsRecord[];
  dispatch({}): void;
}

const context = React.createContext<ProdCont>({ cart: ([] = []), dispatch: () => {} });
export default context;
