import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { Stack, Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import { NotFound } from "@/components/not-found";
import { Seo } from "@/components/seo";
import { PageLayout } from "@/layouts/PageLayout";
// import { getOrganisation, getJob } from "@/testing/TestData";
import { getJob, PublicJobInfo } from "@/features/jobs";
import { getOrganisation } from "@/features/organisation";

type Type_PublicJobPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export default function PublicJobPage({
  organisation,
  job
}: Type_PublicJobPageProps) {
  const isInvalid =
    !job || !organisation || organisation.id !== job.organisationId;
  if (isInvalid) return <NotFound />;

  return (
    <>
      <Seo title={`${job.position} | ${job.location}`} />
      <Stack w="full">
        <PublicJobInfo job={job} />
        <Button
          bg="primary"
          color="primaryAccent"
          _hover={{ opacity: "0.9" }}
          as="a"
          href={`mailto:${organisation?.email}?subject=Application for ${job.position} position`}
          target="_blank"
        >
          Apply
        </Button>
      </Stack>
    </>
  );
}
PublicJobPage.getLayout = function getlayout(page: ReactElement) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getServerSideProps({
  params
}: GetServerSidePropsContext) {
  const organisationId = params?.organisationId as string;
  const jobId = params?.jobId as string;

  const [organisation, job] = await Promise.all([
    getOrganisation({ organisationId }).catch(() => null),
    getJob({ jobId }).catch(() => null)
  ]);
  return {
    props: {
      organisation,
      job
    }
  };
}
