import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: ${(props) => props.theme.color.purple};
  color: ${(props) => props.theme.color.white};

  border: 0;
  border-radius: 8px;

  display: flex;
  gap: 8px;
  padding: 12px;

  font-size: 16px;
  font-weight: 500;

  transition: 300ms ease-in-out;

  :hover {
    transform: scale(1.1);
  }
`;
