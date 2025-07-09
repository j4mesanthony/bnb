import AuthenticationView from "./features/auth/AuthenticationView";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthenticationView />
      </ErrorBoundary>
    </>
  );
}

export default App;
