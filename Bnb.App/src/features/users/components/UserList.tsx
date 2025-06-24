import type { UserModel } from "../models/UserModel";

type UserListProps = {
  users: UserModel[];
};

export default function UserList({ users = [] }: UserListProps) {
  const usersLen = users.length;

  return (
    <>
      <h3>
        {usersLen ? `${usersLen} User${usersLen > 1 ? "s" : ""}` : "No users"}
      </h3>
      {usersLen &&
        users.map((user, i) => (
          <p key={i}>
            {user.firstName} {user.lastName}
          </p>
        ))}
    </>
  );
}
