import DataInput from "../../components/DataInput";
import PrimaryButton from "../../components/PrimaryButton";

export default function AuthenticateView() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md">
          <div className="mb-5">
            <DataInput id="email" label="Email" handleChange={() => {}} />
          </div>
          <div className="mb-5">
            <DataInput
              id="password"
              label="Password"
              type="password"
              handleChange={() => {}}
            />
          </div>
          <div className="mb-5">
            <DataInput
              id="confirm"
              label="Confirm Password"
              type="password"
              handleChange={() => {}}
            />
          </div>

          <PrimaryButton>Login</PrimaryButton>
        </div>
      </div>
    </>
  );
}
