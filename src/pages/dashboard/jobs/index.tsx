import { PlusSquareIcon } from "@chakra-ui/icons";
import { Heading, HStack } from "@chakra-ui/react";
import { ReactElement } from "react";

import { LinkComponent } from "@/components/link";
import { Loading } from "@/components/loading";
import { Seo } from "@/components/seo";
import { JobList } from "@/features/jobs";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { useJobs, useUser } from "@/testing/TestData";

function DashboardJobsPage() {
  const user = useUser();
  const jobs = useJobs(user.data?.organisationId ?? "");
  if (jobs.isLoading) return <Loading />;

  if (!user.data) return null;

  return (
    <>
      <Seo title="Jobs" />
      <HStack mb="8" align="center" justify="space-between">
        <Heading>Jobs</Heading>
        <LinkComponent
          href="/dashboard/jobs/create"
          variant="solid"
          icon={<PlusSquareIcon />}
        >
          Create Jobs
        </LinkComponent>
      </HStack>
      <JobList
        jobs={jobs.data || []}
        isLoading={jobs.isLoading}
        organisationId={user.data.organisationId}
        jobType="dashboard"
      />
    </>
  );
}

DashboardJobsPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default DashboardJobsPage;
