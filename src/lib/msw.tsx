import { MSWDevTools } from "msw-devtools";
import { ReactNode } from "react";

import { IS_DEVELOPMENT } from "@/config/constants";
import { db, handlers } from "@/testing/mocks";

export type Type_MSWWrapperProps = {
  children: ReactNode;
};

require("@/testing/mocks/initialize");

export function MSWWrapper({ children }: Type_MSWWrapperProps) {
  return (
    <>
      {IS_DEVELOPMENT && <MSWDevTools db={db} handlers={handlers} />}
      {children}
    </>
  );
}
