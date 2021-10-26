import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 80px;
  min-height: 100vh;

  width: 100%;
  background: ${(props) => props.theme.color.background};
`;
