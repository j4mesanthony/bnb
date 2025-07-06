import { useReducer } from "react";

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
  };

  type StateAction = { type: number; payload: string };

  const initialState: State = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const reducer = (state: State, action: StateAction): State => {
    switch (action.type) {
      case Actions.Email:
        return { ...state, email: action.payload };
      case Actions.Password:
        return { ...state, password: action.payload };
      case Actions.ConfirmPassword:
        return { ...state, confirmPassword: action.payload };
      default:
        throw new Error("Unknown action.");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    reducer,
    initialState,
    Actions,
    state,
    dispatch,
  };
}
