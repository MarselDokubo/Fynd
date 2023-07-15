// defining the api layer for the jobs feature

import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { Type_Job } from "../types";

type Type_GetJobsOptions = {
  params: {
    organisationId: string | undefined;
  };
};

export function getJobs({ params }: Type_GetJobsOptions): Promise<Type_Job[]> {
  return apiClient.get("/jobs", {
    params
  });
}

export function useJobs({ params }: Type_GetJobsOptions) {
  const { data, isFetching, isFetched } = useQuery({
    queryKey: ["jobs", params],
    queryFn: () => getJobs({ params }),
    enabled: !!params.organisationId,
    initialData: []
  });
  return {
    data,
    isLoading: isFetching && !isFetched
  };
}
