import { useCallback, useMemo, useState } from 'react';
interface Product {
  id: number;
  name: string;
  price: number;
}

interface IFilterOptions {
  name?: string;
  priceMore?: number;
  priceLess?: number;
}

const Products: Product[] = [
  {
    id: 1,
    name: 'apple',
    price: 10
  },
  {
    id: 2,
    name: 'tomato',
    price: 15
  },
  {
    id: 3,
    name: 'cherry',
    price: 20
  },
  {
    id: 4,
    name: 'cucumber',
    price: 4
  },
  {
    id: 5,
    name: 'kiwi',
    price: 9
  },
  {
    id: 6,
    name: 'guava',
    price: 8
  },
  {
    id: 7,
    name: 'lemon',
    price: 10
  },
  {
    id: 8,
    name: 'grape',
    price: 16
  },
  {
    id: 9,
    name: 'fig',
    price: 12
  }
];

const useProducts = (perPage: number, allProducts: Product[] = Products) => {
  const [productsList, setProductsList] = useState<Product[]>(allProducts);
  const [page, setPage] = useState<number>(0);

  const products = useMemo(
    () =>
      productsList.length >= perPage
        ? productsList.slice(page * perPage, (page + 1) * perPage)
        : productsList,
    [page, perPage, productsList]
  );

  const total = useMemo(() => {
    return Math.ceil(productsList.length / perPage);
  }, [perPage, productsList]);

  const changePage = useCallback(
    (active: number) => {
      ((active < total && active > 0) || (active < total && active >= 0)) && setPage(active);
    },
    [total]
  );

  const addProduct = (item: Partial<Product>) => {
    setProductsList(prev => [...prev, { id: productsList.length + 1, ...item } as Product]);
  };

  const deleteProduct = (id: number) => {
    setProductsList(prev => prev.filter(prod => prod.id !== id));
  };

  const editProduct = (item: Partial<Product>) => {
    setProductsList(prev =>
      prev.map(prod => {
        if (prod.id === item.id) {
          return {
            ...prod,
            ...item
          };
        } else return prod;
      })
    );
  };

  const applyFilter = useCallback(
    (filter: IFilterOptions) => {
      filter.priceMore && setProductsList(productsList.filter(prod => prod.price > filter.priceMore!));
      filter.priceLess && setProductsList(productsList.filter(prod => prod.price < filter.priceLess!));
    },
    [productsList]
  ); //if [productsList] it will rewrite array every time -> becomes 0 length soon

  return {
    page,
    products,
    total,
    changePage,
    addProduct,
    deleteProduct,
    editProduct,
    applyFilter
  };
};
export default useProducts;
