import styled, { css } from 'styled-components';
import { Disappear, Spin } from '../Animations/loading';

interface LoadingProps {
  isLoading: boolean;
}

export const LoadingContainer = styled.div<LoadingProps>`
  height: 100vh;

  background: ${(props) => props.theme.color.purple};

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => (!props.isLoading
    ? css`
        animation: ${Disappear} 2s;
      `
    : '')}
  animation-fill-mode: forwards;
`;

export const Spinner = styled.div<LoadingProps>`
  width: 72px;
  height: 72px;

  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.color.white};
  border-top: 0;
  border-right: 0;

  ${(props) => (props.isLoading
    ? css`
        animation: ${Spin} infinite alternate 2.5s ease-in-out;
      `
    : css`
        display: none;
      `)}
`;
