import { useEffect, useState } from "react";

type UserModel = {
  id: number;
  age: number;
  email: string;
  firstName: string;
  // gender: Gender;
  lastName: string;
  phone?: string | null;
  // userType: UserType;
};

function App() {
  const [users, setUsers] = useState<UserModel[]>([]);
  const apiBase = `${import.meta.env.VITE_API_BASE}/api`;
  const endpoint = `${apiBase}/user`;

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data: UserModel[]) => setUsers(data))
      .catch(console.error);
  }, [endpoint]);

  return (
    <>
      <h1 className="text-8xl font-bold text-red-700 underline w-full text-center pt-28 pb-3">
        Hello.
      </h1>
      <h1 className="text-4xl font-bold text-red-700 w-full text-center">
        {users.length} users.
      </h1>
    </>
  );
}

export default App;
