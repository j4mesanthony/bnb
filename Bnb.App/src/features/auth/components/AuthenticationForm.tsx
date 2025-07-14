import { AlertType } from "../../../consts/AlertType";
import { useCredentialsReducer } from "../hooks/useCredentialsReducer";
import AlertMessage from "../../../components/AlertMessage";
import DataInput from "../../../components/DataInput";
import LoadingSpinner from "../../../components/LoadingSpinner";
import PrimaryButton from "../../../components/PrimaryButton";
import type { UserCredentialsDto } from "../dtos/UserCredentialsDto";

type AuthenticateFormProps = {
  handleSubmit: (dto: UserCredentialsDto) => void;
  isLoading?: boolean;
};

export default function AuthenticateForm({
  handleSubmit,
  isLoading = false,
}: AuthenticateFormProps) {
  const { state, dispatch, errorMsg, isFormInvalid, Actions } =
    useCredentialsReducer();

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

      {errorMsg && (
        <AlertMessage type={AlertType.Error}>{errorMsg}</AlertMessage>
      )}

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
        {isLoading && (
          <LoadingSpinner
            data-role="status"
            styleObj={{ position: "absolute", top: "10px", right: "10px" }}
          />
        )}
      </PrimaryButton>
    </>
  );
}
