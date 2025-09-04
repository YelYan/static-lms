import { QueryProviders } from "./QueryProviders";
import ReduxProvider from "./ReduxProvides";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryProviders>
      <ReduxProvider>{children}</ReduxProvider>
    </QueryProviders>
  );
};

export default AppProvider;
