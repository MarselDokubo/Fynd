import { Type_Job } from "../../types";
import { LinkComponent } from "@/components/link";
import { Content } from "@/components/content";
import { Heading, HStack, VStack, Text } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";

export function PublicJobInfo({ job }: { job: Type_Job }) {
  return (
    <>
      <VStack pt="16" pb="4" spacing="8">
        <Heading size="2xl">{job?.position}</Heading>
        <HStack spacing="12">
          <Text>{job?.department}</Text>
          <Text>{job?.location}</Text>
        </HStack>
        <LinkComponent
          variant="outline"
          href={`/organisations/${job?.organisationId}`}
          icon={<ViewIcon />}
        >
          View more jobs
        </LinkComponent>
      </VStack>
      <Content>{job?.info}</Content>
    </>
  );
}
