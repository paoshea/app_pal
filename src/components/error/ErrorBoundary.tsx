
import React, { Component, ErrorInfo } from 'react';
import ErrorPage from '../../pages/ErrorPage';
import { reportError } from '../../utils/errorReporting';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    reportError(error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error} />;
    }

    return this.props.children;
  }
}
