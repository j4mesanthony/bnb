import AuthenticateForm from "./components/AuthenticateForm";

export default function AuthenticateView() {
  const handleLogin = () => {
    console.log("login!");
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
