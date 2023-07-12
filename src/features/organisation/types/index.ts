import { Type_Entity } from "@/types";

export type Type_Organisation = Type_Entity & {
  adminId: string;
  name: string;
  email: string;
  phone: string;
  info: string;
};
