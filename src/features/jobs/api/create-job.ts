import { apiClient } from "@/lib/api-client";
import { useMutation } from "@tanstack/react-query";
import { Type_Job, Type_CreateJobData } from "../types";
import { queryClient } from "@/lib/query-client";

type Type_CreateJobOptions = {
  data: Type_CreateJobData;
};

type Type_UseCreateJobOption = {
  onSuccess?: (job: Type_Job) => void;
};

export function createJob({ data }: Type_CreateJobOptions): Promise<Type_Job> {
  return apiClient.post(`/jobs`, data);
}

export function useCreateJob({ onSuccess }: Type_UseCreateJobOption) {
  const { mutate: submit, isLoading } = useMutation({
    mutationFn: createJob,
    onSuccess: job => {
      queryClient.invalidateQueries(["jobs"]);
      onSuccess?.(job);
    }
  });
  return { submit, isLoading };
}
