import { Center } from "@chakra-ui/react";
import { LinkComponent } from "@/components/link";
import { NotFound } from "@/components/not-found";

function NotFoundPage() {
  return (
    <>
      <NotFound />
      <Center>
        <LinkComponent href="/">Home</LinkComponent>
      </Center>
    </>
  );
}
