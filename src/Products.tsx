import { useRef, useState } from 'react';
import useProducts, { IFilterOptions } from './useProducts';
import css from './Products.module.scss';
import cn from 'classnames';

function Products() {
  const {
    products,
    page,
    total,
    changePage,
    addProduct,
    deleteProduct,
    editProduct,
    applyFilter
  } = useProducts(4);
  const nameInput = useRef<HTMLInputElement | null>(null);
  const priceInput = useRef<HTMLInputElement | null>(null);
  const filterInput = useRef<HTMLInputElement | null>(null);
  const [filter, setFilter] = useState<IFilterOptions>({} as IFilterOptions);
  const [selected, setSelected] = useState<number | null>(null);

  const handlePageChange = (next: boolean) => {
    next ? changePage(page + 1) : changePage(page - 1);
    setSelected(null);
  };
  const handleAdd = () => {
    nameInput?.current?.value != null &&
    nameInput?.current?.value !== '' &&
    priceInput?.current?.value != null &&
    priceInput?.current?.value != ''
      ? addProduct({ name: nameInput.current.value, price: priceInput.current.valueAsNumber })
      : alert('No info');
  };

  const handleDelete = () => {
    selected !== null && deleteProduct(selected);
  };

  const handleEdit = () => {
    if (selected !== null) {
      let values = {
        id: selected,
        ...(nameInput?.current?.value != null && nameInput?.current?.value !== ''
          ? { name: nameInput?.current?.value }
          : {}),
        ...(priceInput?.current?.value != null && priceInput?.current?.value != ''
          ? { price: priceInput?.current?.valueAsNumber }
          : {})
      };
      editProduct(values);
    } else alert('No selected');
  };

  const handleMoreFilter = (more: number) => {
    setFilter(prev => {
      return { ...prev, priceMore: more };
    });
    console.log(filter);
  };

  const handleLessFilter = (less: number) => {
    setFilter(prev => {
      return { ...prev, priceLess: less };
    });
    console.log(filter);
  };

  const handleNameFilter = (name: string) => {
    setFilter(prev => {
      return { ...prev, name: name };
    });
    console.log(filter);
  };

  const applyFilters = () => {
    applyFilter(filter);
  };
  const resetFilters = () => {
    applyFilter({});
  };

  return (
    <div>
      <div className={cn(css.products_wrapper)}>
        <h3>Choose product to delete or edit(write values you want to change)</h3>
        {products.map((prod, ind) => (
          <div
            className={cn(css.product_container, { [css.active_product]: selected === prod.id })}
            onClick={() => setSelected(prod.id)}
            key={ind}
          >
            <p>
              {prod.name}
              {' $' + prod.price}
            </p>
          </div>
        ))}
      </div>
      <p>
        Page {page + 1} from {total === 0 ? 1 : total}
      </p>
      <button className={cn(css.button)} onClick={() => handlePageChange(false)}>
        Prev Page
      </button>
      <button className={cn(css.button)} onClick={() => handlePageChange(true)}>
        Next Page
      </button>
      <div className={cn(css.products_wrapper)}>
        <div className={cn(css.inputs_container)}>
          <input placeholder='Name' className={cn(css.input)} ref={nameInput} />
          <input placeholder='Price' className={cn(css.input)} type='number' ref={priceInput} />
        </div>
        <div className={cn(css.buttons_container)}>
          <button className={cn(css.button)} onClick={handleAdd}>
            Add
          </button>
          <button className={cn(css.button)} disabled={selected == null} onClick={handleDelete}>
            Delete
          </button>
          <button className={cn(css.button)} disabled={selected == null} onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div className={cn(css.filter_container)}>
          <div className={cn(css.row_container)}>
            Price less
            <input
              placeholder='Price'
              className={cn(css.input)}
              type='number'
              onChange={e => handleLessFilter(e.target.valueAsNumber)}
            />
          </div>
          <div className={cn(css.row_container)}>
            Price more
            <input
              placeholder='Price'
              className={cn(css.input)}
              type='number'
              onChange={e => handleMoreFilter(e.target.valueAsNumber)}
            />
          </div>
          <div className={cn(css.row_container)}>
            Name
            <input
              placeholder='Name'
              className={cn(css.input)}
              type='text'
              onChange={e => handleNameFilter(e.target.value)}
            />
          </div>
          <button className={cn(css.button)} onClick={applyFilters}>
            Find
          </button>
          <button className={cn(css.button)} onClick={resetFilters}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
export default Products;
