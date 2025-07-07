import { useReducer } from "react";

const MIN_PWD_LEN = 12;

export function useCredentialsReducer() {
  const Actions = {
    Email: 1,
    Password: 2,
    ConfirmPassword: 3,
  };

  type State = {
    email: string;
    password: string;
    confirmPassword: string;
    emailError: string | null;
    passwordError: string | null;
    confirmPasswordError: string | null;
  };

  type StateAction = { type: number; payload: string };

  const initialState: State = {
    email: "",
    password: "",
    confirmPassword: "",
    emailError: null,
    passwordError: null,
    confirmPasswordError: null,
  };

  const isValidEmail = (input: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);

  const isPasswordMinLen = (input: string): boolean =>
    input.length >= MIN_PWD_LEN;

  const reducer = (state: State, action: StateAction): State => {
    switch (action.type) {
      case Actions.Email: {
        const isValid = isValidEmail(action.payload);

        return {
          ...state,
          email: action.payload,
          emailError: isValid ? null : "Invalid email address",
        };
      }

      case Actions.Password: {
        const isValid = isPasswordMinLen(action.payload);

        return {
          ...state,
          password: action.payload,
          passwordError: isValid
            ? null
            : `Password must be at least ${MIN_PWD_LEN} characters.`,
        };
      }

      case Actions.ConfirmPassword: {
        const isValid = action.payload === state.password;
        return {
          ...state,
          confirmPassword: action.payload,
          confirmPasswordError: isValid ? null : "Passwords must match.",
        };
      }

      default:
        throw new Error("Unknown action.");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const errorMsg =
    state.emailError || state.passwordError || state.confirmPasswordError || "";

  return {
    Actions,
    dispatch,
    errorMsg,
    initialState,
    reducer,
    state,
  };
}
