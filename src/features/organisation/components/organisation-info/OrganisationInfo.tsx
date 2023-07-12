import { FC } from "react";
import { Type_Organisation } from "../../types";
import { Box, Heading, Stack } from "@chakra-ui/react";
import { InfoCard } from "../../../../components/info-card";
import { Content } from "../../../../components/content";

export type Type_OrganisationInfoProps = {
  organisation: Type_Organisation;
};
export const OrganisationInfo: FC<Type_OrganisationInfoProps> = ({
  organisation
}) => {
  return (
    <>
      <Stack
        w="full"
        alignItems="center"
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Heading>{organisation?.name}</Heading>
        <Stack
          w={{ base: "full", md: "auto" }}
          direction={{ base: "column", md: "row" }}
        >
          <InfoCard label="Email" value={organisation?.email} />
          <InfoCard label="Phone Number" value={organisation?.phone} />
        </Stack>
      </Stack>
      <Content>{organisation?.info}</Content>
    </>
  );
};
