import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ErrorBoundary } from "react-error-boundary";
import SomethingWentWrongPage from "./Screens/Components/SomethingWentWrongPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary fallback={<SomethingWentWrongPage />}>
          <QueryClientProvider client={queryClient}>
            <Routes />
          </QueryClientProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
