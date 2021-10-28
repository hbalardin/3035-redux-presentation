import { useEffect } from 'react';

import { fetchProducts } from '../../store/ducks/products/thunks/fetchProducts';
import { useAppDispatch, useAppSelector } from '../../customHooks/redux';

import { Loading } from '../../components/Loading';
import { ProductCard } from '../../components/ProductCard';

import { Container } from './styles';

export const ProductsPage = (): JSX.Element => {
  const { items: products } = useAppSelector((state) => state.products);
  const { isLoading } = useAppSelector((state) => state.loading);

  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(fetchProducts());
  }, [appDispatch]);

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <section>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </Container>
  );
};
