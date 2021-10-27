import styled, { css } from 'styled-components';

interface IconItemProps {
  count?: number
}

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 80px;

  position: fixed;
  top: 0;
  z-index: 10;

  background-color: ${(props) => props.theme.color.white};

  > div {
    height: 100%;
    width: 100%;
    max-width: 1040px;

    margin: 0 auto;
    padding: 16px 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled.a`
  height: 100%;
  padding: 8px;

  img {
    height: 100%;
  }
`;

export const NavContainer = styled.nav`
  ul {
    display: flex;
    align-items: center;

    gap: 24px;
  }
`;

export const IconItem = styled.li<IconItemProps>`
  list-style: none;
  position: relative;

  ${(props) => {
    if (!props?.count) return '';

    return css`
      ::after {
        content: '${props.count}';
        width: 20px;
        height: 20px;

        background: ${props.theme.color.lightPurple};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 14px;
        color: ${props.theme.color.white};

        position: absolute;

        bottom: 0;
        right: -25%;
      }
    `;
  }}
`;
