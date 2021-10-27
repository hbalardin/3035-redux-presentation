import { Container } from './styles';
import { ProductCard } from '../../components/ProductCard';

import products from '../../payload.json';

export const ProductsPage = (): JSX.Element => (
  <Container>
    <div>
      {products.data.map((product) => (
        <ProductCard {...product} />
      ))}
    </div>
  </Container>
);
