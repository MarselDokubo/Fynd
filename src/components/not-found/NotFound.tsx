import { NotAllowedIcon } from '@chakra-ui/icons';

import { Center, Heading, VStack } from '@chakra-ui/react';

export const NotFound = () => {
  return (
    <Center>
      <VStack>
        <NotAllowedIcon boxSize={32} />
        <Heading>Not Found</Heading>
      </VStack>
    </Center>
  );
};
