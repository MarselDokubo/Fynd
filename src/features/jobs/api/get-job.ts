import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import { Type_Job } from "../types";

type Type_GetJobsOptions = {
  jobId: string;
};

export function getJob({ jobId }: Type_GetJobsOptions): Promise<Type_Job> {
  return apiClient.get(`jobs/${jobId}`);
}

export function useJob({ jobId }: Type_GetJobsOptions) {
  const { data, isLoading } = useQuery({
    queryKey: ["jobs", jobId],
    queryFn: () => getJob({ jobId })
  });
  return { data, isLoading };
}
