import { useCallback, useMemo, useState } from 'react';
interface Product {
  id: number;
  name: string;
  price: number;
}

export interface IFilterOptions {
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
  const [filter, setFilter] = useState<IFilterOptions | null>(null);

  const { products, total } = useMemo(() => {
    let prods = productsList;
    if (filter) {
      filter.priceMore && (prods = productsList.filter(prod => prod.price > filter.priceMore!));
      filter.priceLess && (prods = productsList.filter(prod => prod.price < filter.priceLess!));
      filter.name && filter.name != '' && (prods = productsList.filter(prod => prod.name === filter.name));
    }
    let products = prods.length >= perPage ? prods.slice(page * perPage, (page + 1) * perPage) : prods;
    let total = Math.ceil(prods.length / perPage);
    return { products, total };
  }, [page, perPage, filter, productsList]);

  const changePage = useCallback(
    (active: number) => {
      if (active < total && active >= 0) setPage(active);
    },
    [total]
  );

  const addProduct = (item: Partial<Product>) => {
    setProductsList(prev => [...prev, { id: prev.length + 1, ...item } as Product]);
  };

  const deleteProduct = (id: number) => {
    setProductsList(prev => prev.filter(prod => prod.id !== id));
  };

  const editProduct = (item: Partial<Product>) => {
    console.log(productsList);
    setProductsList(prev =>
      prev.map(prod => {
        if (prod.id === item.id) {
          return {
            ...prod,
            ...item
          };
        }
        return prod;
      })
    );
  };

  const applyFilter = useCallback((filter: IFilterOptions) => {
    setFilter(filter);
  }, []);

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
