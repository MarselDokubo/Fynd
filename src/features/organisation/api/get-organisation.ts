import { apiClient } from "@/lib/api-client";
import { useQuery } from "@tanstack/react-query";
import { Type_Organisation } from "../types";

type Type_GetOrganisationOptions = {
  organisationId: string;
};

export function getOrgnisation({
  organisationId
}: Type_GetOrganisationOptions): Promise<Type_Organisation> {
  return apiClient.get(`organisations/${organisationId}`);
}

export function useOrganisation({
  organisationId
}: Type_GetOrganisationOptions) {
  const { data, isLoading } = useQuery({
    queryKey: ["organisations", organisationId],
    queryFn: () => getOrgnisation({ organisationId })
  });
  return { data, isLoading };
}
