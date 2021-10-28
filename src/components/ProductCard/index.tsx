import { FaShoppingCart } from 'react-icons/fa';

import { handleAddToCart } from '../../store/ducks/cart';
import { toggleFavorite } from '../../store/ducks/products';
import { useAppDispatch, useAppSelector } from '../../customHooks/redux';

import { IProduct } from '../../models/product';
import { FavoriteButton } from '../FavoriteButton';
import { Button } from '../Button';

import { CardContainer, CardContent } from './styles';
import { theme } from '../../styles/theme';

export const ProductCard = ({
  id, path, price, title,
}: IProduct): JSX.Element => {
  const { favoritesIds } = useAppSelector((state) => state.products);

  const appDispatch = useAppDispatch();

  const isFavorite = favoritesIds.includes(id);

  return (
    <CardContainer id={id}>
      <div>
        <img src={path} alt="white t-shirt" />
        <FavoriteButton isFavorite={isFavorite} onClick={() => appDispatch(toggleFavorite({ productId: id }))} />
      </div>
      <CardContent>
        <h2>{title}</h2>
        <div>
          <strong>{price}</strong>
          <Button
            icon={<FaShoppingCart size={16} color={theme.color.white} />}
            onClick={() => appDispatch(handleAddToCart({ productId: id }))}
          >
            Comprar
          </Button>
        </div>
      </CardContent>
    </CardContainer>
  );
};
