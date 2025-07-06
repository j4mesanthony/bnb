import { useReducer } from "react";
import DataInput from "../../../components/DataInput";
import PrimaryButton from "../../../components/PrimaryButton";
import type { UserCredentials } from "../../dtos/userCredentials";

type AuthenticateFormProps = {
  handleSubmit: (dto: UserCredentials) => void;
};

type State = {
  email: string;
  password: string;
  confirmPassword: string;
};

type StateAction =
  | { type: "EMAIL"; payload: string | number }
  | { type: "PASSWORD"; payload: string | number }
  | { type: "CONFIRMPASSWORD"; payload: string | number };

const credentialsReducer = (state: State, action: StateAction): State => {
  switch (action.type) {
    case "EMAIL":
      return {
        email: action.payload as string,
        password: state.password,
        confirmPassword: state.confirmPassword,
      };
    case "PASSWORD":
      return {
        email: state.email,
        password: action.payload as string,
        confirmPassword: state.confirmPassword,
      };

    case "CONFIRMPASSWORD":
      return {
        email: state.email,
        password: state.password,
        confirmPassword: action.payload as string,
      };
    default:
      return state;
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

  const isFormInvalid =
    !state.email ||
    !state.password ||
    !state.confirmPassword ||
    state.password !== state.confirmPassword;

  return (
    <>
      <div className="mb-5">
        <DataInput
          id="email"
          label="Email"
          type="email"
          value={state.email}
          handleChange={(payload) => dispatch({ type: "EMAIL", payload })}
        />
      </div>
      <div className="mb-5">
        <DataInput
          id="password"
          label="Password"
          type="password"
          value={state.password}
          handleChange={(payload) => dispatch({ type: "PASSWORD", payload })}
        />
      </div>
      <div className="mb-5">
        <DataInput
          id="confirm"
          label="Confirm Password"
          type="password"
          value={state.confirmPassword}
          handleChange={(payload) =>
            dispatch({ type: "CONFIRMPASSWORD", payload })
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
