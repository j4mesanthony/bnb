import { useFetch } from "../../hooks/useFetch";
import type { UserModel } from "./models/UserModel";
import UserList from "./UserList";

export default function Users() {
  const apiBase = `${import.meta.env.VITE_API_BASE}/api`;
  const endpoint = `${apiBase}/user`;
  const { data } = useFetch<UserModel[]>(endpoint);

  return <>{data?.length && <UserList users={data} />}</>;
}
