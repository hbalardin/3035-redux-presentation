import styled from 'styled-components';

export const Container = styled.main`
  padding-top: 80px;
  min-height: 100vh;
  height: 100%;

  width: 100%;
  background: ${(props) => props.theme.color.background};

  > div {
    height: 100%;
    width: 100%;
    max-width: 1040px;

    margin: 0 auto;
    padding: 32px 32px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
  }
`;
