import styled from 'styled-components';

export const CardContainer = styled.section`
  margin: 72px;

  height: 416px;
  width: 256px;

  background: ${(props) => props.theme.color.white};
  border-radius: 24px;


  header {
    padding: 24px 32px;
    height: 66%;
    width: 100%;

    position: relative;

    img {
      height: 100%;
      width: 100%;

      object-fit: cover;
    }
  }

  footer {
    width: 100%;
    padding: 16px 24px;

  }
`;
