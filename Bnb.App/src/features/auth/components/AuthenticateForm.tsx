import DataInput from "../../../components/DataInput";
import PrimaryButton from "../../../components/PrimaryButton";
import type { UserCredentialsDto } from "../dtos/UserCredentialsDto";
import { useCredentialsReducer } from "../hooks/useCredentialsReducer";

type AuthenticateFormProps = {
  handleSubmit: (dto: UserCredentialsDto) => void;
};

export default function AuthenticateForm({
  handleSubmit,
}: AuthenticateFormProps) {
  const { state, dispatch, Actions } = useCredentialsReducer();

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email);

  const isFormInvalid =
    !state.email ||
    !state.password ||
    !state.confirmPassword ||
    state.password !== state.confirmPassword ||
    !isValidEmail;

  return (
    <>
      <div className="mb-5">
        <DataInput
          id="email"
          label="Email"
          type="email"
          value={state.email}
          handleChange={(value) =>
            dispatch({ type: Actions.Email, payload: value as string })
          }
        />
      </div>
      <div className="mb-5">
        <DataInput
          id="password"
          label="Password"
          type="password"
          value={state.password}
          handleChange={(value) =>
            dispatch({ type: Actions.Password, payload: value as string })
          }
        />
      </div>
      <div className="mb-5">
        <DataInput
          id="confirm"
          label="Confirm Password"
          type="password"
          value={state.confirmPassword}
          handleChange={(value) =>
            dispatch({
              type: Actions.ConfirmPassword,
              payload: value as string,
            })
          }
        />
      </div>

      <PrimaryButton
        isDisabled={isFormInvalid}
        handleClick={() =>
          handleSubmit({
            email: state.email,
            password: state.password,
          })
        }
      >
        Login
      </PrimaryButton>
    </>
  );
}
