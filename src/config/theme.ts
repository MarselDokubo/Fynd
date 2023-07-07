import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: '#007FFF',
  primaryAccent: '#ffffff'
};

const styles = {
  global: {
    'html, body': {
      height: '100%',
      bg: 'gray.50'
    },
    '#__next': {
      height: '100%',
      bg: 'gray.50'
    }
  }
};

export const theme = extendTheme({ colors, styles });
