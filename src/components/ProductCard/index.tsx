import { FaShoppingCart } from 'react-icons/fa';


import { IProduct } from '../../models/product';
import { FavoriteButton } from '../FavoriteButton';
import { Button } from '../Button';

import { CardContainer, CardContent } from './styles';
import { theme } from '../../styles/theme';

export const ProductCard = ({
  id, path, price, title,
}: IProduct): JSX.Element => {

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
          <Button
            icon={<FaShoppingCart size={16} color={theme.color.white} />}
          >
            Comprar
          </Button>
        </div>
      </CardContent>
    </CardContainer>
  );
};
