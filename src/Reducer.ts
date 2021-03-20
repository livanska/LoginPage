import { ProductsRecord } from './product';

export function reducer(cart: any, action: any) {
  switch (action.type) {
    case 'ADD':
      if (cart.some((e: ProductsRecord) => e.id === action.payload.id)) {
        return cart.map((prod: ProductsRecord) => {
          if (prod.id === action.payload.id) {
            prod.amount++;
          }
          return prod;
        });
      } else return [...cart, { ...action.payload, amount: 1 } as ProductsRecord];

    case 'REMOVE':
      if (action.payload.amount > 1) {
        return cart.map((prod: any) => {
          if (prod.id === action.payload.id) {
            prod.amount--;
          }
          return prod;
        });
      } else
        return (prev: ProductsRecord[]) =>
          prev.filter((prod: ProductsRecord) => prod.id !== action.payload.id);
    default:
      return cart;
  }
}
