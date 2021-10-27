import styled from 'styled-components';

export const CardContainer = styled.section`
  width: 304px;
  max-height: 440px;

  background: ${(props) => props.theme.color.white};
  border-radius: 24px;


  > div:first-child {
    padding: 24px 32px;
    height: 66%;
    width: 100%;

    position: relative;

    img {
      height: 100%;
      width: 100%;

      object-fit: contain;
    }
  }
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 16px 20px 24px;

  border-top: 2px solid  ${(props) => props.theme.color.background};

  h2 {
    font-size: 24px;
    color: ${(props) => props.theme.color.text}
  }

  div {
    margin-top: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 20px;

    strong {
      font-size: 40px;
      color: ${(props) => props.theme.color.purple}
    }
  }
`;
