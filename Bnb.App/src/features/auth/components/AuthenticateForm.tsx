import { useCredentialsReducer } from "../hooks/useCredentialsReducer";
import DataInput from "../../../components/DataInput";
import PrimaryButton from "../../../components/PrimaryButton";
import type { UserCredentialsDto } from "../dtos/UserCredentialsDto";

type AuthenticateFormProps = {
  handleSubmit: (dto: UserCredentialsDto) => void;
};

export default function AuthenticateForm({
  handleSubmit,
}: AuthenticateFormProps) {
  const { state, dispatch, errorMsg, Actions } = useCredentialsReducer();

  const isFormInvalid =
    !state.email ||
    !state.password ||
    !state.confirmPassword ||
    state.password !== state.confirmPassword ||
    !!state.emailError ||
    !!state.passwordError ||
    !!state.confirmPasswordError;

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

      {/* TODO: AlertMessage */}
      <div
        className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        {errorMsg}
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
