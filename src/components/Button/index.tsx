import { HTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  icon?: React.ReactNode
}

export const Button = ({ children, icon, ...rest }: ButtonProps): JSX.Element => (
  <ButtonContainer type="button" {...rest}>
    {icon}
    {children}
  </ButtonContainer>
);
