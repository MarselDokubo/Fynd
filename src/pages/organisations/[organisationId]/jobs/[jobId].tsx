import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { PublicJobInfo } from "@/features/jobs";
import { Stack, Button } from "@chakra-ui/react";
import { ReactElement } from "react";
import { NotFound } from "@/components/not-found";
import { Seo } from "@/components/seo";
import { PageLayout } from "@/layouts/PageLayout";
import { getOrganisation, getJob } from "@/testing/TestData";

type Type_PublicJobPageProps = InferGetServerSidePropsType<
  typeof getServerSideProps
>;

export default function PublicJobPage({
  organisation,
  job
}: Type_PublicJobPageProps) {
  const isInvalid =
    !job || !organisation || organisation.id !== job.organisation.id;
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
