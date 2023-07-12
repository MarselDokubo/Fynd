import { InfoOutlineIcon } from "@chakra-ui/icons";
import { Box, Container, Flex, HStack } from "@chakra-ui/react";
import { ReactNode } from "react";

import { Button } from "@/components/button";
import { LinkComponent } from "@/components/link";
import { useUser } from "@/testing/TestData";

type Type_DashboardLayoutProps = {
  children: ReactNode;
};

export const DashboardLayout = ({ children }: Type_DashboardLayoutProps) => {
  const user = useUser();

  return (
    <Box as="section" h="100vh" overflowY="auto">
      <Navbar />
      <Container as="main" maxW="container.lg" py="12">
        {children}
      </Container>
      <Box py="8" textAlign="center">
        <LinkComponent href={`/organizations/${user.data?.organisationId}`}>
          View Public Organization Page
        </LinkComponent>
      </Box>
    </Box>
  );
};

const Navbar = () => {
  return (
    <Box as="nav" bg="primary" color="primaryAccent">
      <Container maxW="container.lg" size="3xl" py="3">
        <Flex justify="space-between">
          <HStack>
            <LinkComponent variant="solid" href="/">
              Jobs App
            </LinkComponent>
            <HStack spacing="1">
              <LinkComponent
                icon={<InfoOutlineIcon />}
                variant="solid"
                href="/dashboard/jobs"
              >
                Jobs
              </LinkComponent>
            </HStack>
          </HStack>
          <HStack>
            <Button
              variant="outline"
              onClick={() => console.log("Logging Out...")}
            >
              Log Out
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
