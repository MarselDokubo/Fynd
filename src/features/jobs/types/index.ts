import { Type_Entity } from "@/types";

export type Type_Job = Type_Entity & {
  organisationId: string;
  position: string;
  info: string;
  department: string;
  location: string;
};

export type Type_CreateJobData = Pick<
  Type_Job,
  "position" | "department" | "location" | "info"
>;
