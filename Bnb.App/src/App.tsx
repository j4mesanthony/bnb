import DataInput from "./components/DataInput";
import Users from "./features/users/Users";

function App() {
  return (
    <>
      <h1 className="text-8xl font-bold text-red-700 underline w-full text-center pt-28 pb-3">
        _
      </h1>
      <DataInput id="name" label="Name" handleChange={() => {}} />
      <Users />
    </>
  );
}

export default App;
