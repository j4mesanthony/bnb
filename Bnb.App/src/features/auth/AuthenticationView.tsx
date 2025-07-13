import { authenticationApi } from "./api/authenticationApi";
import AuthenticateForm from "./components/AuthenticationForm";
import type { UserCredentialsDto } from "./dtos/UserCredentialsDto";

export default function AuthenticationView() {
  const handleLogin = async (dto: UserCredentialsDto) => {
    await authenticationApi.login(dto);
  };

  return (
    <>
      <div className="w-full max-w-md">
        <AuthenticateForm handleSubmit={handleLogin} />
      </div>
    </>
  );
}
