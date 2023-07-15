import { Type_Entity } from "@/types";

export type AuthUser = Type_Entity & {
  email: string;
  organizationId: string;
};

export type LoginData = {
  email: string;
  password: string;
};
