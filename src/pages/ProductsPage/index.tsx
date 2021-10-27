import { Container } from './styles';
import { ProductCard } from '../../components/ProductCard';

import products from '../../payload.json';

export const ProductsPage = (): JSX.Element => (
  <Container>
      <section>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
