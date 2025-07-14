import React, { Component, type ErrorInfo } from "react";
import AlertMessage from "./AlertMessage";
import { AlertType } from "../consts/AlertType";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <AlertMessage type={AlertType.Error}>
            Something went wrong!
          </AlertMessage>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
