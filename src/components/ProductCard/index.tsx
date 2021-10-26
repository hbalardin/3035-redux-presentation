import { useState } from 'react';

import { CardContainer } from './styles';
import { FavoriteButton } from '../FavoriteButton';

import productImg from '../../assets/white-tshirt.png';

export const ProductCard = (): JSX.Element => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <CardContainer>
      <header>
        <img src={productImg} alt="camiseta branca" />
        <FavoriteButton isFavorite={isFavorite} onClick={() => setIsFavorite(!isFavorite)} />

      </header>
      <footer>
        <h2>Caneco 300ml</h2>
        <div>
          <div>
            <p>Preço</p>
            <strong>R$ 49</strong>
          </div>
          <button type="button">Adicionar ao carrinho</button>
        </div>
      </footer>
    </CardContainer>
  );
};
