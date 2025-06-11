import { useFetch } from "./hooks/useFetch";

type UserModel = {
  id: number;
  age: number;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string | null;
  // gender: Gender;
  // userType: UserType;
};

function App() {
  const apiBase = `${import.meta.env.VITE_API_BASE}/api`;
  const endpoint = `${apiBase}/user`;

  const { data } = useFetch<UserModel[]>(endpoint);

  return (
    <>
      <h1 className="text-8xl font-bold text-red-700 underline w-full text-center pt-28 pb-3">
        Hello.
      </h1>
      <h1 className="text-4xl font-bold text-red-700 w-full text-center">
        {data?.length} users.
      </h1>
    </>
  );
}

export default App;
