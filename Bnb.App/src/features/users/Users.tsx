import { useUsers } from "./hooks/useUsers";
import UserList from "./UserList";

export default function Users() {
  const { data } = useUsers();

  return <>{data?.length && <UserList users={data} />}</>;
}
