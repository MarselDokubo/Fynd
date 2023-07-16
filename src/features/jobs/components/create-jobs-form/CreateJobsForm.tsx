import { Box, Stack } from "@chakra-ui/react";

import { Button } from "@/components/button";
import { InputField } from "@/components/form";
import { useForm } from "react-hook-form";
import { useCreateJob } from "../../api/create-job";
import { Type_CreateJobData } from "../../types";

export type Type_CreateJobFormProps = {
  onSuccess: () => void;
};

export const CreateJobForm = ({ onSuccess }: Type_CreateJobFormProps) => {
  const createJob = useCreateJob({ onSuccess });
  const { register, handleSubmit, formState } = useForm<Type_CreateJobData>();
  function onSubmit(data: Type_CreateJobData) {
    createJob.submit({ data });
  }

  return (
    <Box w="full">
      <Stack as="form" onSubmit={handleSubmit(onSubmit)} w="full" spacing="8">
        <InputField
          label="Position"
          {...register("position", { required: "Required" })}
          error={formState.errors["position"]}
        />
        <InputField
          label="Department"
          {...register("department", { required: "Required" })}
          error={formState.errors["department"]}
        />
        <InputField
          label="Location"
          {...register("location", { required: "Required" })}
          error={formState.errors["location"]}
        />

        <InputField
          type="textarea"
          label="Info"
          {...register("info", { required: "Required" })}
          error={formState.errors["info"]}
        />

        <Button
          isDisabled={createJob.isLoading}
          isLoading={createJob.isLoading}
          type="submit"
        >
          Create
        </Button>
      </Stack>
    </Box>
  );
};
