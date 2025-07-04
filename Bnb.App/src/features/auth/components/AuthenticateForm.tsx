import DataInput from "../../../components/DataInput";
import PrimaryButton from "../../../components/PrimaryButton";

type AuthenticateFormProps = {
  handleSubmit: () => void;
};

export default function AuthenticateForm({
  handleSubmit,
}: AuthenticateFormProps) {
  return (
    <>
      <div className="mb-5">
        <DataInput
          id="email"
          label="Email"
          type="email"
          handleChange={() => {}}
        />
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

      <PrimaryButton handleClick={handleSubmit}>Login</PrimaryButton>
    </>
  );
}
