import { Box } from '@chakra-ui/react';
import { FC } from 'react';

export type Props = {
  children: string;
};

export const Content: FC<Props> = ({ children }) => {
  return (
    <Box lineHeight="7" letterSpacing="wide" my="4">
      {children}
    </Box>
  );
};
