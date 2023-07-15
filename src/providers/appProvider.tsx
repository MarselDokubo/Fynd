import React, { FC, ReactNode } from "react";
import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query/build/lib/QueryClientProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ErrorBoundary } from "react-error-boundary";
import { queryClient } from "@/lib/query-client";
import { theme } from "@/config/theme";

type Props = {
  children: ReactNode;
};

const AppProvider: FC<Props> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </ChakraProvider>
  );
};

export default AppProvider;
