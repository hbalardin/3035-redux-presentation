import { useState } from 'react';

import { CardContainer, CardContent } from './styles';
import { FavoriteButton } from '../FavoriteButton';
import { Button } from '../Button';

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  path: string;
}

export const ProductCard = ({
  id, path, price, title,
}: ProductCardProps): JSX.Element => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <CardContainer id={id}>
      <div>
        <img src={path} alt="white t-shirt" />
        <FavoriteButton isFavorite={isFavorite} onClick={() => setIsFavorite(!isFavorite)} />

      </div>
      <CardContent>
        <h2>{title}</h2>
        <div>
          <strong>{price}</strong>
          <Button>Comprar</Button>
        </div>
      </CardContent>
    </CardContainer>
  );
};
