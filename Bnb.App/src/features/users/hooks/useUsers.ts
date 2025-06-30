import { useFetchOnMount } from "../../../hooks/useFetchOnMount";
import type { UserModel } from "../models/UserModel";

const apiBase = `${import.meta.env.VITE_API_BASE}/api`;
const endpoint = `${apiBase}/user`;

export function useUsers() {
  const { data } = useFetchOnMount<UserModel[]>(endpoint);

  return {
    data,
  };
}
