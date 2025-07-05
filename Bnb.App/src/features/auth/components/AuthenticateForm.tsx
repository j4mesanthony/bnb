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
};

type StateAction =
  | { type: "EMAIL"; payload: string | number }
  | { type: "PASSWORD"; payload: string | number };

const credentialsReducer = (state: State, action: StateAction): State => {
  switch (action.type) {
    case "EMAIL":
      return { email: action.payload as string, password: state.password };
    case "PASSWORD":
      return { email: state.email, password: action.payload as string };
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
  });

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
          value=""
          handleChange={() => {}}
        />
      </div>

      <PrimaryButton
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
