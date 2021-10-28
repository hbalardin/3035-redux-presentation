import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

import { theme } from '../../styles/theme';

import { useAppSelector } from '../../customHooks/redux';

import {
  HeaderContainer, LogoContainer, NavContainer, IconItem,
} from './styles';

import logoImg from '../../assets/3035store.png';

export const Header = (): JSX.Element => {
  const { count } = useAppSelector((state) => state.cart);
  const { favoritesIds } = useAppSelector((state) => state.products);

  return (
    <HeaderContainer>
      <div>
        <LogoContainer href="http://">
          <img src={logoImg} alt="3035Store" />
        </LogoContainer>
        <NavContainer>
          <ul>
            <IconItem count={favoritesIds.length}><FaHeart size={32} color={theme.color.purple} /></IconItem>
            <IconItem count={count}><FaShoppingCart size={32} color={theme.color.purple} /></IconItem>
            <IconItem><FaUserCircle size={48} color={theme.color.purple} /></IconItem>
          </ul>
        </NavContainer>
      </div>
    </HeaderContainer>
  );
};
