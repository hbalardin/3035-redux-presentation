import { keyframes } from 'styled-components';

export const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(900deg);
  }
`;

export const Disappear = keyframes`
  0% {
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100% {
    height: 0;
  }
`;
