import { QueryProviders } from "./QueryProviders";
import ReduxProvider from "./ReduxProvides";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <QueryProviders>{children}</QueryProviders>
    </ReduxProvider>
  );
};

export default AppProvider;
