import React, { FC, ReactNode } from 'react';
import { ChakraProvider, GlobalStyle } from '@chakra-ui/react';
import { theme } from '@/config/theme';

type Props = {
  children: ReactNode;
};

const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
};

export default AppProvider;
