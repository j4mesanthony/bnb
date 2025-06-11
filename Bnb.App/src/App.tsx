import { useFetch } from "./hooks/useFetch";
import type { UserModel } from "./users/models/UserModel";
import UserList from "./users/UserList";

function App() {
  const apiBase = `${import.meta.env.VITE_API_BASE}/api`;
  const endpoint = `${apiBase}/user`;
  const { data } = useFetch<UserModel[]>(endpoint);

  return (
    <>
      <h1 className="text-8xl font-bold text-red-700 underline w-full text-center pt-28 pb-3">
        Hello.
      </h1>

      {data?.length && <UserList users={data} />}
    </>
  );
}

export default App;
