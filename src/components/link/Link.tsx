import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@chakra-ui/react';

const variants = {
  //  The variant determine how the link looks so I'm guessing it has something to do with styling
  link: {
    variant: 'link',
    color: 'primary'
  },
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
type LinkComponentProps = {
  children: ReactNode;
  href: string;
  variant?: keyof typeof variants;
  icon?: JSX.Element;
  shallow?: boolean;
};

export const LinkComponent: FC<LinkComponentProps> = ({
  children,
  href,
  variant = 'link',
  icon,
  shallow = false
}) => {
  return (
    <Link href={href} shallow={shallow}>
      <Button leftIcon={icon} {...variants[variant]}>
        {children}
      </Button>
    </Link>
  );
};
