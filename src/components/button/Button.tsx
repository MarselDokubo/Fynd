import React, { FC, MouseEventHandler, ReactNode, useEffect } from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';

const variants = {
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: {
      opacity: '0.9'
    }
  },
  outline: {
    variant: 'outline',
    bg: 'transparent',
    color: 'primary'
  }
};
export type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: keyof typeof variants;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: JSX.Element;
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'solid',
  type = 'button',
  icon,
  ...props
}) => {
  useEffect(() => {
    console.log('type of button', typeof Button);
  }, []);
  return (
    <ChakraButton type={type} leftIcon={icon} {...variants[variant]} {...props}>
      {children}
    </ChakraButton>
  );
};
