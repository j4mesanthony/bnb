import { useState } from "react";
import { authenticationApi } from "./api/authenticationApi";
import AuthenticateForm from "./components/AuthenticationForm";
import type { UserCredentialsDto } from "./dtos/UserCredentialsDto";

export default function AuthenticationView() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async (dto: UserCredentialsDto) => {
    setIsLoading(true);

    try {
      await authenticationApi.login(dto);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <>
      <div className="w-full max-w-md">
        <AuthenticateForm handleSubmit={handleLogin} isLoading={isLoading} />
      </div>
    </>
  );
}
