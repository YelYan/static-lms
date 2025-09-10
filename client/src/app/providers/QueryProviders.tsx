import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";

export const QueryProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
