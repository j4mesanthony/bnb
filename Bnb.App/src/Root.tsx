import { Outlet } from "react-router";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
