import type { UserModel } from "../models/UserModel";

type UserListProps = {
  users: UserModel[];
};

export default function UserList({ users = [] }: UserListProps) {
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
