import { apiHandler } from "../../../utils/apiHandler";
import type { UserCredentialsDto } from "../dtos/UserCredentialsDto";

const apiBase = `${import.meta.env.VITE_API_BASE}`;
const url = `${apiBase}/authentication`;

export const authenticationApi = {
  login(dto: UserCredentialsDto) {
    return apiHandler.post(url, dto, false);
  },
};
