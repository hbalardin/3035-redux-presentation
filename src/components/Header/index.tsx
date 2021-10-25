import { FaHeart, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

import { theme } from '../../styles/theme';

import {
  HeaderContainer, LogoContainer, NavContainer, IconItem,
} from './styles';

import logoImg from '../../assets/temp-logo.png';

export const Header = (): JSX.Element => (
  <HeaderContainer>
    <div>
      <LogoContainer href="http://">
        <img src={logoImg} alt="3035Tech" />
      </LogoContainer>
      <NavContainer>
        <ul>
          <IconItem><FaHeart size={32} color={theme.color.purple} /></IconItem>
          <IconItem count={2}><FaShoppingCart size={32} color={theme.color.purple} /></IconItem>
          <IconItem><FaUserCircle size={48} color={theme.color.purple} /></IconItem>
        </ul>
      </NavContainer>
    </div>
  </HeaderContainer>
);
