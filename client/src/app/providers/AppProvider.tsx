import { QueryProviders } from "./QueryProviders";
import { AuthProvider } from "./AuthProvider";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProviders>
      <AuthProvider>{children}</AuthProvider>
    </QueryProviders>
  );
};

export default AppProvider;
