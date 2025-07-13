import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default App;
