import { HTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <ButtonContainer type="button" {...rest}>
    {children}
  </ButtonContainer>
);
