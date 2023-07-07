import { Box, Container, Heading, VStack } from '@chakra-ui/react';
import { ReactNode, FC } from 'react';
import { LinkComponent as Link } from '@/components/link';

type Props = {
  children: ReactNode;
};

export const PageLayout: FC<Props> = ({ children }) => {
  return (
    <Box maxW="container.lg" mx="auto" h="full">
      <Box minH="80%" mx="4">
        {children}
      </Box>
      <Box py="8" textAlign="center">
        <VStack>
          <Heading>
            Powered by <Link href="/">Fynd</Link>
          </Heading>
          <p>&copy; 2023</p>
        </VStack>
      </Box>
    </Box>
  );
};
