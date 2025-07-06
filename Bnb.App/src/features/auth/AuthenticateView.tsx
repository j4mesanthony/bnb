import AuthenticateForm from "./components/AuthenticateForm";
import type { UserCredentialsDto } from "./dtos/UserCredentialsDto";

export default function AuthenticateView() {
  const handleLogin = (dto: UserCredentialsDto) => {
    console.log("login!");
    console.log("dto: ", dto);
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md">
          <AuthenticateForm handleSubmit={handleLogin} />
        </div>
      </div>
    </>
  );
}
