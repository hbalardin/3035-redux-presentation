import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { theme } from '../../styles/theme';
import { ButtonContainer } from './styles';

interface ButtonProps {
  isFavorite: boolean;
  onClick: () => void
}

export const FavoriteButton = ({ isFavorite, onClick }: ButtonProps): JSX.Element => (
  <ButtonContainer type="button" onClick={onClick}>
    {isFavorite
      ? <FaHeart size={36} color={theme.color.purple} />
      : <FaRegHeart size={36} color={theme.color.purple} />}
  </ButtonContainer>
);
