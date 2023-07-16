import React, { FC } from "react";
import { Heading, Stack } from "@chakra-ui/react";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ReactElement } from "react";
import { Seo } from "@/components/seo";
import { NotFound } from "@/components/not-found";
import { JobList, getJobs, Type_Job } from "@/features/jobs";
import { getOrganisation, OrganisationInfo } from "@/features/organisation";
import { PageLayout } from "@/layouts/PageLayout";
// import { getJobs, getOrganisation } from "@/testing/TestData";
import { type } from "os";

type Type_PublicOrganisationPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

const PublicOrganisationPage = ({
  organisation,
  jobs
}: Type_PublicOrganisationPageProps) => {
  if (!organisation) return <NotFound />;
  return (
    <>
      <Seo title={organisation.name} />

      <Stack
        spacing="4"
        w="full"
        maxWidth="container.lg"
        mx="auto"
        mt="12"
        p="4"
      >
        <OrganisationInfo organisation={organisation} />
        <Heading size="md" my="6">
          Open Jobs
        </Heading>
        <JobList
          jobs={jobs}
          organisationId={organisation.id ?? ""}
          jobType="public"
        />
      </Stack>
    </>
  );
};
PublicOrganisationPage.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export default PublicOrganisationPage;

export async function getServerSideProps({
  params
}: GetServerSidePropsContext) {
  const organisationId = params?.organisationId as string;
  const [organisation, jobs] = await Promise.all([
    getOrganisation({ organisationId }).catch(() => null),
    getJobs({ params: { organisationId } }).catch(() => [] as Type_Job[])
  ]);
  return {
    props: {
      organisation,
      jobs
    }
  };
}
