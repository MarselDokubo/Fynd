import { Box } from "@chakra-ui/react";

import { LinkComponent } from "@/components/link";
import { Type_Job } from "../../types";
import { DataTable, Type_DataTableProps } from "@/components/data-table";
import { FC } from "react";

type Type_JobListType = "public" | "dashboard";

export type Type_JobListProps = {
  jobType: Type_JobListType;
  jobs: Type_Job[];
  isLoading?: boolean;
  organisationId: string;
};

const getTableColumns = (organisationId: string, jobType: Type_JobListType) => {
  const tableColumns: Type_DataTableProps<Type_Job>["columns"] = [
    { title: "Position", field: "position" },
    { title: "Department", field: "department" },
    { title: "Location", field: "location" },
    {
      title: "",
      field: "id",
      render: ({ entry: { id } }) => {
        return (
          <LinkComponent
            href={
              jobType === "public"
                ? `/organizations/${organisationId}/jobs/${id}`
                : `/dashboard/jobs/${id}`
            }
          >
            View
          </LinkComponent>
        );
      }
    }
  ];
  return tableColumns;
};

export const JobList: FC<Type_JobListProps> = ({
  jobType,
  jobs,
  isLoading = false,
  organisationId
}) => {
  const tableColumns = getTableColumns(organisationId, jobType);
  return (
    <Box data-testid="jobs-list">
      <DataTable isLoading={isLoading} columns={tableColumns} entry={jobs} />
    </Box>
  );
};
