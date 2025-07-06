import { useReducer } from "react";
import DataInput from "../../../components/DataInput";
import PrimaryButton from "../../../components/PrimaryButton";
import type { UserCredentialsDto } from "../dtos/UserCredentialsDto";

type AuthenticateFormProps = {
  handleSubmit: (dto: UserCredentialsDto) => void;
};

type State = {
  email: string;
  password: string;
  confirmPassword: string;
};

type StateAction =
  | { type: "EMAIL"; payload: string }
  | { type: "PASSWORD"; payload: string }
  | { type: "CONFIRMPASSWORD"; payload: string };

const credentialsReducer = (state: State, action: StateAction): State => {
  switch (action.type) {
    case "EMAIL":
      return {
        email: action.payload,
        password: state.password,
        confirmPassword: state.confirmPassword,
      };
    case "PASSWORD":
      return {
        email: state.email,
        password: action.payload,
        confirmPassword: state.confirmPassword,
      };

    case "CONFIRMPASSWORD":
      return {
        email: state.email,
        password: state.password,
        confirmPassword: action.payload,
      };
    default:
      throw new Error("Unknown action.");
  }
};

export default function AuthenticateForm({
  handleSubmit,
}: AuthenticateFormProps) {
  const [state, dispatch] = useReducer(credentialsReducer, {
    email: "",
    password: "",
    confirmPassword: "",
  });

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
            dispatch({ type: "EMAIL", payload: value as string })
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
            dispatch({ type: "PASSWORD", payload: value as string })
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
            dispatch({ type: "CONFIRMPASSWORD", payload: value as string })
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
