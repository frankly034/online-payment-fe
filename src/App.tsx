import { Routes, Route } from "react-router-dom";
import { Donate, Donation, Error } from "./pages";
import { Layout } from "./components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Donate />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
