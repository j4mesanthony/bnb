import type { UserModel } from "./models/UserModel";

export default function UserList({ users = [] }: { users: UserModel[] }) {
  return (
    <>
      <h3>Users:</h3>
      {users.map((user, i) => (
        <p key={i}>
          {user.firstName} {user.lastName}
        </p>
      ))}
    </>
  );
}
